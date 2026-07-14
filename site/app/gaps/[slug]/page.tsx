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

  const related = gaps
    .filter((g) => g.domain === gap.domain && g.slug !== gap.slug)
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
        <Link href={`/domains/${domain?.slug}/`} className="chip" style={{ "--hue": domain?.hue } as React.CSSProperties}>
          {domain?.shortName}
        </Link>
        <span className="badge">{gap.type}</span>
        <span className="badge">{horizonLabel(gap.horizon)}</span>
        {gap.permission && <span className={`badge perm ${gap.permission}`}>{permissionLabel(gap.permission)}</span>}
        <span className="badge">{gap.status}</span>
        {gap.lens === "westphalia" && <span className="badge">Westphalia lens</span>}
        {gap.lens === "synthetic-state" && <span className="badge">Synthetic State lens</span>}
        <StaleBadge reviewBy={gap.provenance.reviewBy} />
      </div>
      <h1>{gap.title}</h1>
      {gap.summary && <p className="standfirst">{gap.summary}</p>}

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
