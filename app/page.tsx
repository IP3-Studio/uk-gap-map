import { Suspense } from "react";
import Link from "next/link";
import Dashboard from "@/components/Dashboard";
import TerritoryChart from "@/components/TerritoryChart";
import { gaps, candidateCount } from "@/lib/data";

const perm = (p: string) => gaps.filter((g) => g.permission === p).length;

export default function Home() {
  return (
    <>
      <h1>What’s missing in the UK — and what would fill it</h1>
      <p className="lede">
        {gaps.length} concrete gaps in Britain’s civic, economic and technological fabric: missing institutions,
        funds, tools, datasets and laws left switched off. Each one names what would fill it. Most don’t need
        anyone’s permission to start.{" "}
        {candidateCount > gaps.length && (
          <>Curated from {candidateCount} research candidates — duplicates across domains are counted once.</>
        )}
      </p>

      <div className="stat-row">
        <Link href="/?permission=build-now" className="stat-tile now">
          <div className="n">{perm("build-now")}</div>
          <div className="t">Build now</div>
          <div className="s">No permission needed. A small team could start any of these this week.</div>
        </Link>
        <Link href="/?permission=build-together" className="stat-tile together">
          <div className="n">{perm("build-together")}</div>
          <div className="t">Build together</div>
          <div className="s">No new law — just a willing council, union or public body at the table.</div>
        </Link>
        <Link href="/?permission=state-led" className="stat-tile">
          <div className="n">{perm("state-led")}</div>
          <div className="t">State-led</div>
          <div className="s">Only government can ship these. Pressure and prototypes are still fair game.</div>
        </Link>
      </div>

      <h2 className="home-h2">The territory at a glance</h2>
      <TerritoryChart />

      <h2 className="home-h2" id="browse">
        Browse the gaps
      </h2>
      <Suspense fallback={null}>
        <Dashboard />
      </Suspense>
    </>
  );
}
