import Link from "next/link";
import { notFound } from "next/navigation";
import AttemptsRail from "@/components/AttemptsRail";
import StaleBadge from "@/components/StaleBadge";
import StatusPipeline from "@/components/StatusPipeline";
import ThreadPanel from "@/components/ThreadPanel";
import { refOf } from "@/lib/attempts";
import { gaps, gapBySlug, domainBySlug, permissionLabel } from "@/lib/data";

export function generateStaticParams() {
  return gaps.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gap = gapBySlug.get(slug);
  return { title: gap ? `${gap.title} · UK Gap Map` : "UK Gap Map" };
}

const HORIZON: Record<string, string> = { short: "short 0–2y", mid: "mid 2–7y", long: "long 7y+" };

const host = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

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
    <article>
      <div className="detail-head">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/" className="back">
            ← map
          </Link>
          <span className="sep">/ {refOf(gap.number)}</span>
          <Link href={`/domains/${domain?.slug}/`} className="tag-chip">
            {domain?.shortName?.toLowerCase()}
          </Link>
          <span className="tag-chip">{gap.type}</span>
          <span className="tag-chip">{HORIZON[gap.horizon] ?? gap.horizon}</span>
          {gap.permission === "build-now" && <span className="tag-chip green">build-now</span>}
          {gap.permission === "build-together" && <span className="tag-chip amber">build-together</span>}
          {gap.permission === "state-led" && <span className="tag-chip">state-led</span>}
          {typeof gap.rank === "number" && <span className="tag-chip green">urgency {gap.rank}/5</span>}
          {gap.capabilityTime && (
            <span className="tag-chip amber" title={gap.capabilityTimeNote ?? "Frontier-model generations before this gap starts to bite"}>
              ⏱ {gap.capabilityTime}
            </span>
          )}
          <span className="right">
            review by {gap.provenance.reviewBy} <StaleBadge reviewBy={gap.provenance.reviewBy} compact />
          </span>
        </nav>
        <h1>{gap.title}</h1>
        <StatusPipeline gapNumber={gap.number} />
      </div>

      <div className="detail-grid">
        <div className="dossier">
          <div className="sect-label">What is missing</div>
          <p className="body">{gap.description}</p>
          <div className="sect-label">Why it matters</div>
          <p className="body">{gap.why}</p>
          <div className="sect-label">What would fill it</div>
          <p className="body">{gap.fill}</p>
          {gap.permissionNote && (
            <p className="sources-line">
              // {permissionLabel(gap.permission)}: {gap.permissionNote}
            </p>
          )}
          {typeof gap.rank === "number" && gap.rankNote && (
            <>
              <div className="sect-label" style={{ marginTop: 20 }}>
                Why urgency {gap.rank}
              </div>
              <p className="body" style={{ fontSize: 13.5 }}>
                {gap.rankNote}
              </p>
            </>
          )}
          {gap.dialogue?.firstStep && (
            <div className="first-step">
              <div className="label">THE FIRST STEP · SMALL ENOUGH TO SAY YES TO</div>
              <div className="text">{gap.dialogue.firstStep}</div>
            </div>
          )}
          {gap.sources.length > 0 && (
            <div className="sources-line">
              sources:{" "}
              {gap.sources.map((s, i) => (
                <span key={s}>
                  {i > 0 && " · "}
                  <a href={s} rel="noopener noreferrer" target="_blank">
                    {host(s)}
                  </a>
                </span>
              ))}
            </div>
          )}
        </div>
        <AttemptsRail slug={gap.slug} />
      </div>

      <ThreadPanel slug={gap.slug} />

      <div style={{ padding: "0 var(--pad)" }}>
        {gap.mergedFrom && gap.mergedFrom.length > 0 && (
          <details className="fold">
            <summary>One gap, several dossiers: entries folded into this one ({gap.mergedFrom.length})</summary>
            <div className="fold-body">
              <p>
                The research pass surfaced this gap independently in more than one domain. Those entries are
                merged here so the map counts it once{gap.curationNote ? `: ${gap.curationNote}` : "."}
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
                      <span className="num">{refOf(s.number)}</span>
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

        {related.length > 0 && (
          <>
            <h2>More in {domain?.shortName}</h2>
            <div className="card-list related">
              {related.map((r) => (
                <Link key={r.slug} href={`/gaps/${r.slug}/`} className="gap-card">
                  <div className="meta">
                    <span className="num">{refOf(r.number)}</span>
                    {r.permission && <span className={`badge perm ${r.permission}`}>{permissionLabel(r.permission)}</span>}
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.tagline ?? r.why}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="provenance">
        Candidate entry from the July 2026 research pass, not yet validated by practitioner interviews. Added{" "}
        {gap.provenance.added} · last verified {gap.provenance.lastVerified} · review by{" "}
        <strong>{gap.provenance.reviewBy}</strong>. Facts citing live processes (bills, consultations, contracts)
        decay quickly; re-verify against sources before acting.
      </div>
    </article>
  );
}
