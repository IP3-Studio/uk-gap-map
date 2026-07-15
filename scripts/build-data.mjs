// Extracts the canonical site dataset from the July 2026 research workflow output.
// Source of truth: data/raw/workflow-output.json (result.domains + result.extraDomains).
// Output: data/domains.json, data/gaps.json — regenerate with `npm run data`.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(readFileSync(path.join(here, "../data/raw/workflow-output.json"), "utf8"));

const COMPILED = "2026-07-07"; // research pass date; drives review_by tiering (SCOPE.md §8)
const REVIEW_BY = { short: "2026-10-07", mid: "2027-01-07", long: "2027-07-07" };

// Display metadata per domain, in research order (result.domains[0..13], result.extraDomains[0..3]).
const DOMAIN_META = [
  { slug: "civic-society", shortName: "Civic society", hue: 16 },
  { slug: "open-source-public-goods", shortName: "Open source & public goods", hue: 145 },
  { slug: "youth-mobilisation", shortName: "Youth mobilisation", hue: 45 },
  { slug: "education-ai", shortName: "Education & AI", hue: 200 },
  { slug: "growth-stagnation", shortName: "Growth & stagnation", hue: 260 },
  { slug: "debt", shortName: "Debt", hue: 350 },
  { slug: "surveillance", shortName: "Surveillance", hue: 220 },
  { slug: "corruption-integrity", shortName: "Corruption & integrity", hue: 30 },
  { slug: "parallel-institutions", shortName: "Parallel institutions", hue: 170 },
  { slug: "portable-sovereignty", shortName: "Portable sovereignty", hue: 285 },
  { slug: "privacy", shortName: "Privacy", hue: 320 },
  { slug: "ai-crisis", shortName: "AI crisis preparedness", hue: 0 },
  { slug: "funding-gaps", shortName: "Funding (lens)", hue: 95 },
  { slug: "policy-gaps", shortName: "Policy (lens)", hue: 60 },
  { slug: "health-social-care", shortName: "Health & social care", hue: 185 },
  { slug: "justice-access", shortName: "Justice & access", hue: 240 },
  { slug: "local-state-capacity", shortName: "Local state", hue: 110 },
  { slug: "national-resilience", shortName: "National resilience", hue: 75 },
];

const slugify = (s, max = 70) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, max)
    .replace(/-+$/, "");

const normHorizon = (h) => {
  const l = (h || "").toLowerCase();
  return l.startsWith("short") ? "short" : l.startsWith("mid") ? "mid" : "long";
};

const sourceDomains = [...raw.result.domains, ...raw.result.extraDomains];
if (sourceDomains.length !== DOMAIN_META.length) {
  throw new Error(`Expected ${DOMAIN_META.length} domains, got ${sourceDomains.length}`);
}

// Hand-curated entries added after the July 2026 research pass (e.g. the
// decentralisation lens). Same shape as research gaps + domain slug + lens tag.
let additions = [];
try {
  additions = JSON.parse(readFileSync(path.join(here, "../data/additions.json"), "utf8"));
} catch {
  /* no additions file yet */
}

const domains = [];
const gaps = [];
const seenSlugs = new Set();
let number = 0;

const pushGap = (g, domainSlug, extra = {}) => {
  number += 1;
  let slug = slugify(g.title) || `gap-${number}`;
  while (seenSlugs.has(slug)) slug = `${slug}-${number}`;
  seenSlugs.add(slug);
  const horizon = normHorizon(g.horizon);
  gaps.push({
    number,
    slug,
    title: g.title,
    domain: domainSlug,
    type: (g.gap_type || "").toLowerCase().trim(),
    horizon,
    description: g.description,
    why: g.why_it_matters,
    fill: g.what_would_fill_it,
    sources: g.sources || [],
    status: "candidate",
    provenance: {
      added: extra.added || COMPILED,
      lastVerified: extra.added || COMPILED,
      reviewBy: REVIEW_BY[horizon],
    },
    ...(extra.lens ? { lens: extra.lens } : {}),
  });
};

sourceDomains.forEach((d, i) => {
  const meta = DOMAIN_META[i];
  domains.push({
    num: i + 1,
    slug: meta.slug,
    name: d.domain,
    shortName: meta.shortName,
    hue: meta.hue,
    landscape: d.landscape,
    actors: d.actors,
    funders: d.funders,
    policyNotes: d.policy_notes,
    sources: d.sources,
    gapCount: d.gaps.length,
  });

  d.gaps.forEach((g) => pushGap(g, meta.slug));
});

// Curated domains added after the research pass (e.g. Local AI, Other). They
// start with zero research gaps; entries arrive via rehomes or additions.
try {
  const extraDomains = JSON.parse(readFileSync(path.join(here, "../data/domains-extra.json"), "utf8"));
  for (const d of extraDomains) {
    if (domains.some((x) => x.slug === d.slug)) throw new Error(`domains-extra: duplicate slug "${d.slug}"`);
    domains.push({ num: domains.length + 1, gapCount: 0, ...d });
  }
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}

