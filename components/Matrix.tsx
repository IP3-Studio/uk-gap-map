"use client";

import { useRouter } from "next/navigation";
import { useAttempts } from "@/components/AttemptsProvider";
import { refOf } from "@/lib/attempts";
import { gaps, type Gap } from "@/lib/data";

// Urgency × permission matrix. Dots are featured gaps: everything in build or
// shipped, then the highest-ranked open gaps, capped per cell with a +n rest.
const TIERS = [
  { key: "build-now", cls: "bn", label: "BUILD NOW" },
  { key: "build-together", cls: "bt", label: "BUILD TOGETHER" },
  { key: "state-led", cls: "sl", label: "STATE-LED" },
] as const;

const BANDS = [
  { key: "u5", test: (g: Gap) => g.rank === 5 },
  { key: "u4", test: (g: Gap) => g.rank === 4 },
  { key: "u3", test: (g: Gap) => g.rank === 3 },
  { key: "u2-", test: (g: Gap) => (g.rank ?? 0) <= 2 },
] as const;

const MAX_DOTS = 4;

export default function Matrix() {
  const router = useRouter();
  const { statusOf } = useAttempts();

  const tierCount = (key: string) => gaps.filter((g) => g.permission === key).length;

  return (
    <div className="matrix-wrap">
      <div className="matrix-scroll">
        <div className="matrix">
          <div className="m-row">
            <div />
            {TIERS.map((t) => (
              <div key={t.key} className={`m-head ${t.cls}`}>
                {t.label} · {tierCount(t.key)}
              </div>
            ))}
          </div>
          {BANDS.map((band) => (
            <div key={band.key} className="m-row">
              <div className="m-band">{band.key}</div>
              {TIERS.map((t) => {
                const cell = gaps
                  .filter((g) => g.permission === t.key && band.test(g))
                  .sort((a, b) => (b.rank ?? 0) - (a.rank ?? 0) || a.number - b.number);
                const withStatus = cell.map((g) => ({ g, status: statusOf(g.number) }));
                const featured = [
                  ...withStatus.filter((x) => x.status !== "open"),
                  ...withStatus.filter((x) => x.status === "open"),
                ].slice(0, MAX_DOTS);
                const more = cell.length - featured.length;
                return (
                  <div key={t.key} className="m-cell">
                    <span className="m-count">
                      {band.key} · {cell.length}
                    </span>
                    <div className="m-dots">
                      {featured.map(({ g, status }) => (
                        <button
                          key={g.number}
                          className={`dot ${status === "build" ? "build" : status === "shipped" ? "shipped" : "open"}`}
                          title={`${refOf(g.number)} ${g.title}`}
                          aria-label={`${refOf(g.number)} ${g.title}`}
                          onClick={() => router.push(`/gaps/${g.slug}/`)}
                        />
                      ))}
                      {more > 0 && <span className="m-more">+{more}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
