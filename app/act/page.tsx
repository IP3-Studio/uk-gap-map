import Link from "next/link";
import { gaps } from "@/lib/data";

export const metadata = { title: "Act · UK Gap Map" };

const REPO = "https://github.com/IP3-Studio/uk-gap-map";
// Contact currently routes through the public repository; swap for an email/form when one exists.
const mail = (_subject: string) => REPO;

// Counts are computed from the dataset so regenerated data can't drift from the prose.
const count = (type: string) => gaps.filter((g) => g.type === type).length;
const perm = (p: string) => gaps.filter((g) => g.permission === p).length;
const dataReadyNow = gaps.filter((g) => g.permission === "build-now" && g.dataReady).length;

export default function ActPage() {
  return (
    <div className="prose">
      <h1>The map is a to-do list</h1>
      <p className="lede">
        Every entry on this map names something buildable, fundable or decidable. Nothing here requires
        permission you don’t have. Pick a gap that matches what you can do and start, or find the people who
        already have.
      </p>

      <h2>Where to start: permission is mostly optional</h2>
      <div className="audience-grid">
        <div className="audience-card">
          <h2>
            <Link href="/?permission=build-now">Build now · {perm("build-now")}</Link>
          </h2>
          <p>
            No permission needed. A competent team could start any of these this week, and for{" "}
            {dataReadyNow} of them the data is already available or sourceable. Don’t ask; ship, then show.
          </p>
        </div>
        <div className="audience-card">
          <h2>
            <Link href="/?permission=build-together">Build together · {perm("build-together")}</Link>
          </h2>
          <p>
            No new law needed: these need a willing council, NHS body, union or regulator at the table. The{" "}
            <Link href="/dialogue/">dialogue page</Link> is our standing offer to public institutions: the ask,
            what we bring, what you gain, and a first step per gap.
          </p>
        </div>
        <div className="audience-card">
          <h2>
            <Link href="/?permission=state-led">State-led · {perm("state-led")}</Link>
          </h2>
          <p>
            Only the state can ship these, but pressure, prototypes and evidence are permissionless, and many
            reduce to a commencement order someone has to keep asking for.
          </p>
        </div>
      </div>

      <h2>Who can act</h2>
      <div className="audience-grid">
        <div className="audience-card">
          <h2>Builders &amp; founders</h2>
          <p>
            {count("institutional")} gaps are missing institutions; {count("tooling")} are missing tools or
            datasets. Each entry is a product brief with sources.
          </p>
          <ul>
            <li>
              <Link href="/?types=institutional,tooling">Browse buildable gaps</Link>
            </li>
            <li>
              Start small: an observatory, a register, a template library. Several entries are shippable by a
              tiny team.
            </li>
            <li>
              <a href={mail("UK Gap Map: I want to build")}>Tell us what you’re building</a> and we’ll link it
              from the entry.
            </li>
          </ul>
        </div>
        <div className="audience-card">
          <h2>Funders</h2>
          <p>
            {count("funding")} gaps are missing funding instruments; many are pooled vehicles no single funder
            could build alone, sized £1m–£50m.
          </p>
          <ul>
            <li>
              <Link href="/?types=funding">Browse funding gaps</Link>
            </li>
            <li>
              The recurring ask is patient, 5–10 year core funding, not another grant round.
            </li>
            <li>
              <a href={mail("UK Gap Map: funder conversation")}>Talk to us about co-funding</a>.
            </li>
          </ul>
        </div>
        <div className="audience-card">
          <h2>Organisers &amp; communities</h2>
          <p>
            The civic gaps need people before money: neighbourhood boards, volunteer pipelines, community
            ownership, mutual aid that persists.
          </p>
          <ul>
            <li>
              <Link href="/?domains=civic-society,youth-mobilisation,parallel-institutions">
                Browse community gaps
              </Link>
            </li>
            <li>Adopt a gap locally: run the pilot your area is missing.</li>
            <li>
              <a href={mail("UK Gap Map: organising")}>Find others working on it</a>.
            </li>
          </ul>
        </div>
        <div className="audience-card">
          <h2>Policymakers &amp; officials</h2>
          <p>
            {count("policy")} gaps are policy-shaped, and many are embarrassingly cheap: commencement orders for
            law already passed, registers already legislated.
          </p>
          <ul>
            <li>
              <Link href="/?types=policy">Browse policy gaps</Link>
            </li>
            <li>
              Check the <Link href="/watchlist/">watchlist</Link> for the live windows: consultations, break
              clauses, bills in passage.
            </li>
            <li>
              <a href={mail("UK Gap Map: policy")}>Ask for the underlying dossier</a>.
            </li>
          </ul>
        </div>
        <div className="audience-card">
          <h2>Researchers &amp; journalists</h2>
          <p>
            {count("knowledge")} gaps are missing evidence; every entry carries sources that can be
            interrogated, extended or demolished.
          </p>
          <ul>
            <li>
              <Link href="/?types=knowledge">Browse knowledge gaps</Link>
            </li>
            <li>Correct us: entries that don’t survive scrutiny should die in public.</li>
            <li>
              <a href="/data/gaps.json">Take the dataset</a> and build on it.
            </li>
          </ul>
        </div>
        <div className="audience-card">
          <h2>Everyone</h2>
          <p>Sovereignty starts with defaults you control.</p>
          <ul>
            <li>
              Move one group chat, one backup, one login to infrastructure you control; the{" "}
              <Link href="/resources/">resource hub</Link> lists what works today.
            </li>
            <li>
              Put one gap in front of your MP via{" "}
              <a href="https://www.writetothem.com/" rel="noopener noreferrer" target="_blank">
                WriteToThem
              </a>
              .
            </li>
            <li>
              <a href={mail("UK Gap Map: count me in")}>Leave your contact</a> and we’ll match you to a gap.
            </li>
          </ul>
        </div>
      </div>

      <h2>How we think about action</h2>
      <p>
        The doctrine behind this page comes from <em>Farewell to Westphalia</em> (Hope &amp; Ludlow, 2025), whose
        conclusion is blunt: the binding constraint on better governance is not technology but participation,
        because “simply by participating… one can put one’s hand on the tiller.” Three working rules follow:
      </p>
      <ul>
        <li>
          <strong>Build, don’t only petition.</strong> Where a gap is buildable, the fastest fix is a working
          demonstration. Where it is a policy gap, the ask is usually embarrassingly small (commence the law,
          fund the register), and a working demonstration strengthens the ask.
        </li>
        <li>
          <strong>Expand a mission before founding an institution.</strong> The cheapest route to filling a gap
          is usually an existing community (a union branch, a co-op, a congregation, a professional network)
          adopting it, not a new organisation incorporating from zero.
        </li>
        <li>
          <strong>Fixing and building alternatives are complements.</strong> Reform makes existing institutions
          less brittle; parallel institutions are the pressure valve and the hedge. Exit disciplines voice. This
          map carries both tracks deliberately.
        </li>
      </ul>
      <p>
        And three tests for anything you build, from the same source: does it <strong>minimise distrust</strong>{" "}
        (no unaccountable centre to take on faith)? Does it enable <strong>self-determination</strong>? Does it
        provide <strong>safe exit</strong>: can people leave with their assets and standing at bearable cost?
        See the full application of the book to this map in the{" "}
        <a href="/about/">about page</a>.
      </p>

      <h2>Contact</h2>
      <p>
        It all runs through the repository:{" "}
        <a href={REPO} rel="noopener noreferrer" target="_blank">
          open an issue on GitHub
        </a>
        . Say which gap (by number), what you can bring, and what you need. Claimed gaps get linked from their
        entries so effort compounds instead of duplicating.
      </p>
    </div>
  );
}
