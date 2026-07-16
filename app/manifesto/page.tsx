import Link from "next/link";
import { REPO } from "@/lib/attempts";

export const metadata = { title: "Manifesto · UK Gap Map" };

const LOGOS = "https://logos.co";

export default function ManifestoPage() {
  return (
    <div className="prose page-pad manifesto">
      <div className="sect-label">Manifesto</div>
      <h1>Build what is missing.</h1>
      <p className="standfirst">
        The UK Gap Map is a Logos London Circle initiative: a public inventory of what Britain is missing,
        built so that anyone can stop waiting for permission and start closing the gaps. Real change starts at
        the local level. The map is a to-do list, and it is open.
      </p>

      <h2 className="sect-label">The default nobody chose</h2>
      <p>
        The nation state is not a fact of nature. It is a technology, invented in 1648 to contain the
        seventeenth century&apos;s religious wars. Out of that catastrophe came not a new community but a new
        unit: the territorial sovereign, a lord of its own world, answering to no one above and, in time, to
        no one below. Every default you live inside (who issues your money, who holds your records, who
        decides what you may build) descends from that one design decision. Designs can be revised. This one
        is three hundred and seventy years overdue.
      </p>

      <h2 className="sect-label">The receipts</h2>
      <p>
        In 1870 the state took about a tenth of what its citizens produced. Today it takes over a third, and
        across much of Europe close to half. Each crisis grew it; no crisis ever shrank it back. In 1964,
        three in four Americans trusted their government to do the right thing; by late 2025 it was 17
        per cent, and just 2 per cent said &quot;just about always&quot;. The pattern is not one country&apos;s
        misfortune; it is the operating system. We were born into a debt we never authorised, issued by a
        monopoly that taxes the present, borrows against the future, and bills the unborn. The state promised
        to look after you; increasingly it can barely afford to look after its lenders.
      </p>

      <h2 className="sect-label">The exits that failed</h2>
      <p>
        Two remedies have been tried. Reform from within: voice has been raised against the machine for fifty
        years, and the machine has won every round, under every party. And building upward: a world authority
        above the states, run as a live experiment for eight decades, undelivered, because you cannot cure a
        monopoly by building a bigger monopoly above it. The diagnosis is simpler than either remedy: a
        sovereign you cannot leave is a sovereign that need never improve. The entire game is to lower the
        cost of exit.
      </p>

      <h2 className="sect-label">The existence proof</h2>
      <p>
        Voluntary, borderless, leaderless coordination at planetary scale is supposed to be impossible. It
        ships every nine weeks, on a mailing list. Linux is maintained by thousands of contributors across
        hundreds of fiercely competing employers, compelled by nobody, and the identical free kernel runs the
        world&apos;s fastest supercomputers and the cheapest handset in a Lagos market. That is what an open
        commons does that a gated exit never will: the builders leave the failing system first, and then hand
        the product to everyone, especially the people that system left behind. Builders never needed borders
        to improve a billion lives. The proof may be sitting in your pocket. The difference between secession
        and a commons is the only thing worth fighting about.
      </p>

      <h2 className="sect-label">The theory of change</h2>
      <p>
        Governance efficiency is the largest wealth generator we have. The answer to failing institutions is
        not reform from inside and not revolution. It is a competitive marketplace of parallel institutions
        filling the gaps that existing governance leaves open. Build the alternative, make exit cheap, and let
        people opt in.
      </p>
      <p>
        Sovereignty can be unbundled from the ground it was welded to. The map has a whole domain for this:{" "}
        <Link href="/domains/parallel-institutions/">parallel institutions</Link>.
      </p>

      <h2 className="sect-label">What we hold</h2>
      <ul>
        <li>
          <strong>Decentralisation.</strong> Centralisation concentrates failure. When one department, one
          contractor or one platform holds everything, one mistake reaches everyone, and no one can route
          around it. Systems that distribute power fail smaller, recover faster and answer to the people inside
          them.
        </li>
        <li>
          <strong>Participation.</strong> The binding constraint on better governance is not technology but
          participation. Institutions are not weather; they are made of the people who show up. Every entry on
          this map is an invitation to show up.
        </li>
        <li>
          <strong>Privacy.</strong> Privacy is consent: the right to decide who sees what, rather than a favour
          revocable by whoever runs the server. A society under permanent observation cannot speak, organise or
          dissent freely, and so cannot correct itself.
        </li>
        <li>
          <strong>Sovereignty.</strong> Communities should hold the keys to their own infrastructure, data and
          money. Dependence on any single foreign platform, vendor or jurisdiction is a decision someone else
          gets to make about your future.
        </li>
      </ul>

      <h2 className="sect-label">At the grassroots</h2>
      <p>Things we aim to solve at the grassroots level:</p>
      <ul>
        <li>
          Awareness of <Link href="/domains/debt/">UK debt</Link>, to produce an informed dialogue; see the{" "}
          <a href={LOGOS} rel="noopener noreferrer" target="_blank">
            Logos UK debt campaign
          </a>
          .
        </li>
        <li>
          Awareness of <Link href="/domains/corruption-integrity/">corruption and the misuse of public resources</Link>.
        </li>
        <li>
          Dialogue on <Link href="/domains/growth-stagnation/">stagnation</Link> and practical revitalisation
          strategies.
        </li>
        <li>
          Campaigns and knowledge sharing on the dangers of <Link href="/domains/surveillance/">surveillance</Link> to
          civil liberties.
        </li>
        <li>
          Opportunities to <Link href="/gaps/?filter=build-now#gaps">build tools</Link> that deliver local solutions
          to local problems.
        </li>
        <li>
          Opportunities to <Link href="/act/">fund the next wave of innovation</Link> at the grassroots level.
        </li>
      </ul>

      <h2 className="sect-label">Speech</h2>
      <p>
        Free expression is not a nicety; it is error-correction infrastructure. A country that cannot say what
        is broken cannot fix it. We stand with the movement for freedom of expression and speech: the right to
        publish, to question, to organise and to be wrong in public without permission. Several entries on this
        map exist precisely because that right is being narrowed quietly, by infrastructure rather than by
        argument.
      </p>

      <h2 className="sect-label">The future, not foreclosed</h2>
      <p>
        We refuse to hand the next generation a country they cannot repair: debt they did not choose,
        infrastructure they cannot inspect, institutions they cannot enter, and records about them they cannot
        see or delete. The young will live longest with the consequences of what is built and neglected now,
        which is why youth participation has its own domain on this map, and why the horizon of every entry is
        stated honestly. A future that stays open for the people who will inhabit it: that is the standard.
      </p>

      <h2 className="sect-label">Clarity comes from building</h2>
      <p>
        Position papers accumulate; working demonstrations compound. We build with purpose: pick a gap, say
        what will exist in ninety days, and show it. A small pilot that runs teaches more than a manifesto,
        including this one. Where a gap needs the state, the fastest pressure is still a working prototype next
        to a patient argument.
      </p>

      <h2 className="sect-label">No central party</h2>
      <p>
        We lead through open source initiatives that can be picked up by anyone and depend on no central party
        for their deliverables, success or completion, including us. If this circle dissolved tomorrow, nothing
        here dies: the dataset is downloadable, the code is public, the method is written down, and every claim
        cites its sources. The freedom to fork is the cheapest, most credible exit there is; it is what keeps
        maintainers honest, and it applies to us first.
      </p>

      <h2 className="sect-label">Public goods</h2>
      <p>
        What this initiative produces is a public good: free to use, free to copy, free to improve, maintained
        in the open. The map, its data and every tool built from it belong to whoever needs them. We ask the
        same of the gaps we champion: fills that lock the public out are not fills.
      </p>

      <h2 className="sect-label">The lineage</h2>
      <p>
        This project draws its politics from <em>Farewell to Westphalia</em> by Jarrad Hope and Peter Ludlow,
        who put the question directly: why should our technologies for political organisation be set in stone?
        Governance legitimated by consent and exit rather than inheritance; institutions that earn trust with
        guarantees instead of promises; and the observation that simply by participating, one can put a hand on
        the tiller. We import the book&apos;s scepticism along with its ambition: nothing is trustless,
        decentralisation comes in degrees, and every proposed fill on this map names its residual trust
        assumptions. Twelve entries, badged <em>decentralisation lens</em>, apply the book&apos;s argument to
        the UK directly. The long version of the story above is our essay,{" "}
        <em>The Majestic Portal, the Mortgaged Future and the Parallel</em>.
      </p>

      <h2 className="sect-label">About the Logos Circle London</h2>
      <p>
        The Logos Circle London is developing educational formats and public engagement approaches that link
        fiscal policy, government debt, and digital governance into accessible narratives. The emphasis is on
        helping communities understand the long-term consequences of policy decisions, strengthening civic
        literacy around both economic and digital systems, and contributing to more informed public discourse
        on reform priorities.
      </p>

      <h2 className="sect-label">Join</h2>
      <p>
        The circle meets monthly in London, and the work between meetings happens in the open. Come to one
        gathering, pick one gap, or send one correction: participation is the whole point.
      </p>
      <ul>
        <li>
          <a href={LOGOS} rel="noopener noreferrer" target="_blank">
            Logos circles
          </a>{" "}
          · local chapters of activists and change seekers, in 47 cities and counting; London is one of them.
        </li>
        <li>
          <Link href="/gaps/?filter=urgent#gaps">Take a gap</Link> · the urgent, permissionless, unclaimed
          shortlist is the fastest way in.
        </li>
        <li>
          <a href={REPO} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>{" "}
          · claims, suggestions and corrections all land here, in public.
        </li>
      </ul>

      <h2 className="sect-label">BYOF</h2>
      <p>
        <strong>Build Your Own Future.</strong> The gaps are documented, the sources are cited, the tools are
        open and the thread is waiting. Nobody else is coming, and that is the good news: it means nobody can
        stop you either. The portal is open again. The only question is whether we walk through it, or keep
        paying interest on a world that has stopped working.
      </p>
    </div>
  );
}
