import { gaps, candidateCount, domains } from "@/lib/data";

export const metadata = { title: "About · UK Gap Map" };

const verticalDomains = domains.filter((d) => !d.lens).length;

export default function AboutPage() {
  return (
    <div className="prose page-pad">
      <h1>About the UK Gap Map</h1>
      <p>
        This is a map of <strong>concrete, fillable gaps</strong> in the UK’s civic, economic and technological
        fabric: missing institutions, funds, tools, datasets, legal instruments and coordination mechanisms.
        Each entry links the problem to <em>what would fill it</em> and to sources. The reader we have in mind is
        a founder, funder or policymaker asking: <em>what is missing, and what could I build or fund?</em>
      </p>
      <p>
        The map is modelled on{" "}
        <a href="https://www.gap-map.org" rel="noopener noreferrer" target="_blank">
          Convergent Research’s R&amp;D Gap Map
        </a>
        , which catalogues the bottlenecks holding back science. We borrow its structure (bounded domains,
        curated gap entries, typed resources, honest limitations) and extend the subject from science to
        society.
      </p>

      <h2>The thesis: a follow-through deficit</h2>
      <p>
        Researching 18 domains produced one recurring pattern: the UK is unusually good at producing rights,
        reviews and legislation, and unusually bad at the unglamorous second half: commencement, capital,
        staffing, enforcement and maintenance. Most gaps on this map are not calls for new ideas; they are the
        missing second halves of decisions already made. Six archetypes recur:
      </p>
      <ul>
        <li>
          <strong>Uncommenced law</strong>: legislated, never switched on (the Statutory Debt Repayment Plan,
          street votes, the mutuals asset-lock Act).
        </li>
        <li>
          <strong>Rights without capital</strong>: a statutory right with no fund behind it (the Community Right
          to Buy after the Community Ownership Fund closed).
        </li>
        <li>
          <strong>Policy without an owner</strong>: rules nobody audits (open-source-by-default since 2012 with
          no programme office; a debarment register with no entries).
        </li>
        <li>
          <strong>Maintenance blindness</strong>: novelty funded, upkeep never (no UK Sovereign Tech Fund; civic
          tech one grant from shutdown).
        </li>
        <li>
          <strong>Oversight outsourced to charities</strong>: accountability functions running on sub-£2m
          budgets against multi-billion-pound programmes.
        </li>
        <li>
          <strong>Evidence infrastructure decay</strong>: the state dismantling its own feedback loops (What
          Works Centre for Wellbeing, the Integrated Data Service, Oflog).
        </li>
      </ul>

      <h2>Status: v3 (a build platform, curated, not yet validated)</h2>
      <p>
        The July 2026 research pass produced {candidateCount} candidate entries across 18 dossiers. The
        curation pass (also July 2026) folded duplicates that surfaced in more than one domain into single
        canonical entries (each canonical gap lists what was merged into it and links the domains it appears
        in), and converted the two cross-cutting dossiers (funding, policy) into lenses whose entries live in
        the vertical domains. The map now carries <strong>{gaps.length} canonical gaps</strong> across{" "}
        {verticalDomains} domains, including two curated additions: <a href="/domains/local-ai/">Local AI</a>{" "}
        and <a href="/domains/other/">Other</a>, the shelf for suggestions that fit nowhere else. What remains
        has <strong>not</strong> yet been through validation interviews with practitioners; Convergent shipped
        their v1.0 as “a crude map of an emerging space, not a prioritization”, and that caveat still applies
        here. Expect uneven granularity and entries that events have already overtaken.
      </p>

      <h2>The map is a build platform</h2>
      <p>
        Every gap carries a status: <strong>open</strong>, <strong>in build</strong>, or{" "}
        <strong>shipped</strong>. Anyone can take a gap through the 90-second wizard, with no account: the
        claim posts publicly via GitHub, curators merge it into the claims record, and the gap flips to in
        build across the whole site. Attempts are non-exclusive, each shows a freshness pulse, and 60 days of
        silence frees the gap again. Every gap page carries its own discussion thread (anonymous commenting
        via Remark42 is on the roadmap; replies route through GitHub until it lands), and anyone can{" "}
        <a href="/suggest/">suggest a new gap</a>, which is verified against primary sources before it
        appears. Above the gaps sits an <a href="/outcomes/">outcomes layer</a>: eleven end-states, each
        showing the gaps that block it and live progress towards it, so you can work backwards from the
        outcome you want to the gap you could take.
      </p>

      <h2>Ranking: editorial urgency, 0–5</h2>
      <p>
        Every canonical gap carries an <strong>urgency rank from 0 to 5</strong>, and the default sort is by
        rank. The rank is a curated editorial judgement, not an algorithm, scored against four published
        criteria: <strong>importance</strong> (how much is capped while this stays open),{" "}
        <strong>tractability</strong> (does a known instrument fill it), <strong>neglectedness</strong> (is
        anyone resourced to fill it today), and <strong>window</strong> (does a live date, whether a bill, a break
        clause or an election, make this year different from next). Each entry shows a one-line justification.
        Ranks are opinions offered for correction, and will be re-scored after the practitioner interviews;
        ties break by entry number. AI-crisis entries additionally carry a <strong>capability-time</strong>{" "}
        estimate (how many frontier-model generations before the gap starts to bite), re-scored on a fixed
        cadence rather than ranked once.
      </p>

      <h2>Time-sensitivity: entries expire</h2>
      <p>
        Every entry carries a horizon tag (short 0–2y / mid 2–7y / long 7y+) that drives a mandatory review
        cadence: quarterly for short-horizon entries and anything citing a live process (a bill, a consultation,
        a break clause), six-monthly for mid-term, annual for long-term. Each entry shows its{" "}
        <strong>review-by date</strong>; past it, the entry is badged stale rather than silently trusted. The{" "}
        <a href="/watchlist/">watchlist</a> collects the calendar dates the inventory hangs on.
      </p>

      <h2>Method and sources</h2>
      <p>
        Entries were compiled by structured desk research against primary sources: gov.uk, ONS, NAO, select
        committee reports, Law Commission papers, and the publications of the organisations named in each entry.
        Every entry carries its sources. The next phase is 30–50 practitioner interviews to kill, correct
        and re-rank entries before a public v1.0.
      </p>
      <p>
        Two kin methodologies shape how the map reasons. Deep Science Ventures&rsquo;{" "}
        <a
          href="https://www.deepscienceventures.com/articles/outcomes-graph-a-protocol-for-applied-science-coordination"
          rel="noopener noreferrer"
          target="_blank"
        >
          Outcomes Graph
        </a>{" "}
        works backwards from a desired outcome to the constraints that block it, which is the shape of our{" "}
        <a href="/outcomes/">outcomes layer</a>.{" "}
        <a href="https://discoursegraphs.com" rel="noopener noreferrer" target="_blank">
          Discourse Graphs
        </a>{" "}
        decomposes research into questions, claims and evidence that can be shared and challenged
        independently; the map&rsquo;s per-claim evidence records follow the same shape, and the tool itself
        appears in the <a href="/resources/">resources hub</a>.
      </p>
      <p>
        The map aims to be non-partisan: an evidence-backed inventory, not advocacy. Entries are written to be
        factually acceptable to readers across the political spectrum: “commence the law you passed” has no
        party. Where a proposed fix carries its own risks (new surveillance capability, new regulator burden),
        the entry should say so; tell us where it doesn’t.
      </p>

      <h2>Who is behind this</h2>
      <p>
        The map is a <strong>Logos London Circle</strong> initiative; the <a href="/manifesto/">manifesto</a>{" "}
        explains why it exists. The website is built and maintained by{" "}
        <a href="https://ip3.studio" rel="noopener noreferrer" target="_blank">
          <strong>IP3 Studio</strong>
        </a>
        , and modelled on Convergent Research’s{" "}
        <a href="https://www.gap-map.org" rel="noopener noreferrer" target="_blank">
          gap-map.org
        </a>
        . Get involved, propose a gap or correct an entry on{" "}
        <a href="https://github.com/IP3-Studio/uk-gap-map" rel="noopener noreferrer" target="_blank">
          GitHub
        </a>
        .
      </p>
      <p>
        Twelve entries, badged <a href="/gaps/?filter=lens#gaps"><em>decentralisation lens</em></a>, examine
        the same failures through a structural argument: centralisation concentrates failure, and the remedy
        is participation, with communities building transparent, exit-respecting institutions at every scale.
      </p>
      <p>
        <strong>How we handle interest:</strong> entries are written mechanism-agnostically (a gap is never
        “fund organisation X”), and where a specific named technology is a candidate fill, the entry says so and
        rates it by the same yardstick as everything else. We also apply a standing scepticism: nothing is
        trustless, decentralisation comes in degrees, and every proposed fill carries named residual trust
        assumptions. Hold us to that.
      </p>

      <h2>Data</h2>
      <p>
        The whole dataset is downloadable: <a href="/data/gaps.json">gaps.json</a> ·{" "}
        <a href="/data/domains.json">domains.json</a>. Licence and contribution process to be settled before
        public launch.
      </p>
    </div>
  );
}
