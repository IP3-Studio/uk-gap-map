import Link from "next/link";
import { notFound } from "next/navigation";
import { domains, domainBySlug, gaps, horizonLabel, permissionLabel } from "@/lib/data";

export function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = domainBySlug.get(slug);
  return { title: d ? `${d.shortName} · UK Gap Map` : "UK Gap Map" };
}

export default async function DomainPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = domainBySlug.get(slug);
  if (!d) notFound();
  const domainGaps = gaps.filter((g) => g.domain === d.slug);
  const surfacedHere = gaps.filter(
    (g) => g.alsoDomains?.includes(d.slug) || g.facet === d.slug || g.facets?.includes(d.slug)
  );
  const verticalCount = domains.filter((x) => !x.lens).length;

  return (
    <article className="page-pad">
      <div className="detail-meta">
        <span className="chip" style={{ "--hue": d.hue } as React.CSSProperties}>
          {d.lens ? "Cross-cutting lens" : `Domain ${d.num} of ${verticalCount}`}
        </span>
      </div>
      <h1>{d.name}</h1>
      {d.lens && (
        <p className="standfirst">
          Researched as a cross-cutting dossier; its gap entries proved to be views of gaps that live in the
          vertical domains, so the July 2026 curation pass folded them there. The entries that surfaced here are
          listed below, each in its canonical home. The landscape chapter remains.
        </p>
      )}

      {d.intro ? (
        <div className="intro">
          {d.intro.split(/\n\n+/).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : (
        <div className="detail-section">
          <p>{d.landscape}</p>
        </div>
      )}

      {d.intro && (
        <details className="fold">
          <summary>Full landscape notes (July 2026)</summary>
          <div className="fold-body">
            <p>{d.landscape}</p>
          </div>
        </details>
      )}

      {domainGaps.length > 0 && (
        <>
          <h2>The gaps ({domainGaps.length})</h2>
          <div className="card-list">
            {domainGaps.map((g) => (
              <Link key={g.slug} href={`/gaps/${g.slug}/`} className="gap-card">
                <div className="meta">
                  <span className="num">№ {g.number}</span>
                  {typeof g.rank === "number" && <span className="badge rank">urgency {g.rank}</span>}
                  <span className="badge">{g.type}</span>
                  <span className="badge">{horizonLabel(g.horizon)}</span>
                  {g.permission && <span className={`badge perm ${g.permission}`}>{permissionLabel(g.permission)}</span>}
                </div>
                <h3>{g.title}</h3>
                <p>{g.tagline ?? g.why}</p>
              </Link>
            ))}
          </div>
        </>
      )}

      {surfacedHere.length > 0 && (
        <>
          <h2>{d.lens ? `Entries from this lens, in their canonical homes (${surfacedHere.length})` : `Also surfaced by this domain’s research (${surfacedHere.length})`}</h2>
          <div className="card-list related">
            {surfacedHere.map((g) => (
              <Link key={g.slug} href={`/gaps/${g.slug}/`} className="gap-card">
                <div className="meta">
                  <span className="num">№ {g.number}</span>
                  <span className="chip" style={{ "--hue": domainBySlug.get(g.domain)?.hue } as React.CSSProperties}>
                    {domainBySlug.get(g.domain)?.shortName}
                  </span>
                </div>
                <h3>{g.title}</h3>
                <p>{g.tagline ?? g.why}</p>
              </Link>
            ))}
          </div>
        </>
      )}

      <details className="fold">
        <summary>Who is already here: key actors ({d.actors.length})</summary>
        <div className="fold-body">
          <ul className="actor-list">
            {d.actors.map((a) => (
              <li key={a.name}>
                <strong>{a.name}</strong> <span className="type">({a.type})</span>: {a.note}
              </li>
            ))}
          </ul>
        </div>
      </details>

      <details className="fold">
        <summary>Funders active or plausible here ({d.funders.length})</summary>
        <div className="fold-body">
          <ul className="actor-list">
            {d.funders.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </details>

      <details className="fold">
        <summary>Policy notes</summary>
        <div className="fold-body">
          <p>{d.policyNotes}</p>
        </div>
      </details>
    </article>
  );
}