for (const a of additions) {
  const domain = domains.find((d) => d.slug === a.domain);
  if (!domain) throw new Error(`additions.json: unknown domain slug "${a.domain}"`);
  pushGap(a, a.domain, { lens: a.lens, added: a.added });
  domain.gapCount += 1;
}

// Permission axis (build-now | build-together | state-led), classified July 2026,
// keyed by gap number. See data/permissions.json.
try {
  const perms = JSON.parse(readFileSync(path.join(here, "../data/permissions.json"), "utf8"));
  const byNumber = new Map(perms.map((p) => [p.number, p]));
  for (const g of gaps) {
    const p = byNumber.get(g.number);
    if (p) {
      g.permission = p.permission;
      g.dataReady = p.data_ready;
      g.permissionNote = p.note;
    }
  }
  const unclassified = gaps.filter((g) => !g.permission).length;
  if (unclassified) console.warn(`WARNING: ${unclassified} gaps have no permission classification`);
} catch {
  console.warn("WARNING: data/permissions.json missing — permission axis not attached");
}

// Human copy layer (taglines, summaries, domain intros) written by the editorial
// pass — see data/copy.json. The research text stays; this is the reading layer.
try {
  const copy = JSON.parse(readFileSync(path.join(here, "../data/copy.json"), "utf8"));
  const gapCopy = new Map((copy.gap_copy || []).map((c) => [c.number, c]));
  for (const g of gaps) {
    const c = gapCopy.get(g.number);
    if (c) {
      g.tagline = c.tagline;
      g.summary = c.summary;
    }
  }
  const intros = new Map((copy.domain_intros || []).map((d) => [d.slug, d.intro]));
  for (const d of domains) {
    const intro = intros.get(d.slug);
    if (intro) d.intro = intro;
  }
  const uncovered = gaps.filter((g) => !g.tagline).length;
  if (uncovered) console.warn(`WARNING: ${uncovered} gaps have no editorial copy`);
} catch {
  console.warn("WARNING: data/copy.json missing — editorial layer not attached");
}

// Dialogue briefs for build-together gaps — the institutional conversation kit.
try {
  const dialogue = JSON.parse(readFileSync(path.join(here, "../data/dialogue.json"), "utf8"));
  const byNumber = new Map((dialogue.briefs || []).map((b) => [b.number, b]));
  for (const g of gaps) {
    const b = byNumber.get(g.number);
    if (b) g.dialogue = { counterparty: b.counterparty, ask: b.ask, weBring: b.weBring, theyGain: b.theyGain, firstStep: b.firstStep };
  }
  const missing = gaps.filter((g) => g.permission === "build-together" && !g.dialogue).length;
  if (missing) console.warn(`WARNING: ${missing} build-together gaps have no dialogue brief`);
} catch {
  console.warn("WARNING: data/dialogue.json missing — dialogue kit not attached");
}

