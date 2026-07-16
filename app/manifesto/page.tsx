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
        cites its sources. Forkability is our succession plan.
      </p>

      <h2 className="sect-label">Public goods</h2>
      <p>
        What this initiative produces is a public good: free to use, free to copy, free to improve, maintained
        in the open. The map, its data and every tool built from it belong to whoever needs them. We ask the
        same of the gaps we champion: fills that lock the public out are not fills.
      </p>

      <h2 className="sect-label">The lineage</h2>
      <p>
        This project draws its politics from <em>Farewell to Westphalia</em> by Jarrad Hope and Peter Ludlow:
        governance legitimated by consent and exit rather than inheritance; institutions that earn trust with
        guarantees instead of promises; and the observation that simply by participating, one can put a hand on
        the tiller. We import the book&apos;s scepticism along with its ambition: nothing is trustless,
        decentralisation comes in degrees, and every proposed fill on this map names its residual trust
        assumptions. Twelve entries, badged <em>decentralisation lens</em>, apply the book&apos;s argument to
        the UK directly.
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
        stop you either.
      </p>
    </div>
  );
}
