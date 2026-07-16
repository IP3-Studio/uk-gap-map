"use client";

import { useAttempts } from "@/components/AttemptsProvider";
import { domains, gaps } from "@/lib/data";

const domainCount = domains.filter((d) => !d.lens).length;

// Hero stat line: plain facts until there is activity, live counts after.
export default function StatLine() {
  const { counts } = useAttempts();
  const line =
    counts.build + counts.shipped > 0
      ? `${gaps.length} gaps · ${counts.build} in build · ${counts.shipped} shipped`
      : `${gaps.length} gaps · ${domainCount} domains and growing · open to action`;
  return <div className="stat-line">{line}</div>;
}
