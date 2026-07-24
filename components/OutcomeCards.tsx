"use client";

import Link from "next/link";
import { useAttempts } from "@/components/AttemptsProvider";
import { refOf } from "@/lib/attempts";
import { domainBySlug } from "@/lib/data";
import { outcomes, startHere } from "@/lib/outcomes";
import type { GapStatus } from "@/lib/attempts";

const WEIGHT: Record<GapStatus, number> = { shipped: 0, build: 1, open: 2 };

export default function OutcomeCards() {
  const { statusOf } = useAttempts();

  return (
    <div className="outcome-list">
      {outcomes.map((o) => {
        const members = o.members
          .map((g) => ({ g, status: statusOf(g.number) }))
          .sort(
            (a, b) =>
              WEIGHT[a.status] - WEIGHT[b.status] ||
              (b.g.rank ?? 0) - (a.g.rank ?? 0) ||
              a.g.number - b.g.number,
          );
        const shipped = members.filter((m) => m.status === "shipped").length;
        const build = members.filter((m) => m.status === "build").length;
        const open = members.length - shipped - build;
        const first = startHere(o);

        return (
          <section key={o.id} id={o.id} className="outcome-card">
            <h2>{o.title}</h2>
            <p className="o-line">{o.line}</p>

            <div className="o-progress mono">
              {members.length} gaps · {shipped} shipped · {build} in build · {open} open
            </div>
            <div className="o-bar" aria-hidden="true">
              {shipped > 0 && <i className="seg shipped" style={{ flexGrow: shipped }} />}
              {build > 0 && <i className="seg build" style={{ flexGrow: build }} />}
              {open > 0 && <i className="seg open" style={{ flexGrow: open }} />}
            </div>

            <div className="m-dots o-dots">
              {members.map(({ g, status }) => (
                <Link
                  key={g.number}
                  href={`/gaps/${g.slug}/`}
                  className={`dot ${status}`}
                  title={`${refOf(g.number)} ${g.title}`}
                  aria-label={`${refOf(g.number)} ${g.title} (${status === "build" ? "in build" : status})`}
                />
              ))}
            </div>

            <div className="o-foot">
              {o.domains.map((d) => {
                const dom = domainBySlug.get(d);
                return dom ? (
                  <Link key={d} href={`/domains/${d}/`} className="tag-chip">
                    {dom.shortName.toLowerCase()}
                  </Link>
                ) : null;
              })}
              {o.gaps.length > 0 && (
                <span className="o-cross mono">+ {o.gaps.map((n) => refOf(n)).join(" ")}</span>
              )}
              {first && (
                <Link href={`/gaps/${first.slug}/`} className="o-start mono">
                  $ start here → {refOf(first.number)}
                </Link>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
