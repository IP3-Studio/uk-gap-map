import { Suspense } from "react";
import Link from "next/link";
import GapGrid from "@/components/GapGrid";
import LiveLog from "@/components/LiveLog";
import Matrix from "@/components/Matrix";
import StatLine from "@/components/StatLine";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div>
          <StatLine />
          <h1>The map is a to-do list.</h1>
          <div className="hero-copy">
            Every dot is a documented gap with sources. Down and left is urgent and permissionless. Green dots
            have a team on them; hollow dots are waiting for yours. No account needed: a claim is a public
            post.
          </div>
        </div>
        <div className="hero-right">
          <LiveLog />
          <div className="legend" aria-hidden="true">
            <span>
              <i className="d-open" /> open
            </span>
            <span>
              <i className="d-build" /> in build
            </span>
            <span>
              <i className="d-shipped" /> shipped
            </span>
          </div>
        </div>
      </div>

      <Matrix />

      <div className="payoff">
        <span className="prompt">&gt;</span>
        <span className="line">
          The top-left corner is the pitch: <b>urgent, permissionless, still unclaimed.</b>
        </span>
        <Link href="/?filter=urgent#gaps" className="btn-green sm">
          show me those
        </Link>
      </div>

      <Suspense fallback={null}>
        <GapGrid />
      </Suspense>
    </>
  );
}
