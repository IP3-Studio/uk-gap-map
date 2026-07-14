"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import StaleBadge from "@/components/StaleBadge";
import { domains, gaps, domainBySlug, GAP_TYPES, HORIZONS, PERMISSIONS, horizonLabel, permissionLabel, type Gap } from "@/lib/data";

type Sort = "relevance" | "rank" | "number" | "title" | "domain";

type Filters = {
  q: string;
  domains: Set<string>;
  types: Set<string>;
  horizons: Set<string>;
  permissions: Set<string>;
  lens: boolean;
  sort: Sort;
};

const MANAGED_KEYS = ["q", "domains", "types", "horizons", "permission", "lens", "sort"];
const DEFAULTS: Filters = {
  q: "",
  domains: new Set(),
  types: new Set(),
  horizons: new Set(),
  permissions: new Set(),
  lens: false,
  sort: "rank",
};

// Domains with canonical gaps; the two lens chapters (funding, policy) filter out.
const filterDomains = domains.filter((d) => !d.lens);

const fuse = new Fuse(gaps, {
  threshold: 0.34,
  ignoreLocation: true,
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "fill", weight: 0.3 },
    { name: "why", weight: 0.2 },
    { name: "domain", weight: 0.15 },
    { name: "type", weight: 0.1 },
  ],
});

function readParams(): Filters {
  const p = new URLSearchParams(window.location.search);
  const csv = (k: string) => new Set((p.get(k) || "").split(",").filter(Boolean));
  const q = p.get("q") || "";
  const rawSort = p.get("sort");
  let sort: Sort;
  if (rawSort === "title" || rawSort === "domain" || rawSort === "number" || rawSort === "rank") sort = rawSort;
  else sort = q.trim() ? "relevance" : "rank";
  return {
    q,
    domains: csv("domains"),
    types: csv("types"),
    horizons: csv("horizons"),
    permissions: csv("permission"),
    lens: p.get("lens") === "westphalia",
    sort,
  };
}

// Serialises managed filter state; sort is omitted at its contextual default
// (relevance while searching, number otherwise) to keep URLs clean.
function serialize(f: Filters, base: string): string {
  const p = new URLSearchParams(base);
  for (const k of MANAGED_KEYS) p.delete(k);
  if (f.q) p.set("q", f.q);
  if (f.domains.size) p.set("domains", [...f.domains].join(","));
  if (f.types.size) p.set("types", [...f.types].join(","));
  if (f.horizons.size) p.set("horizons", [...f.horizons].join(","));
  if (f.permissions.size) p.set("permission", [...f.permissions].join(","));
  if (f.lens) p.set("lens", "westphalia");
  const defaultSort: Sort = f.q.trim() ? "relevance" : "rank";
  if (f.sort !== defaultSort) p.set("sort", f.sort);
  return p.toString();
}

