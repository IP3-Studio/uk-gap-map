"use client";

import { useAttempts } from "@/components/AttemptsProvider";
import WatchButton from "@/components/WatchButton";
import { viewAttempt } from "@/lib/attempts";
import { gapBySlug } from "@/lib/data";

// Right rail on the gap page: attempts panel (or shipped card) + counterparty.
export default function AttemptsRail({ slug }: { slug: string }) {
  const gap = gapBySlug.get(slug);
  const { byGap, statusOf, openTake, now } = useAttempts();
  if (!gap) return null;

  const status = statusOf(gap.number);
  const list = (byGap.get(gap.number) ?? []).map((a) => viewAttempt(a, now));
  const active = list.filter((a) => !a.stalled);
  const shipped = list.find((a) => a.shipped);

  return (
    <div className="rail-col">
      {status === "shipped" && shipped ? (
        <div className="side-card shipped">
          <div className="label white">✓ SHIPPED</div>
          <div className="text">
            Built by {shipped.team}, {shipped.shipped!.verifiedBy} verified. The dossier stays up as the record.
          </div>
          {shipped.shipped!.url && (
            <div style={{ marginTop: 8 }}>
              <a href={shipped.shipped!.url} rel="noopener noreferrer" target="_blank" className="mono" style={{ fontSize: 12 }}>
                see the solution ↗
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="attempts-panel">
          <div className="head">
            <span className="l">ATTEMPTS · {active.length} ACTIVE</span>
            <span className="r">non-exclusive</span>
          </div>
          {list.length === 0 && <div className="attempt-empty">// nobody on this yet: be first</div>}
          {list.map((a) => (
            <div key={`${a.team}-${a.claimed}`} className="attempt">
              <div className="row1">
                {a.team}
                <span className={a.fresh ? "meta fresh" : "meta quiet"}>{a.meta}</span>
              </div>
              <div className="p-row">
                <span className="pulse-label">PULSE</span>
                <div className={a.fresh ? "pulse-bar" : "pulse-bar quiet"}>
                  <i style={{ width: `${a.pct}%` }} />
                </div>
                <span className="pulse-when">{a.when}</span>
              </div>
              <div className="line">{a.line}</div>
              {a.pending && <div className="pending-note">! visible to you only until curators merge it</div>}
            </div>
          ))}
          <div className="rail-actions">
            <button className="btn-green" onClick={() => openTake(gap.number)}>
              start an attempt
            </button>
            <WatchButton gapNumber={gap.number} />
          </div>
          <div className="rail-note">// no account: your claim posts publicly and lands in the thread below</div>
        </div>
      )}

      {gap.permission === "build-together" && gap.dialogue?.counterparty && (
        <div className="side-card">
          <div className="label amber">COUNTERPARTY WANTED</div>
          <div className="text">
            {gap.dialogue.counterparty} If you can convene one, <a href="/dialogue/" className="accent">open the dialogue →</a>
          </div>
        </div>
      )}
    </div>
  );
}
