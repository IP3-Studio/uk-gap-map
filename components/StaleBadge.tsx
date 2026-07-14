"use client";

import { useEffect, useState } from "react";

// Staleness must track real time on a static host, so it is computed
// client-side after mount — a build-time check would freeze at the build date
// and overdue entries would render as fresh forever.
export default function StaleBadge({ reviewBy, compact }: { reviewBy: string; compact?: boolean }) {
  const [stale, setStale] = useState(false);

  useEffect(() => {
    setStale(reviewBy < new Date().toISOString().slice(0, 10));
  }, [reviewBy]);

  if (!stale) return null;
  return <span className="badge stale">{compact ? "stale" : "stale (past review date)"}</span>;
}
