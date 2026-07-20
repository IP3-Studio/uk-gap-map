import Link from "next/link";
import LondonMap from "@/components/LondonMap";
import datasetJson from "@/data/london/dataset.json";
import issuesJson from "@/data/london/issues.json";
import statsJson from "@/data/london/stats.json";

export const metadata = { title: "London Gap Map · UK Gap Map" };

const dataset = datasetJson as { meta: { caveats: string[]; scoring?: string }; boroughs: unknown[] };
const { issues, pendingNote } = issuesJson as {
  issues: {
    id: string; theme: string; title: string; headline: string; evidence: string[];
    community: string; play: string; actors: string[]; hotspots: string[];
    permission: string; sources: string[];
  }[];
  pendingNote: string;
};
const { stats } = statsJson as { stats: { stat: string; label: string; source: string; url: string }[] };

const host = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export default function LondonPage() {
  return (
    <>
      <div className="hero" style={{ paddingBottom: 8 }}>
        <div>
          <div className="stat-line">33 boroughs · 5 themes · {issues.length} verified issues and counting</div>
          <h1>The London Gap Map</h1>
          <div className="hero-copy">
            The first local layer of the map: where London&apos;s gaps sit, borough by borough, scored on
            official statistics across youth, housing, environment, everyday costs and health. Borough-level
            for now; the constituency layer starts with{" "}
            <Link href="/suggest/">your suggestions</Link>.
          </div>
        </div>
      </div>

      <LondonMap />

      <div className="payoff amber" style={{ marginTop: 20 }}>
        <span className="prompt">&gt;</span>
        <span className="line">
          Relative gaps between boroughs, not absolute deprivation. Scores are percentile ranks of official
          indicators; every figure below was verified against its primary release, and estimates are labelled
          as estimates. <b>Read the caveats before quoting anything.</b>
        </span>
      </div>

      <div style={{ padding: "0 var(--pad)" }}>
        <details className="fold">
          <summary>Method and caveats</summary>
          <div className="fold-body">
            <p>
              Each indicator is percentile-ranked across the 33 local authorities (100 means the largest
              relative gap). Theme scores average their indicators; the overall score averages the five
              themes. Compiled July 2026 from the official releases named per indicator; review by October
              2026.
            </p>
            <ul className="actor-list">
              {dataset.meta.caveats.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>

      <div className="list-head">
        <span className="title">the numbers</span>
        <span className="count">verified against primary releases · 20 jul 2026</span>
      </div>
      <div className="london-stats">
        {stats.map((s) => (
          <a key={s.stat + s.source} className="l-stat" href={s.url} rel="noopener noreferrer" target="_blank">
            <span className="n">{s.stat}</span>
            <span className="t">{s.label}</span>
            <span className="s mono">{s.source}</span>
          </a>
        ))}
      </div>

      <div className="list-head">
        <span className="title">the issues</span>
        <span className="count">{issues.length} verified · {pendingNote.toLowerCase()}</span>
      </div>
      <div className="london-issues">
        {issues.map((i) => (
          <article key={i.id} id={i.id} className="l-issue">
            <div className="top">
              <span className="chip">{i.theme}</span>
              {i.permission === "build-now" && <span className="tier bn">build-now</span>}
              {i.permission === "build-together" && <span className="tier bt">build-together</span>}
              {i.hotspots.length > 0 && <span className="g-meta">hotspots: {i.hotspots.join(" · ")}</span>}
            </div>
            <h3>{i.title}</h3>
            <p className="l-headline">{i.headline}</p>
            <details className="fold" style={{ margin: "8px 0" }}>
              <summary>The evidence ({i.evidence.length})</summary>
              <div className="fold-body">
                {i.evidence.map((e, idx) => (
                  <p key={idx}>{e}</p>
                ))}
                <p className="sources-line">
                  sources:{" "}
                  {i.sources.map((s, idx) => (
                    <span key={s}>
                      {idx > 0 && " · "}
                      <a href={s} rel="noopener noreferrer" target="_blank">
                        {host(s)}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            </details>
            <div className="first-step" style={{ marginBottom: 8 }}>
              <div className="label">THE PLAY · WHAT A TEAM COULD BUILD</div>
              <div className="text">{i.play}</div>
            </div>
            <p className="l-community">{i.community}</p>
            <p className="g-meta">who is already here: {i.actors.join(" · ")}</p>
          </article>
        ))}
      </div>

      <div className="payoff" style={{ marginBottom: 44 }}>
        <span className="prompt">&gt;</span>
        <span className="line">
          Every play above is claimable the moment it becomes a gap entry, and every borough needs eyes on the
          ground. <b>Know a London gap this page misses?</b>
        </span>
        <Link href="/suggest/" className="btn-green sm">
          suggest a london gap
        </Link>
      </div>
    </>
  );
}
