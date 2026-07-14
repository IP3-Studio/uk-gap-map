import Link from "next/link";
import { notFound } from "next/navigation";
import ActBlock from "@/components/ActBlock";
import DialogueBlock from "@/components/DialogueBlock";
import StaleBadge from "@/components/StaleBadge";
import { gaps, gapBySlug, domainBySlug, horizonLabel, permissionLabel } from "@/lib/data";

export function generateStaticParams() {
  return gaps.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gap = gapBySlug.get(slug);
  return { title: gap ? `${gap.title} — UK Gap Map` : "UK Gap Map" };
}

export default async function GapPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gap = gapBySlug.get(slug);
  if (!gap) notFound();
  const domain = domainBySlug.get(gap.domain);

  const seeAlsoSlugs = new Set((gap.seeAlso ?? []).map((s) => s.slug));
  const related = gaps
    .filter((g) => g.domain === gap.domain && g.slug !== gap.slug && !seeAlsoSlugs.has(g.slug))
    .sort((a, b) => Math.abs(a.number - gap.number) - Math.abs(b.number - gap.number))
    .slice(0, 3);

  return (
    <article className="detail-section">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">All gaps</Link> <span aria-hidden="true">→</span>{" "}
        <Link href={`/domains/${domain?.slug}/`}>{domain?.shortName}</Link> <span aria-hidden="true">→</span>{" "}
        <span>№ {gap.number}</span>
      </nav>
      <div className="detail-meta">
        <span className="num">№ {gap.number}</span>
        {typeof gap.rank === "number" && (
          <span className="badge rank" title="Editorial urgency, 0–5 — criteria on the About page">
            urgency {gap.rank}
          </span>
        )}
        <Link href={`/domains/${domain?.slug}/`} className="chip" style={{ "--hue": domain?.hue } as React.CSSProperties}>
          {domain?.shortName}
        </Link>
        {gap.alsoDomains?.map((slug) => {
          const also = domainBySlug.get(slug);
          return also ? (
            <Link key={slug} href={`/domains/${slug}/`} className="chip" style={{ "--hue": also.hue } as React.CSSProperties}
              title="This gap also surfaced in this domain's research">
              also: {also.shortName}
            </Link>
          ) : null;
        })}
        <span className="badge">{gap.type}</span>
        <span className="badge">{horizonLabel(gap.horizon)}</span>
        {gap.permission && <span className={`badge perm ${gap.permission}`}>{permissionLabel(gap.permission)}</span>}
        <span className="badge">{gap.status}</span>
        {gap.capabilityTime && (
          <span className="badge" title={gap.capabilityTimeNote ?? "Estimated time, in frontier-model generations, before this gap starts to bite"}>
            ⏱ {gap.capabilityTime}
          </span>
        )}
        {(gap.facet === "funding-gaps" || gap.facets?.includes("funding-gaps")) && <span className="badge">funding lens</span>}
        {(gap.facet === "policy-gaps" || gap.facets?.includes("policy-gaps")) && <span className="badge">policy lens</span>}
        {gap.lens === "westphalia" && <span className="badge">Westphalia lens</span>}
        {gap.lens === "synthetic-state" && <span className="badge">Synthetic State lens</span>}
        <StaleBadge reviewBy={gap.provenance.reviewBy} />
      </div>
      <h1>{gap.title}</h1>
      {gap.summary && <p className="standfirst">{gap.summary}</p>}
      {typeof gap.rank === "number" && gap.rankNote && (
        <p className="rank-note">
          <strong>Why urgency {gap.rank}:</strong> {gap.rankNote}
        </p>
      )}

      <ActBlock gap={gap} />
      <DialogueBlock gap={gap} />

      <details className="fold" open>
        <summary>The dossier — what the research found (July 2026)</summary>
        <div className="fold-body">
          <h2>What is missing</h2>
          <p>{gap.description}</p>

          <h2>Why it matters</h2>
          <p>{gap.why}</p>

          <h2>What would fill it</h2>
          <p>{gap.fill}</p>
        </div>
      </details>

      {gap.mergedFrom && gap.mergedFrom.length > 0 && (
        <details className="fold">
          <summary>
            One gap, several dossiers — entries folded into this one ({gap.mergedFrom.length})
          </summary>
          <div className="fold-body">
            <p>
              The research pass surfaced this gap independently in more than one domain. Those entries are
              merged here so the map counts it once{gap.curationNote ? ` — ${gap.curationNote}` : "."}
            </p>
            {gap.mergedFrom.map((m) => (
              <div key={m.number} className="merged-entry">
                <h3>
                  № {m.number} · {m.title}
                  <span className="type"> ({domainBySlug.get(m.domain)?.shortName ?? m.domain})</span>
                </h3>
                <p>{m.description}</p>
                <p>
                  <em>Its fill:</em> {m.fill}
                </p>
              </div>
            ))}
          </div>
        </details>
      )}

      {gap.seeAlso && gap.seeAlso.length > 0 && (
        <>
          <h2>Distinct but adjacent</h2>
          <div className="card-list related">
            {gap.seeAlso.map((s) => {
              const other = gapBySlug.get(s.slug);
              return (
                <Link key={s.slug} href={`/gaps/${s.slug}/`} className="gap-card">
                  <div className="meta">
                    <span className="num">№ {s.number}</span>
                    {other?.permission && (
                      <span className={`badge perm ${other.permission}`}>{permissionLabel(other.permission)}</span>
                    )}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{other?.tagline ?? other?.why}</p>
                </Link>
              );
            })}
          </div>
        </>
      )}

      {gap.sources.length > 0 && (
        <details className="fold">
          <summary>Sources ({gap.sources.length})</summary>
          <div className="fold-body">
            <ul className="sources">
              {gap.sources.map((s) => (
                <li key={s}>
                  <a href={s} rel="noopener noreferrer" target="_blank">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      )}

      {related.length > 0 && (
        <>
          <h2>More in {domain?.shortName}</h2>
          <div className="card-list related">
            {related.map((r) => (
              <Link key={r.slug} href={`/gaps/${r.slug}/`} className="gap-card">
                <div className="meta">
                  <span className="num">№ {r.number}</span>
                  {r.permission && <span className={`badge perm ${r.permission}`}>{permissionLabel(r.permission)}</span>}
                </div>
                <h3>{r.title}</h3>
                <p>{r.tagline ?? r.why}</p>
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="provenance">
        Candidate entry from the July 2026 research pass — not yet validated by practitioner interviews. Added{" "}
        {gap.provenance.added} · last verified {gap.provenance.lastVerified} · review by{" "}
        <strong>{gap.provenance.reviewBy}</strong>. Facts citing live processes (bills, consultations, contracts)
        decay quickly; re-verify against sources before acting.
      </div>
    </article>
  );
}
