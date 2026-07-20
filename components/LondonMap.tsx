"use client";

import { useMemo, useState } from "react";
import pathsJson from "@/data/london/boroughs-paths.json";
import datasetJson from "@/data/london/dataset.json";
import issuesJson from "@/data/london/issues.json";

type BoroughRow = Record<string, number | string | null> & { code: string; name: string };
type IndicatorMeta = { label: string; unit: string; source: string };

const paths = pathsJson as { viewBox: string; boroughs: { code: string; name: string; path: string }[] };
const dataset = datasetJson as { meta: { indicators: Record<string, IndicatorMeta>; caveats: string[] }; boroughs: BoroughRow[] };
const issues = (issuesJson as { issues: { id: string; title: string; hotspots: string[]; theme: string }[] }).issues;

const THEMES = [
  { key: "overall_gap_score", label: "overall" },
  { key: "youth_gap_score", label: "youth" },
  { key: "housing_gap_score", label: "housing" },
  { key: "environment_gap_score", label: "environment" },
  { key: "living_gap_score", label: "living" },
  { key: "health_gap_score", label: "health" },
] as const;

const byCode = new Map(dataset.boroughs.map((b) => [b.code, b]));

// low relative gap = deep panel green, high = amber; scores are 0-100 percentiles
const fill = (score: number | null) => {
  if (score == null) return "var(--panel-deep)";
  const t = Math.max(0, Math.min(1, score / 100));
  const lerp = (a: number, b: number) => Math.round(a + (b - a) * t);
  return `rgb(${lerp(22, 217)}, ${lerp(48, 161)}, ${lerp(30, 60)})`;
};

export default function LondonMap() {
  const [theme, setTheme] = useState<(typeof THEMES)[number]["key"]>("overall_gap_score");
  const [selected, setSelected] = useState<string | null>(null);

  const sel = selected ? byCode.get(selected) : null;

  // the data writes the profile: the borough's five worst percentile ranks
  const worst = useMemo(() => {
    if (!sel) return [];
    return Object.entries(dataset.meta.indicators)
      .map(([key, meta]) => ({
        key,
        meta,
        value: sel[key] as number | null,
        rank: sel[`${key}_rank`] as number | null,
      }))
      .filter((x) => x.rank != null && x.value != null)
      .sort((a, b) => (b.rank as number) - (a.rank as number))
      .slice(0, 5);
  }, [sel]);

  const hotspotIssues = sel ? issues.filter((i) => i.hotspots.includes(sel.name as string)) : [];

  return (
    <div className="london-wrap">
      <div className="london-controls">
        {THEMES.map((t) => (
          <button key={t.key} className={theme === t.key ? "chip-btn on" : "chip-btn"} onClick={() => setTheme(t.key)}>
            {t.label}
          </button>
        ))}
        <span className="london-scale" aria-hidden="true">
          <span className="lo">smaller gap</span>
          <i />
          <span className="hi">larger gap</span>
        </span>
      </div>

      <div className="london-grid">
        <svg viewBox={paths.viewBox} className="london-svg" role="img" aria-label="London boroughs coloured by relative gap score">
          {paths.boroughs.map((b) => {
            const row = byCode.get(b.code);
            const score = row ? (row[theme] as number | null) : null;
            return (
              <path
                key={b.code}
                d={b.path}
                fill={fill(score)}
                stroke="var(--bg)"
                strokeWidth={1.2}
                className={selected === b.code ? "borough selected" : "borough"}
                onClick={() => setSelected(selected === b.code ? null : b.code)}
              >
                <title>{`${b.name}${score != null ? ` · ${Math.round(score as number)}/100` : " · not scored"}`}</title>
              </path>
            );
          })}
        </svg>

        <div className="london-panel">
          {!sel && (
            <div className="attempt-empty">// click a borough for its profile: scores, worst-ranked indicators, and the issues that name it</div>
          )}
          {sel && (
            <>
              <div className="l-name">{sel.name}</div>
              <div className="l-meta mono">
                pop {Number(sel.pop_2024).toLocaleString("en-GB")} ·{" "}
                {sel.overall_gap_score != null ? `overall gap ${Math.round(sel.overall_gap_score as number)}/100` : "not scored"}
              </div>
              <div className="l-scores">
                {THEMES.slice(1).map((t) => (
                  <span key={t.key} className="badge">
                    {t.label} {sel[t.key] != null ? Math.round(sel[t.key] as number) : "n/a"}
                  </span>
                ))}
              </div>
              {worst.length > 0 && (
                <>
                  <div className="sect-label" style={{ marginTop: 14 }}>Widest gaps here</div>
                  <ul className="l-worst">
                    {worst.map((w) => (
                      <li key={w.key}>
                        <span className="l-ind">{w.meta.label}</span>
                        <span className="mono l-val">
                          {w.value}{w.meta.unit === "%" ? "%" : ` ${w.meta.unit}`} · {Math.round(w.rank as number)}th pct
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {hotspotIssues.length > 0 && (
                <>
                  <div className="sect-label" style={{ marginTop: 14 }}>Named in issues</div>
                  <ul className="l-issues">
                    {hotspotIssues.map((i) => (
                      <li key={i.id}>
                        <a href={`#${i.id}`}>{i.title}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
