"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import { useAttempts } from "@/components/AttemptsProvider";
import { refOf, viewAttempt } from "@/lib/attempts";
import { gaps, type Gap } from "@/lib/data";

// Card list + the design's four filter chips; search kept from the old
// dashboard. Filter state lives in the URL (?filter=) so the nav button and
// payoff strip can deep-link to urgent + unclaimed.
const FILTERS = [
  { key: "all", label: "all" },
  { key: "build-now", label: "build now" },
  { key: "urgent", label: "urgent + unclaimed" },
  { key: "in-build", label: "in build" },
] as const;
type FilterKey = (typeof FILTERS)[number]["key"];

const fuse = new Fuse(gaps, {
  keys: ["title", "tagline", "summary", "description", "why"],
  threshold: 0.35,
  ignoreLocation: true,
});

export default function GapGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const { statusOf, byGap, openTake, now } = useAttempts();
  const [q, setQ] = useState("");

  const raw = params.get("filter");
  const filter: FilterKey = FILTERS.some((f) => f.key === raw) ? (raw as FilterKey) : "all";

  const filterHref = (key: FilterKey) => (key === "all" ? `${pathname}#gaps` : `${pathname}?filter=${key}#gaps`);

  const list = useMemo(() => {
    let base: Gap[] = q.trim()
      ? fuse.search(q.trim()).map((r) => r.item)
      : [...gaps].sort((a, b) => (b.rank ?? 0) - (a.rank ?? 0) || a.number - b.number);
    if (filter === "build-now") base = base.filter((g) => g.permission === "build-now");
    if (filter === "urgent") base = base.filter((g) => g.permission === "build-now" && (g.rank ?? 0) >= 4 && statusOf(g.number) === "open");
    if (filter === "in-build") base = base.filter((g) => statusOf(g.number) !== "open");
    return base;
  }, [q, filter, statusOf]);

  return (
    <>
      <div className="list-head" id="gaps">
        <span className="title">the gaps</span>
        <span className="count">{list.length} shown · dossier + sources behind each</span>
        <div className="filters">
          {FILTERS.map((f) => (
            <Link
              key={f.key}
              replace
              scroll={false}
              href={filterHref(f.key)}
              className={filter === f.key ? "chip-btn on" : "chip-btn"}
            >
              {f.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="search-row">
        <input
          type="text"
          className="search-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`search ${gaps.length} gaps…`}
          aria-label="Search gaps"
        />
      </div>
      <div className="card-grid">
        {list.map((g) => {
          const status = statusOf(g.number);
          const attempts = (byGap.get(g.number) ?? []).map((a) => viewAttempt(a, now));
          const active = attempts.filter((a) => !a.stalled);
          const lead = active[0];
          const shipped = attempts.find((a) => a.shipped);
          return (
            <div
              key={g.slug}
              className="g-card"
              role="link"
              tabIndex={0}
              onClick={() => router.push(`/gaps/${g.slug}/`)}
              onKeyDown={(e) => e.key === "Enter" && router.push(`/gaps/${g.slug}/`)}
            >
              <div className="top">
                <span className="g-ref">{refOf(g.number)}</span>
                {g.permission === "build-now" && <span className="tier bn">build-now · u{g.rank ?? 0}</span>}
                {g.permission === "build-together" && <span className="tier bt">build-together · u{g.rank ?? 0}</span>}
              </div>
              <div className="g-title">{g.title}</div>
              <div className="g-one">{g.tagline ?? g.why}</div>
              {status === "open" && (
                <div className="g-foot">
                  <button
                    className="btn-green sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      openTake(g.number);
                    }}
                  >
                    take it
                  </button>
                  <span className="g-meta">open brief →</span>
                </div>
              )}
              {status === "build" && lead && (
                <>
                  <div className="pulse-row">
                    <span className="pulse-label">PULSE</span>
                    <div className={lead.fresh ? "pulse-bar" : "pulse-bar quiet"}>
                      <i style={{ width: `${lead.pct}%` }} />
                    </div>
                    <span className="pulse-when">{lead.when}</span>
                  </div>
                  <div className="g-foot">
                    <span className="g-build">● in build · {active.length} team{active.length === 1 ? "" : "s"}</span>
                    <span className="g-meta">join →</span>
                  </div>
                </>
              )}
              {status === "shipped" && shipped && (
                <div className="g-foot">
                  <span className="ship-badge">✓ shipped</span>
                  <span className="g-meta">
                    built by {shipped.team} · verified {shipped.shipped!.date}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {list.length === 0 && (
        <div style={{ padding: "0 var(--pad) 40px" }}>
          <div className="empty-state">// nothing matches. clear the search or switch filters.</div>
        </div>
      )}
    </>
  );
}
