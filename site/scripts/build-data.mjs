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
// Farewell to Westphalia lens). Same shape as research gaps + domain slug + lens tag.
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

const badSlug = gaps.find((g) => !/^[a-z0-9][a-z0-9-]*$/.test(g.slug));
if (badSlug) throw new Error(`Malformed slug for gap ${badSlug.number}: "${badSlug.slug}"`);
if (new Set(gaps.map((g) => g.slug)).size !== gaps.length) throw new Error("Duplicate slugs in output");

writeFileSync(path.join(here, "../data/domains.json"), JSON.stringify(domains, null, 1));
writeFileSync(path.join(here, "../data/gaps.json"), JSON.stringify(gaps, null, 1));
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
console.log(`domains: ${domains.length}, gaps: ${gaps.length}`);
console.log("by type:", byType);
console.log("by horizon:", byHorizon);