export default function Dashboard() {
  const [f, setF] = useState<Filters>(DEFAULTS);
  const [hydrated, setHydrated] = useState(false);
  const writeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setF(readParams());
    setHydrated(true);
  }, []);

  // Re-sync when the URL changes underneath us (back/forward, nav link to "/").
  useEffect(() => {
    if (!hydrated) return;
    const current = window.location.search.replace(/^\?/, "");
    if (current !== serialize(f, current)) setF(readParams());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Debounced URL write: filtering stays instant, the URL settles when typing pauses
  // (Safari rate-limits replaceState to ~100 calls per 30s).
  useEffect(() => {
    if (!hydrated) return;
    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => {
      const base = window.location.search.replace(/^\?/, "");
      const qs = serialize(f, base);
      if (qs === base) return;
      try {
        window.history.replaceState(null, "", (qs ? `?${qs}` : window.location.pathname) + window.location.hash);
      } catch {
        /* rate-limited: the URL catches up on the next settled write */
      }
    }, 250);
    return () => {
      if (writeTimer.current) clearTimeout(writeTimer.current);
    };
  }, [f, hydrated]);

  const update = (patch: Partial<Filters>) => setF((prev) => ({ ...prev, ...patch }));

  const updateQuery = (q: string) =>
    setF((prev) => {
      let sort = prev.sort;
      if (q.trim() && !prev.q.trim() && prev.sort === "rank") sort = "relevance";
      if (!q.trim() && prev.sort === "relevance") sort = "rank";
      return { ...prev, q, sort };
    });

  const toggle = (key: "domains" | "types" | "horizons" | "permissions", value: string) =>
    setF((prev) => {
      const next = new Set(prev[key]);
      next.has(value) ? next.delete(value) : next.add(value);
      return { ...prev, [key]: next };
    });

  const searching = f.q.trim().length > 0;
  const effectiveSort: Sort = f.sort === "relevance" && !searching ? "rank" : f.sort;

  const results = useMemo(() => {
    let list: Gap[] = searching ? fuse.search(f.q.trim()).map((r) => r.item) : [...gaps];
    if (f.domains.size) list = list.filter((g) => f.domains.has(g.domain));
    if (f.types.size) list = list.filter((g) => f.types.has(g.type));
    if (f.horizons.size) list = list.filter((g) => f.horizons.has(g.horizon));
    if (f.permissions.size) list = list.filter((g) => g.permission && f.permissions.has(g.permission));
    if (f.lens) list = list.filter((g) => g.lens === "westphalia");
    if (effectiveSort === "title") list.sort((a, b) => a.title.localeCompare(b.title));
    else if (effectiveSort === "domain") list.sort((a, b) => a.domain.localeCompare(b.domain) || a.number - b.number);
    else if (effectiveSort === "number") list.sort((a, b) => a.number - b.number);
    else if (effectiveSort === "rank") list.sort((a, b) => (b.rank ?? -1) - (a.rank ?? -1) || a.number - b.number);
    // "relevance" keeps fuse order
    return list;
  }, [f, searching, effectiveSort]);

  const typeCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const g of gaps) c[g.type] = (c[g.type] || 0) + 1;
    return c;
  }, []);

  const lensCount = useMemo(() => gaps.filter((g) => g.lens === "westphalia").length, []);

  return (
    <div className="layout">
      <aside className="filters" aria-label="Filter gaps">
        <fieldset>
          <legend>Domain</legend>
          <div className="all-none">
            <button type="button" aria-label="Select all domains" onClick={() => update({ domains: new Set(filterDomains.map((d) => d.slug)) })}>
              All
            </button>
            <button type="button" aria-label="Deselect all domains" onClick={() => update({ domains: new Set() })}>
              None
            </button>
          </div>
          {filterDomains.map((d) => (
            <label key={d.slug}>
              <input type="checkbox" checked={f.domains.has(d.slug)} onChange={() => toggle("domains", d.slug)} />
              {d.shortName}
              <span className="count">{d.gapCount}</span>
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Gap type</legend>
          {GAP_TYPES.map((t) => (
            <label key={t}>
              <input type="checkbox" checked={f.types.has(t)} onChange={() => toggle("types", t)} />
              {t}
              <span className="count">{typeCounts[t] || 0}</span>
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Horizon</legend>
          {HORIZONS.map((h) => (
            <label key={h.key}>
              <input type="checkbox" checked={f.horizons.has(h.key)} onChange={() => toggle("horizons", h.key)} />
              {h.label}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Permission</legend>
          {PERMISSIONS.map((p) => (
            <label key={p.key} title={p.blurb}>
              <input type="checkbox" checked={f.permissions.has(p.key)} onChange={() => toggle("permissions", p.key)} />
              {p.label}
              <span className="count">{gaps.filter((g) => g.permission === p.key).length}</span>
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Lens</legend>
          <label>
            <input type="checkbox" checked={f.lens} onChange={() => update({ lens: !f.lens })} />
            Westphalia additions
            <span className="count">{lensCount}</span>
          </label>
        </fieldset>
      </aside>

      <section>
        <div className="toolbar">
          <input
            type="search"
            placeholder={`Search ${gaps.length} canonical gaps…`}
            value={f.q}
            onChange={(e) => updateQuery(e.target.value)}
            aria-label="Search gaps"
          />
          <select value={f.sort} onChange={(e) => update({ sort: e.target.value as Sort })} aria-label="Sort order">
            {searching && <option value="relevance">Sort: relevance</option>}
            <option value="rank">Sort: urgency</option>
            <option value="number">Sort: number</option>
            <option value="title">Sort: title</option>
            <option value="domain">Sort: domain</option>
          </select>
        </div>
        <p className="result-count" role="status">
          {hydrated
            ? `${results.length} of ${gaps.length} gaps${searching && effectiveSort === "relevance" ? " · ranked by relevance" : ""}`
            : " "}
        </p>
        <div className="card-list">
          {results.map((g) => {
            const d = domainBySlug.get(g.domain);
            return (
              <Link key={g.slug} href={`/gaps/${g.slug}/`} className="gap-card">
                <div className="meta">
                  <span className="num">№ {g.number}</span>
                  {typeof g.rank === "number" && (
                    <span className="badge rank" title={g.rankNote ?? "Editorial urgency, 0–5; see the methodology on the About page"}>
                      urgency {g.rank}
                    </span>
                  )}
                  <span className="chip" style={{ "--hue": d?.hue } as React.CSSProperties}>
                    {d?.shortName}
                  </span>
                  <span className="badge">{g.type}</span>
                  <span className="badge">{horizonLabel(g.horizon)}</span>
                  {g.permission && <span className={`badge perm ${g.permission}`}>{permissionLabel(g.permission)}</span>}
                  {g.lens === "westphalia" && <span className="badge">Westphalia</span>}
                  <StaleBadge reviewBy={g.provenance.reviewBy} compact />
                </div>
                <h2>{g.title}</h2>
                <p>{g.tagline ?? g.why}</p>
              </Link>
            );
          })}
          {hydrated && results.length === 0 && (
            <div className="empty-state">
              <p>No gaps match the current filters.</p>
              <button type="button" className="btn" onClick={() => setF({ ...DEFAULTS, domains: new Set(), types: new Set(), horizons: new Set() })}>
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
