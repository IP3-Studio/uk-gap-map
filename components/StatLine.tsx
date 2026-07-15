"use client";

import { useAttempts } from "@/components/AttemptsProvider";
import { gaps } from "@/lib/data";

// Hero stat line: live counts, and an honest launch-week line while zero.
export default function StatLine() {
  const { counts } = useAttempts();
  const line =
    counts.build + counts.shipped > 0
      ? `${gaps.length} gaps · ${counts.build} in build · ${counts.shipped} shipped`
      : `${gaps.length} gaps · launch week · none taken yet: first mover advantage`;
  return <div className="stat-line">$ {line}</div>;
}
