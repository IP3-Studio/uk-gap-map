import Link from "next/link";
import LiveLog from "@/components/LiveLog";
import Matrix from "@/components/Matrix";
import StatLine from "@/components/StatLine";
import { domains, gaps } from "@/lib/data";

const perm = (p: string) => gaps.filter((g) => g.permission === p).length;

export default function Home() {
  const vertical = domains.filter((d) => !d.lens);

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
        <Link href="/gaps/?filter=urgent#gaps" className="btn-green sm">
          show me those
        </Link>
      </div>

      <div className="list-head">
        <span className="title">three ways in</span>
        <span className="count">permission is mostly optional</span>
      </div>
      <div className="act-trio">
        <Link href="/gaps/?filter=build-now#gaps" className="act-card">
          <span className="tier bn">build-now · {perm("build-now")}</span>
          <h3>Start this week</h3>
          <p>
            No permission needed. A competent team could start any of these now; the entry is the product
            brief.
          </p>
          <span className="go">browse them →</span>
        </Link>
        <Link href="/dialogue/" className="act-card">
          <span className="tier bt">build-together · {perm("build-together")}</span>
          <h3>Open the dialogue</h3>
          <p>
            No new law: these need a willing council, NHS body, union or regulator at the table. Each carries
            a ready-made institutional brief.
          </p>
          <span className="go">the standing offer →</span>
        </Link>
        <Link href="/act/" className="act-card">
          <span className="tier sl">state-led · {perm("state-led")}</span>
          <h3>Apply the pressure</h3>
          <p>
            Only the state can ship these, but evidence, prototypes and asking loudly are permissionless. Many
            reduce to a commencement order.
          </p>
          <span className="go">ways to act →</span>
        </Link>
      </div>

      <div className="list-head">
        <span className="title">browse by domain</span>
        <span className="count">
          {vertical.length} domains · <Link href="/gaps/">or all {gaps.length} gaps at once →</Link>
        </span>
      </div>
      <div className="domain-grid home-domains">
        {vertical.map((d) => (
          <Link key={d.slug} href={`/domains/${d.slug}/`} className="domain-card">
            <h3>{d.shortName}</h3>
            <p>{d.gapCount} gaps</p>
          </Link>
        ))}
      </div>
    </>
  );
}