// Curation layer (v2, July 2026): canonical merges, lens-domain re-homes,
// cross-references, editorial rank and AI capability-time. See data/curation.json.
// The funding-gaps and policy-gaps "domains" are cross-cutting lenses: their
// entries either merge into a vertical-domain gap or re-home into one, carrying
// a `facet` marking their lens origin. Merged members become aliases (old URLs
// redirect via next.config.mjs) and their text is preserved under mergedFrom.
const LENS_DOMAINS = new Set(["funding-gaps", "policy-gaps"]);
const aliases = [];
let curation = null;
try {
  curation = JSON.parse(readFileSync(path.join(here, "../data/curation.json"), "utf8"));
} catch {
  console.warn("WARNING: data/curation.json missing — curation layer not applied");
}
if (curation) {
  const byNumber = new Map(gaps.map((g) => [g.number, g]));
  const domainSlugs = new Set(domains.map((d) => d.slug));

  for (const r of curation.rehomes || []) {
    const g = byNumber.get(r.number);
    if (!g) throw new Error(`curation rehome: unknown gap ${r.number}`);
    if (!domainSlugs.has(r.to) || LENS_DOMAINS.has(r.to)) throw new Error(`curation rehome: bad domain "${r.to}"`);
    if (LENS_DOMAINS.has(g.domain)) g.facet = g.domain;
    g.domain = r.to;
  }

  const mergedNumbers = new Set();
  for (const m of curation.merges || []) {
    const canonical = byNumber.get(m.canonical);
    if (!canonical) throw new Error(`curation merge: unknown canonical ${m.canonical}`);
    if (LENS_DOMAINS.has(canonical.domain)) throw new Error(`curation merge: canonical ${m.canonical} is in a lens domain`);
    for (const num of m.members) {
      const member = byNumber.get(num);
      if (!member) throw new Error(`curation merge: unknown member ${num}`);
      if (num === m.canonical || mergedNumbers.has(num)) throw new Error(`curation merge: gap ${num} merged twice`);
      mergedNumbers.add(num);
      if (LENS_DOMAINS.has(member.domain)) {
        canonical.facets = [...new Set([...(canonical.facets || []), member.domain])];
      } else if (member.domain !== canonical.domain) {
        canonical.alsoDomains = [...new Set([...(canonical.alsoDomains || []), member.domain])];
      }
      canonical.sources = [...new Set([...canonical.sources, ...member.sources])];
      canonical.mergedFrom = [
        ...(canonical.mergedFrom || []),
        { number: member.number, title: member.title, domain: member.domain,
          description: member.description, fill: member.fill },
      ];
      aliases.push({ number: member.number, slug: member.slug, title: member.title,
        canonicalNumber: canonical.number, canonicalSlug: canonical.slug });
    }
    if (m.permission && m.permission !== canonical.permission) {
      canonical.permission = m.permission;
      if (m.permission_note) canonical.permissionNote = m.permission_note;
    }
    if (m.note) canonical.curationNote = m.note;
  }
  for (const num of mergedNumbers) {
    const i = gaps.findIndex((g) => g.number === num);
    gaps.splice(i, 1);
  }

  for (const x of curation.crossRefs || []) {
    const members = x.numbers.map((n) => byNumber.get(n));
    for (const g of members) {
      if (!g) throw new Error(`curation crossRef: unknown gap in [${x.numbers}]`);
      if (mergedNumbers.has(g.number)) throw new Error(`curation crossRef: gap ${g.number} was merged away`);
    }
    for (const g of members) {
      const others = members.filter((o) => o.number !== g.number)
        .map((o) => ({ number: o.number, slug: o.slug, title: o.title, domain: o.domain }));
      g.seeAlso = [...(g.seeAlso || []), ...others.filter((o) => !(g.seeAlso || []).some((s) => s.number === o.number))];
    }
  }

  for (const r of curation.ranks || []) {
    const g = byNumber.get(r.number);
    if (!g) throw new Error(`curation rank: unknown gap ${r.number}`);
    if (mergedNumbers.has(r.number)) throw new Error(`curation rank: gap ${r.number} was merged away`);
    if (!Number.isInteger(r.rank) || r.rank < 0 || r.rank > 5) throw new Error(`curation rank: bad rank for ${r.number}`);
    g.rank = r.rank;
    if (r.note) g.rankNote = r.note;
  }
  const unranked = gaps.filter((g) => g.rank === undefined).length;
  if (unranked) console.warn(`WARNING: ${unranked} canonical gaps have no editorial rank`);

  for (const c of curation.capabilityTime || []) {
    const g = byNumber.get(c.number);
    if (!g) throw new Error(`curation capabilityTime: unknown gap ${c.number}`);
    g.capabilityTime = c.window;
    if (c.note) g.capabilityTimeNote = c.note;
  }

  // gapCount becomes "canonical gaps homed here"; lens domains drop to zero.
  for (const d of domains) {
    d.gapCount = gaps.filter((g) => g.domain === d.slug).length;
    if (LENS_DOMAINS.has(d.slug)) d.lens = true;
  }
}

const badSlug = gaps.find((g) => !/^[a-z0-9][a-z0-9-]*$/.test(g.slug));
if (badSlug) throw new Error(`Malformed slug for gap ${badSlug.number}: "${badSlug.slug}"`);
if (new Set(gaps.map((g) => g.slug)).size !== gaps.length) throw new Error("Duplicate slugs in output");

// house style: no em-dashes anywhere in published content (July 2026 scrub)
const emDashes = (JSON.stringify(gaps) + JSON.stringify(domains)).split("—").length - 1;
if (emDashes) console.warn(`WARNING: ${emDashes} em-dashes in generated dataset — house style is none; fix the source layer`);

writeFileSync(path.join(here, "../data/domains.json"), JSON.stringify(domains, null, 1));
writeFileSync(path.join(here, "../data/gaps.json"), JSON.stringify(gaps, null, 1));
writeFileSync(path.join(here, "../data/aliases.json"), JSON.stringify(aliases, null, 1));
// public copies power the site's "download the dataset" links
mkdirSync(path.join(here, "../public/data"), { recursive: true });
writeFileSync(path.join(here, "../public/data/gaps.json"), JSON.stringify(gaps, null, 1));
writeFileSync(path.join(here, "../public/data/domains.json"), JSON.stringify(domains, null, 1));

const byType = {};
const byHorizon = {};
for (const g of gaps) {
  byType[g.type] = (byType[g.type] || 0) + 1;
  byHorizon[g.horizon] = (byHorizon[g.horizon] || 0) + 1;
}
const byPermission = {};
for (const g of gaps) byPermission[g.permission] = (byPermission[g.permission] || 0) + 1;
console.log(`domains: ${domains.length} (${domains.filter((d) => d.lens).length} lens), gaps: ${gaps.length} canonical, aliases: ${aliases.length}`);
console.log("by type:", byType);
console.log("by horizon:", byHorizon);
console.log("by permission:", byPermission);
