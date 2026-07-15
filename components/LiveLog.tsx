"use client";

import { useAttempts } from "@/components/AttemptsProvider";
import { agoLabel, refOf } from "@/lib/attempts";

type Ev = { kind: "claim" | "update" | "ship"; team: string; gap: number; date: string };

// Hero activity panel; renders nothing until there is real activity to show.
export default function LiveLog() {
  const { attempts, now } = useAttempts();

  const events: Ev[] = [];
  for (const a of attempts) {
    if (a.pending) continue;
    events.push({ kind: "claim", team: a.team, gap: a.gap, date: a.claimed });
    for (const u of a.updates ?? []) events.push({ kind: u.kind === "ship" ? "ship" : "update", team: a.team, gap: a.gap, date: u.date });
    if (a.shipped) events.push({ kind: "ship", team: a.team, gap: a.gap, date: a.shipped.date });
  }
  if (events.length === 0) return null;
  events.sort((x, y) => (x.date > y.date ? -1 : 1));

  return (
    <div className="live-log">
      <div className="cmt">// live: reads straight from the claims record</div>
      <div className="rows">
        {events.slice(0, 3).map((e, i) => (
          <span key={i}>
            <span className={`t-${e.kind}`}>[{e.kind}]</span> {e.team} → {refOf(e.gap)} <span className="when">{agoLabel(e.date, now)}</span>
            <br />
          </span>
        ))}
        <span className="t-claim">▮</span>
      </div>
    </div>
  );
}
