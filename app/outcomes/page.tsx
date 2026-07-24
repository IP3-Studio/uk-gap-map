import OutcomeCards from "@/components/OutcomeCards";
import { outcomes } from "@/lib/outcomes";

export const metadata = { title: "Outcomes · UK Gap Map" };

export default function OutcomesPage() {
  return (
    <div className="page-pad outcomes-page">
      <header className="outcomes-head">
        <h1>What the gaps add up to.</h1>
        <p className="o-stand">
          {outcomes.length} outcomes. Each names something that becomes true for Britain when a cluster
          of gaps closes, and each shows live progress as attempts ship. Work backwards from the outcome
          you want, then take a gap that blocks it. Every dot is a gap: hollow is open, glowing is in
          build, solid is shipped.
        </p>
      </header>

      <OutcomeCards />

      <p className="o-method mono">
        // method: outcomes layer v1. Membership is defined by whole domains plus named cross-domain
        gaps; dependency logic between outcomes comes later. The approach borrows from Deep Science
        Ventures&rsquo;{" "}
        <a
          href="https://www.deepscienceventures.com/articles/outcomes-graph-a-protocol-for-applied-science-coordination"
          rel="noopener noreferrer"
          target="_blank"
        >
          Outcomes Graph
        </a>{" "}
        and from{" "}
        <a href="https://discoursegraphs.com" rel="noopener noreferrer" target="_blank">
          Discourse Graphs
        </a>
        . Statuses are live from the claims record.
      </p>
    </div>
  );
}
