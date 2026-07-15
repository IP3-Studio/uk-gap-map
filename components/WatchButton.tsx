"use client";

import { useAttempts } from "@/components/AttemptsProvider";

// Personal watch toggle, localStorage only. No public counter: the design
// seeds fake counts, and this map does not show numbers it cannot back.
export default function WatchButton({ gapNumber }: { gapNumber: number }) {
  const { watched, toggleWatch, ready } = useAttempts();
  const on = ready && !!watched[gapNumber];
  return (
    <button className={on ? "btn-outline on" : "btn-outline"} onClick={() => toggleWatch(gapNumber)}>
      {on ? "watching ✓" : "watch"}
    </button>
  );
}
