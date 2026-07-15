import { Suspense } from "react";
import GapGrid from "@/components/GapGrid";
import StatLine from "@/components/StatLine";

export const metadata = { title: "Gaps · UK Gap Map" };

export default function GapsPage() {
  return (
    <>
      <div className="hero" style={{ paddingBottom: 0 }}>
        <div>
          <StatLine />
          <h1>Every entry is a brief.</h1>
          <div className="hero-copy">
            Sorted by urgency; filter down to what you could start this week. Behind each card: the dossier,
            the sources, who is attempting it, and the thread.
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        <GapGrid />
      </Suspense>
    </>
  );
}
