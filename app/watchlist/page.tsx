import Link from "next/link";
import watchlist from "@/data/watchlist.json";
import { domainBySlug } from "@/lib/data";

export const metadata = { title: "Watchlist · UK Gap Map" };

const items = [...watchlist].sort((a, b) => a.sort.localeCompare(b.sort));

const periodOf = (sort: string) => {
  const year = Number(sort.slice(0, 4));
  if (year <= 2026) return "The rest of 2026";
  if (year === 2027) return "2027";
  if (year === 2028) return "2028";
  return "2029 and beyond";
};

const periods = [...new Set(items.map((w) => periodOf(w.sort)))];

export default function WatchlistPage() {
  return (
    <>
      <h1>Watchlist</h1>
      <p className="lede">
        The dated events the gap inventory hangs on: bills, consultation deadlines, break clauses, commencement
        dates. Each is the moment a gap either gets filled or hardens. Compiled July 2026; reviewed quarterly.
      </p>

      {periods.map((period) => (
        <section key={period}>
          <h2>{period}</h2>
          <ol className="timeline">
            {items
              .filter((w) => periodOf(w.sort) === period)
              .map((w) => (
                <li key={w.sort + w.event} className="tl-item">
                  <div className="tl-when">{w.when}</div>
                  <div className="tl-body">
                    <div className="tl-event">{w.event}</div>
                    <p className="tl-why">{w.why}</p>
                    <div className="tl-chips">
                      {w.domains.map((slug) => {
                        const d = domainBySlug.get(slug);
                        return d ? (
                          <Link key={slug} href={`/domains/${slug}/`} className="chip" style={{ "--hue": d.hue } as React.CSSProperties}>
                            {d.shortName}
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                </li>
              ))}
          </ol>
        </section>
      ))}
    </>
  );
}
