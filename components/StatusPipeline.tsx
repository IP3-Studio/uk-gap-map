"use client";

import { useAttempts } from "@/components/AttemptsProvider";
import { daysSince } from "@/lib/attempts";

// open ── building · day N ── shipped, with the live stage boxed.
export default function StatusPipeline({ gapNumber }: { gapNumber: number }) {
  const { byGap, statusOf, now } = useAttempts();
  const status = statusOf(gapNumber);
  const list = byGap.get(gapNumber) ?? [];

  const earliestClaim = list.length ? list.map((a) => a.claimed).sort()[0] : null;
  const opened = earliestClaim
    ? new Date(earliestClaim).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }).toLowerCase().replace(" ", "-")
    : null;
  const buildDay = earliestClaim ? daysSince(earliestClaim, now) + 1 : 1;
  const shipped = list.find((a) => a.shipped);

  if (status === "shipped" && shipped) {
    return (
      <div className="pipeline">
        <span className="stage">open {opened ?? ""}</span>
        <span className="rail" />
        <span className="stage">built</span>
        <span className="rail" />
        <span className="stage done-ship">✓ shipped · verified</span>
      </div>
    );
  }
  if (status === "build") {
    return (
      <div className="pipeline">
        <span className="stage">open {opened ?? ""}</span>
        <span className="rail" />
        <span className="stage now">building · day {buildDay}</span>
        <span className="rail" />
        <span>shipped ·</span>
      </div>
    );
  }
  return (
    <div className="pipeline">
      <span className="stage boxed">open</span>
      <span className="rail" />
      <span>claimed ·</span>
      <span className="rail" />
      <span>shipped ·</span>
    </div>
  );
}
