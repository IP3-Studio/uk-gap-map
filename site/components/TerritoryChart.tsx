import Link from "next/link";
import { domains, gaps, PERMISSIONS } from "@/lib/data";

// One row per domain, segments sized by permission split. Colour identifies the
// permission category (fixed across the site); counts live in tooltips and the
// row total, so text stays in ink tokens and narrow segments stay clean.
const SEGMENTS = [
  { key: "build-now", label: "Build now" },
  { key: "build-together", label: "Build together" },
  { key: "state-led", label: "State-led" },
] as const;

const rows = domains
  .map((d) => {
    const inDomain = gaps.filter((g) => g.domain === d.slug);
    const counts = Object.fromEntries(SEGMENTS.map((s) => [s.key, inDomain.filter((g) => g.permission === s.key).length]));
    return { ...d, counts, total: inDomain.length };
  })
  .sort((a, b) => b.total - a.total);

export default function TerritoryChart() {
  return (
    <div className="territory">
      <div className="t-legend" aria-hidden="true">
        {SEGMENTS.map((s) => (
          <span key={s.key} className="t-key">
            <span className={`t-dot ${s.key}`} />
            {s.label}
          </span>
        ))}
      </div>
      {rows.map((r) => (
        <div key={r.slug} className="t-row">
          <Link href={`/domains/${r.slug}/`} className="t-name">
            {r.shortName}
          </Link>
          <div className="t-bar" role="img" aria-label={`${r.shortName}: ${SEGMENTS.map((s) => `${r.counts[s.key]} ${s.label.toLowerCase()}`).join(", ")}`}>
            {SEGMENTS.map(
              (s) =>
                r.counts[s.key] > 0 && (
                  <Link
                    key={s.key}
                    href={`/?domains=${r.slug}&permission=${s.key}`}
                    className={`t-seg ${s.key}`}
                    style={{ flexGrow: r.counts[s.key] }}
                    title={`${r.shortName}: ${r.counts[s.key]} ${s.label.toLowerCase()} — click to browse`}
                  />
                )
            )}
          </div>
          <span className="t-total">{r.total}</span>
        </div>
      ))}
      <p className="t-caption">
        Each row is a domain. Green is buildable without permission, amber needs an institution at the table,
        grey is gated on the state. Click any segment to browse those gaps.
      </p>
    </div>
  );
}
