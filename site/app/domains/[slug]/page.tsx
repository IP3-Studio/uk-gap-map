import Link from "next/link";
import { notFound } from "next/navigation";
import { domains, domainBySlug, gaps, horizonLabel, permissionLabel } from "@/lib/data";

export function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = domainBySlug.get(slug);
  return { title: d ? `${d.shortName} — UK Gap Map` : "UK Gap Map" };
}

export default async function DomainPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = domainBySlug.get(slug);
  if (!d) notFound();
  const domainGaps = gaps.filter((g) => g.domain === d.slug);

  return (
    <article>
      <div className="detail-meta">
        <span className="chip" style={{ "--hue": d.hue } as React.CSSProperties}>
          Domain {d.num} of {domains.length}
        </span>
      </div>
      <h1>{d.name}</h1>

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

      <h2>The gaps ({domainGaps.length})</h2>
      <div className="card-list">
        {domainGaps.map((g) => (
          <Link key={g.slug} href={`/gaps/${g.slug}/`} className="gap-card">
            <div className="meta">
              <span className="num">№ {g.number}</span>
              <span className="badge">{g.type}</span>
              <span className="badge">{horizonLabel(g.horizon)}</span>
              {g.permission && <span className={`badge perm ${g.permission}`}>{permissionLabel(g.permission)}</span>}
            </div>
            <h3>{g.title}</h3>
            <p>{g.tagline ?? g.why}</p>
          </Link>
        ))}
      </div>

      <details className="fold">
        <summary>Who is already here — key actors ({d.actors.length})</summary>
        <div className="fold-body">
          <ul className="actor-list">
            {d.actors.map((a) => (
              <li key={a.name}>
                <strong>{a.name}</strong> <span className="type">({a.type})</span> — {a.note}
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
