# UK Gap Map — Scoping Document

**Status:** v0.3 scope (July 2026). Research complete — all 18 dossiers in; nothing built yet.
**Modelled on:** [Convergent Research's Gap Map](https://www.gap-map.org/?sort=rank), their [ecosystem directory](https://www.convergentresearch.org/ecosystem), and the [Essential Technology launch post](https://www.essentialtechnology.blog/p/introducing-the-convergent-research); AI-crisis framing informed by [Europe 2031](https://europe2031.ai/europe-2031.pdf).
**Research base:** 18 domain dossiers (in `domains/`), 223 candidate gap entries (211 from the July 2026 research pass + 12 from a decentralisation lens pass), all sourced against the mid-2026 UK situation; reference-model analysis in `reference-models.md`; adversarial completeness review in `completeness-critique.md`.

**Visual layer (July 2026):** the home page carries a "territory at a glance" chart — 18 domain rows, stacked by permission split, every segment deep-linking into the filtered dashboard; the watchlist is a visual timeline grouped by period; gap pages have breadcrumbs and a "more in this domain" trail. **Geographic UK map: deliberately not built** — the gaps are national/institutional and a coloured-counties map would imply place-level data that doesn't exist. The trigger for building one is real local adoption data (claimed gaps, local pilots, circle activity): "who is building what, where" is mappable; the inventory itself is not.

**Dialogue kit (July 2026):** `/dialogue` carries an institutional brief for every build-together gap (43), grouped by counterparty (10 for local government, 17 for government bodies, plus NHS/care, regulators, unions, funders, schools, electoral bodies). Each brief: the ask, what the community side brings, what the institution gains (written in the institution's own interest language), and a first step pilot-sized enough to agree in one meeting. Briefs render on the gap pages too, with a dialogue-specific contact CTA. Data in `data/dialogue.json`.

**Resource hub (July 2026):** the site carries `/resources` — "Stacks you can build on today" — 115 verified open-source entries across seven categories (communications, p2p foundations incl. GNUnet, storage/local-first, collaboration/governance, compute & AI, identity/money/coordination, and a personal-privacy layer of phones, browsers, passwords and file tools verified from the curator's long-running privacy-tools board in July 2026), each with an honest maturity rating (production / usable / early), origin, licence and self-host flags. Pre-mainnet projects are rated cold by the same yardstick as everything else. Data in `data/resources.json`; falls under the same quarterly review standard.

**Stewardship:** built and maintained by IP3 Studio; get involved via the repository. The map remains mechanism-agnostic and evidence-first. The site now carries an **action layer**: per-gap claim CTAs, an Act page with audience playbooks, and the participation doctrine — the map is a to-do list, not a catalogue.

---

## 1. What this is

A public, navigable map of **concrete, fillable gaps in the UK's civic, economic and technological fabric** — missing institutions, funds, tools, datasets, legal instruments and coordination mechanisms — each linked to *what would fill it* and *who is already working on it*. The reader is a founder, funder, or policymaker asking: **"What is missing in the UK, and what could I build or fund to fill it?"**

Convergent Research's Gap Map catalogues the R&D bottlenecks holding back science and argues ~100 bridge-scale projects (~$20–50M each) could unlock disproportionate progress. The UK Gap Map makes the equivalent argument for society: **a bounded set of civic and institutional capabilities — most fundable at £1M–£50M — that existing institutions can't or won't build, whose absence quietly caps national renewal.**

The map is an evidence-backed inventory, not advocacy. It must be usable by people across the political spectrum, which the research suggests is achievable: the gaps that survive scrutiny are strikingly non-ideological (commencement orders never laid, registers with no entries, evidence bodies closed mid-crisis, statutory rights with no capital behind them).

## 2. The thesis: Britain's follow-through deficit

Convergent coined "fundamental development" — the category between "R" and "D" that nobody funds. The UK map needs its own load-bearing concept, and the research fleet found it empirically. Across all 18 domains, the same failure pattern recurs: **the UK is unusually good at producing rights, reviews and legislation, and unusually bad at the unglamorous second half — commencement, capital, staffing, enforcement and maintenance.** The map's working name for this is the **follow-through deficit**.

Six recurring **gap archetypes** emerged from ~200 candidate entries. These become the map's cause-of-persistence taxonomy — each gap is tagged with *why it persists*, which points to the kind of fix:

| Archetype | Pattern | Canonical examples from the research |
|---|---|---|
| **Uncommenced law** | Legislated, never switched on | Statutory Debt Repayment Plan (2018 Act, still off); street votes (LURA 2023, no commencement regs); mutuals asset-lock (2023 Act, no SI) |
| **Rights without capital** | A statutory right with no fund to exercise it | Community Right to Buy after the Community Ownership Fund closed; Youth Guarantee that is 8 pilots, not a guarantee |
| **Policy without an owner** | A rule nobody audits or enforces | "Open by default" since 2012 with no OSPO; NHS open source policy pages quietly deleted; debarment register with zero entries |
| **Maintenance blindness** | Novelty funded, upkeep never | No UK Sovereign Tech Fund; civic tech (mySociety, Democracy Club) one grant from shutdown; data.gov.uk 25% link-rot |
| **Oversight outsourced to charities** | Accountability functions run on <£2M budgets | UK digital-rights sector (<£15M total) vs multi-billion state programmes; medConfidential at near-volunteer scale |
| **Evidence infrastructure decay** | The state dismantling its own feedback loops | What Works Centre for Wellbeing closed 2024; ONS Integrated Data Service defunded mid-productivity-crisis; Oflog abolished; no AI-displacement observatory |

This taxonomy is the map's argument. A directory of problems is a complaint; a typed inventory of follow-through failures is a diagnosis with implied remedies.

## 3. What we take from the reference models

Full analysis in [reference-models.md](reference-models.md). The load-bearing decisions:

**From gap-map.org (data model — adopt nearly verbatim):**
- The four-entity spine: **Field → Gap → Capability → Resource** (ours: **Domain → Gap → Intervention → Resource**). Gaps state the problem; Interventions are the buildable/fundable things that would close them; Resources are typed links (orgs, reports, bills, funders, pilots) attached to Interventions, not Gaps.
- Their scale: 20 fields, 103 gaps, 369 capabilities, 1,080 resources. Bounded and curated beats exhaustive. Target for UK v1.0: **~15 domains, ~100 gaps, ~250 interventions, ~800 resources.**
- One Field per Gap (colour-coded filter) + free-text tags for cross-cutting themes. Editorial rank (0–5 "urgency", hand-curated, ties broken by stable entry number) as the default sort — rank is the product's opinion, not an algorithm.
- Ship the entire dataset as embedded static JSON (~2MB); all search/sort/filter client-side; no backend. Fuse.js-style weighted fuzzy search. All view state in the URL. Their CMS is Notion; content model is simple enough for Notion/Airtable or structured files in a repo.
- Keep the **org directory separate** from the gap graph (their /ecosystem is a different app with a different, coarser taxonomy). Orgs appear inside the map only as typed Resources.

**From their methodology (process — adopt with fixes):**
- Ship v1.0 as "a crude map, not a prioritization"; defer scoring fights. State limitations loudly; treat launch as an open call for correction; credit contributors visibly.
- Source gaps from practitioner interviews, not desk aggregation — their credibility came from "hundreds of conversations with frustrated scientists." Ours needs the equivalent: structured conversations with organisers, founders, funders, ex-officials.
- Fix their documented weaknesses: publish the curation workflow and editorial ownership; stamp every entry with source, contributor, date-added and last-verified; commit to a review cadence (bill status decays in months); build a lifecycle process to retire filled gaps.

**From Europe 2031 (what the AI layer must encode):** see §6.

## 4. Domains (the primary axis)

Fourteen domains researched (your list, plus funding and policy as researched lenses), plus additions from a completeness pass. Each has a full dossier in `domains/` with landscape, 14–15 key actors, 11–12 candidate gaps, funders and policy notes.

| # | Domain | Flavour of what the research found |
|---|---|---|
| 1 | **Civic action & civil society** | Policy window open (Devolution Act 2026, £5bn Pride in Place) while the capacity layer collapses (Local Trust, NCS, What Works Wellbeing all gone). Gaps: acquisition capital behind the Right to Buy, a National Neighbourhood Academy, local-news financing, civic statistics. |
| 2 | **Open source & public goods** | The UK wrote the "open by default" playbook and abandoned it. Gaps: UK Sovereign Tech Fund (costed blueprint exists), cross-government OSPO, OSS assurance service, open address file, dependency census. |
| 3 | **Youth mobilisation** | Votes at 16 arriving before the infrastructure: no independent youth council since BYC's collapse, no first-vote programme, no attainer registration pipeline, ~£1.3bn/73% youth-service cuts, nothing replacing NCS. |
| 4 | **Education in the age of AI** | A three-year vacuum between pupils' daily AI use and the 2028 curriculum. Gaps: edtech assurance body, assessment-redesign sandbox (schools and HE), teacher AI-CPD entitlement, an English "Hwb", grant-based mid-career retraining. |
| 5 | **Growth & stagnation** | The legislative wave (Planning Act, Devolution Act, Pensions Act) has landed; delivery hasn't. Gaps bucketed short/mid/long: unit-cost observatory, planner pipeline, street-votes commencement, levy rebalancing, tram delivery unit, mayoral fiscal tools, new-town capitalisation. |
| 6 | **The debt problem** | Three layers (sovereign, municipal, household), institutional holes at each: SDRP uncommenced, debt-advice levy misaligned, no sovereign stress-testing, no council early-warning since Oflog, no municipal resolution regime, illegal-lending enforcement at 1/1000th of market scale. |
| 7 | **Surveillance** | Deployment outrunning law on every front: LFR without a statute, secret encryption orders without transparency reporting, no collective redress, 19M unlawfully-retained custody images, NHS-Palantir break clause (Feb 2027) with no credible exit. |
| 8 | **Corruption & integrity** | New strategy, redrawn bodies — same teeth problem: blank debarment register, in-house lobbyists unregistered, advisory-only Ethics Commission, uncapped donations, FOI starved, SLAPP protection stopping at economic crime, no Office of the Whistleblower. |
| 9 | **Parallel institutions** | Warmest policy environment in decades (mutuals pledge, three Law Commission reviews) blocked by formation plumbing: no new friendly societies since 1993, no limited-liability form for informal associations/DAOs, paper-era FCA registration, no England co-op development agency, zones without governance experimentation. |
| 10 | **Portable sovereignty stack** | Six layers assessed honestly: strong ingredients (Matrix is UK-originated; open-weight models run on consumer hardware), no assembled stack, and law pushing the wrong way (OSA killed ~300 small forums; ADP withdrawn). Includes the "civic stack test lab" gap — independent field evaluation of decentralised tools (incl. Waku, Matrix) with real UK communities. |
| 11 | **Privacy & individual sovereignty** | Enforcement is the systemic hole: no opt-out collective redress, no UK noyb, no merits appeal against ICO inaction, age verification without privacy architecture, digital ID without statutory safeguards, genetic discrimination governed by a voluntary code. |
| 12 | **The coming AI crisis** | The UK is accelerating adoption while downside preparedness is unbuilt: no displacement observatory, no transition instrument, AISI non-statutory, compute sovereignty rented from US hyperscalers, no open-weight hedge, election law deepfake-blind. See §6. |
| 13 | **Funding gaps (lens)** | UK giving stuck at ~0.5% of GDP vs ~1.4% US; the top 1% give ~0.4% of £2tn investable wealth; allocation "chronically misshapen": community organising gets 0.3% of foundation grants, Nesta/OSF/Luminate all exited civic tech and democracy. Gaps: pooled democracy fund at scale, civic tech endowment, foundation payout transparency, national match fund, GiveWell-for-UK-domestic, crypto-public-goods bridge, mandatory grants data ("no UK Form 990"). |
| 14 | **Policy gaps (lens)** | Cross-cutting dossier: the follow-through deficit in statute form, plus the metadata a policy-gap entry must carry (bill status, department, committee interest, commencement status, review-by date). |
| 15 | **Health & social care** *(critic addition)* | The largest area of state activity, rich in exactly our gap-shapes: no implementation vehicle bridging Casey Commission 2026→2028, no English care-worker register (Wales/Scotland have one), Fair Pay Agreement with no funding conduit, GP data-for-research unresolved five years after GPDPR, Liberty Protection Safeguards uncommenced seven years on, no official statistics on unmet care need. |
| 16 | **Justice, courts & access to justice** *(critic addition)* | Every redress gap in surveillance/privacy/debt bottoms out here. Gaps: Leveson's diversion package accepted (Dec 2025) but absent from the Courts and Tribunals Bill; the PACCAR litigation-funding fix missing from the 2026 King's Speech; no opt-out collective redress outside competition law; legal-aid deserts with no coverage duty; no whole-pathway criminal justice inspectorate (and none for courts); IPP resentencing; CCRC reform; no national coroner service. |
| 17 | **Local-state capacity & devolution** *(critic addition)* | The map's biggest blind spot per the critic: ~45% of council accounts disclaimed with no re-audit plan, no "OBR for councils", no statutory failure regime (EFS is a loan-shaped kludge), no early warning since Oflog, 16% finance-post vacancies, council tax still on 1991 valuations. |
| 18 | **National resilience & civil preparedness** *(critic addition)* | The Covid Inquiry's flagship recommendation (independent statutory preparedness body) rejected; no standing scientific advisory infrastructure between crises; no THW-style civil-protection volunteer corps; no adaptation finance mechanism; SuDS Schedule 3 uncommenced in England (in force in Wales); no owner for heat resilience in homes. |

**Deferred with fold rules (per the completeness critique):** housing as its own domain (v1.1 candidate — dense in commencement gaps like the largely-uncommenced Leasehold and Freehold Reform Act 2024; currently split between growth and civic); science/R&D & metascience (v1.1 candidate — FRO formation channel, replication infrastructure); energy security (split: costs→growth, CNI→resilience); media/information ecosystem (extend civic action's local-news entries); food/land use (park in resilience until the Land Use Framework lands); digital inclusion (fold into civic); immigration/demography (thin in fillable, apolitical gap material — revisit).

**Deliberately out of scope for v1.0:** foreign policy and defence procurement proper, Northern Ireland-specific institutions (thin data, distinct politics), and anything requiring the map itself to take a partisan position (e.g. "rejoin the EU"). Revisit at v2.

### 4a. Editorial guidance from the completeness critique

The adversarial review (`completeness-critique.md`) validated the archetype taxonomy and added design rulings the curation pass should apply:

- **Canonical gap IDs with cross-references.** The UK Sovereign Tech Fund appears in four dossiers; it must be *one* gap surfaced in multiple views, or the headline count is inflated and funders double-park.
- **Convert the funding/policy "domains" into facets.** Their entries duplicate vertical-domain gaps; tag every gap `missing institution | missing funding instrument | uncommenced/unenforced law | missing evidence infrastructure | missing enforcement/redress route` and generate the cross-cutting views automatically. (The two dossiers remain valuable as landscape chapters.)
- **Redraw two boundaries:** open-source vs portable-sovereignty as *supply-side (maintaining public-good code)* vs *deployment-side (civic/state adoption)*; surveillance vs privacy as *state surveillance power* vs *commercial data rights and enforcement*.
- **Youth is a demographic lens, not a domain.** Either fold into civic action or create a "democratic & electoral infrastructure" domain (voter registration for all, electoral-administrator workforce, Electoral Commission independence) — which currently falls between youth and corruption.
- **Surface the state-capacity tension.** The growth domain wants fewer regulatory drags; the surveillance/privacy/AI domains propose ~ten new regulators and assurance bodies. Tag each gap with its net demand on state capacity and flag where entries pull in opposite directions — honesty here is a credibility feature.
- **Exit and voice are complementary.** Say explicitly that parallel-institutions formation (build alternatives) and integrity reform (fix existing institutions) are complements, so the former doesn't read as a vote of no confidence in the latter.
- **A meta-gap for the map itself:** no public tracker of uncommenced UK primary legislation exists. Given the follow-through-deficit thesis, this is the map's most on-brand single entry — and a natural first tool to ship alongside it.

## 5. Cross-cutting lenses

These are tags/views over the same gap data, not separate sections of the site:

- **Time horizon:** every gap carries `short (0–2y)` / `mid (2–7y)` / `long (7y+)`. Full inventory (18 dossiers, 211 candidates, per the canonical extraction in `data/gaps.json`): 115 short, 91 mid, 5 long — the map should say explicitly that the short-term skew reflects how much is already legislated-but-unfinished. The growth domain doubles as the demanded "what drives growth now vs later" view. The horizon tag also drives the mandatory review cadence (§8) — short-horizon entries are the most time-sensitive and expire fastest.
- **Gap type:** `funding | policy | tooling | institutional | knowledge | coordination`. Current: 70 policy, 56 institutional, 40 funding, 16 tooling, 15 knowledge, 14 coordination.
- **Cause of persistence:** the six archetypes from §2.
- **Permission axis** (added July 2026, the map's anglo-futurist balance): `build-now` (57 — no permission needed, start this week, and all 57 with data available or sourceable today) / `build-together` (43 — no new law, but needs a willing council, NHS body, union or regulator: the standing agenda for open dialogue with public institutions) / `state-led` (123 — legislation, commencement or government decision). Classified per-gap with a note naming the first artefact, the counterparty, or the blocking instrument (`data/permissions.json`). The 56% state-led share quantifies how much of the UK's gap-scape is gated on government — and the 99 permissionless-or-partnership gaps are the map's immediate-agency offer.
- **Risk/consideration tags** (Convergent's Safety/Security/Governance-Ethics, translated): `surveillance-risk`, `centralisation-risk`, `equity/distribution`, `democratic-legitimacy`, `dual-use`. This keeps the map honest — some plausible "fills" (e.g. digital ID done badly) are themselves gap-creating.
- **Funding lens:** which gaps are fundable by philanthropy vs require the state; ticket size; named plausible funders (each dossier lists them). The recurring finding: UK philanthropy has no pooled vehicles in exactly the places the map needs them (digital rights, community organising, investigative journalism, civic tech maintenance) — the *funds themselves* are gap entries.
- **Sovereignty stack layer:** intelligence / communications / storage & memory / governance / economy / coordination — tagged on relevant gaps across domains 2, 10, 11 and 12, so the stack view assembles from the whole map.

## 6. The AI crisis layer (Europe 2031 → UK)

The Europe 2031 scenario (eight European AI-policy authors, Arq Foundation; credible mechanisms, single-scenario advocacy, fast-timeline assumptions) is useful less as prediction than as a checklist of dependencies the UK map should encode. Its UK-specific readings, cross-checked by our research:

1. **Access is a revocable licence.** The UK's Tier-1 treatment in the scenario is a discretionary Washington call. Reality check: AISI's model access is voluntary; the Frontier AI Bill has slipped indefinitely; the CMA shelved cloud SMS designations. → Gaps: statutory AISI footing, legal anchoring of AI Growth Zone assets (step-in rights, weights escrow), compute reserve.
2. **Location ≠ control.** £31bn of US-controlled datacentre build-out on UK soil confers no sovereignty without contract/statute. → Gap: "sovereign compute is rented" (domain 12, G5).
3. **The open-weight hedge is cheap and unbuilt.** Open-closed capability gap is 4–8 months (AISI's own data); the UK has no OpenEuroLLM analogue, only BritLLM at academic scale. → Gap: National Open Models Programme.
4. **Displacement lands on the UK's economic core.** ~70% of UK workers in AI-exposed roles (DSIT), higher than the US; graduate hiring already visibly cracking. → Gaps: displacement observatory on HMRC real-time data, an AI Transition Fund (wage insurance + retraining — the flexicurity lesson), entry-level hiring credits, place-based compacts for contact-centre towns.
5. **Fiscal transmission.** AI value routed to US firms via low-tax jurisdictions erodes PAYE/corporation-tax exactly as welfare demand rises — and the UK is more services-dependent than the EU27. → Gap: OBR AI-downside scenarios + HMT tax-base-resilience unit. Links directly to the debt domain.
6. **Institutional cognition is the root failure.** Governments unable to perceive or decide at model-release cadence. → Gaps: AI incident database/investigation branch, public-sector AI audit, civil-service churn fixes (the growth domain's state-capacity gaps are also AI-preparedness gaps).
7. **Legitimacy and benefit-sharing.** Backlash without a positive vision destroys policy room in every scenario branch. → The civic domains are not separate from the AI crisis: civil-society capacity, youth mobilisation and honest information infrastructure are the absorptive layer.

The map should also adopt Europe 2031's *measurement* lesson: score AI-related gaps in **capability-time** (how many model generations until this bites) and re-score on a fixed cadence, rather than ranking once.

## 7. Data model (v1.0)

Four content entities + two support entities. Storage: Notion or Airtable (Convergent uses Notion) or YAML/JSON in a git repo — decision deferred to build; the schema is CMS-agnostic.

```
Domain      { id, name, slug, description, color, order }
Gap         { id, number (stable int), slug, title, description (rich),
              domain (1), rank (0–5 editorial urgency), horizon (short|mid|long),
              gap_type (funding|policy|tooling|institutional|knowledge|coordination),
              persistence_cause (archetype tag, 1..n),
              risk_tags [..], stack_layer [0..n], status (open|narrowing|filled|retired),
              interventions [1..n],
              watch { event, date } (optional — the live process this gap hangs on:
                     bill stage, consultation close, break clause, commencement date),
              provenance { added, last_verified, review_by (derived from the cadence
                     standard in §8), contributor, sources [..] } }
Intervention{ id, slug, title, description, gaps [1..2],
              instrument (fund|statute|SI/commencement|new-institution|dataset|
                          product|litigation|standard|pilot|campaign),
              ticket_estimate (£ band), plausible_actors [..], resources [0..n] }
Resource    { id, title, url, resource_type
              (org|funder|report|bill|consultation|dataset|pilot|tool|person|news),
              date }
-- separate app/section, coarser taxonomy (~6 topics), later phase:
Org         { name, slug, tagline, topic, website, founded, location, mission,
              focus_areas [..], funders [..], open_roles?, publications [..] }
Person      (only as Resource type in v1; no profiles)
```

Policy-gap entries additionally carry (from the policy-lens dossier): responsible department, bill/SI status, consultation or Law Commission stage with deadlines, select-committee interest, commencement/enforcement status, devolved applicability (England-only vs UK-wide), named champions.

**Ranking:** editorial 0–5 urgency per gap, curated by the editorial owner, default sort `?sort=rank`, ties broken by number — exactly Convergent's mechanics. Publish the ranking criteria (importance × tractability × neglectedness × window-closing) but keep the score itself a curated judgement. No computed rank in v1.0.

## 8. Methodology and governance (the map's credibility)

Where Convergent under-specified, we specify from day one:

- **Editorial ownership:** a named editor + a small (3–5 person) editorial board spanning political temperaments; published acceptance criteria; contributor credits on every entry.
- **Provenance:** every entry stamped with source, contributor, date-added, last-verified, review-by. Bill statuses and org statuses decay in months — the review-by field is load-bearing.
- **Review cadence standard (time-sensitivity tiering).** *Standing rule: time-sensitive information and short-term actions are revisited on a faster cycle than mid- and long-term material.* The horizon tag drives a mandatory cadence:
  - **`short (0–2y)` gaps, and any entry citing a live process** (a bill before Parliament, an open consultation, a commencement date, a contract break clause, a funding-round deadline): **quarterly review**, `review_by` ≤ 90 days, and the live process logged with its calendar date in `WATCHLIST.md`.
  - **`mid (2–7y)`:** six-monthly review.
  - **`long (7y+)`:** annual review, plus an event-triggered re-check whenever a related watchlist item lands.
  - **Landscape text and statistics:** re-verify before any external reuse, regardless of tier.
  - **Staleness is shown, not hidden:** an entry past its `review_by` date gets a visible "stale — under review" badge on the site. Honest decay handling is part of the map's credibility, and it converts the maintenance burden into a public commitment.
  - This standard applies to the scoping corpus itself: the 18 dossiers were sourced July 2026; their short-horizon claims should be treated as expiring ~October 2026 unless re-verified.
- **Sourcing:** desk research (this pass) → **30–50 practitioner interviews** to validate/kill/add gaps before launch (the Convergent lesson: the map's authority came from field conversations, not aggregation) → open contribution form post-launch, editorially gated.
- **Triangulation and anti-capture:** cross-check nominations against independent evidence (NAO, committee reports, statistics); cap self-nomination (an org proposing a gap it would itself fill gets flagged as interested-party); mechanism-agnostic descriptions (a gap is never "fund organisation X").
- **Lifecycle:** gaps can be `narrowing` or `filled` (with credit to who filled them) — a map that celebrates closures stays a reference rather than a grievance list.
- **Non-partisanship test:** every gap must be describable in one sentence a Labour, Conservative, Lib Dem and Reform reader would each accept as factually fair. The follow-through-deficit framing helps: "commence the law you passed" has no party.
- **Limitations text, loud:** "not comprehensive, not a ranked roadmap, v1.0 invites correction."

## 9. Product scope

**v1.0 (launchable):**
- Static site, whole dataset embedded as JSON, client-side everything (Convergent's architecture — proven at this scale, trivial hosting).
- Views: Gaps (default, sort by rank), Interventions, Resources, Domains (landing page per domain with intro + colour), and lens views (horizon, gap-type, archetype, stack-layer) driven by tags.
- Weighted fuzzy search across gap/intervention names, descriptions, tags; multi-select domain filter; all state in URL; grid/list toggle.
- Entry pages: `/gaps/{slug}`, `/interventions/{slug}`, `/domains/{slug}` with provenance footer.
- About + Methodology + Contribute (form → editorial queue) + downloadable dataset (JSON/CSV) from day one.
- Private-tag preview mechanism for sharing draft entries with reviewers pre-launch.

**v1.x:** org/ecosystem directory as a separate section (Convergent's split); API endpoint; per-domain RSS/changelog ("what changed this quarter" is the natural newsletter).
**v2:** explicit prioritisation layer (published scoring), capability-time re-scoring for AI entries, possibly a funder-matching flow.

**Stack recommendation:** Next.js on Vercel (matches your existing tooling from the VPN-tests project) or Astro (what gap-map.org itself uses; better fit for static-embedded-JSON). Content in Notion via export pipeline, or markdown/YAML in-repo to keep provenance in git. Decide at build time; nothing in this scope constrains it.

## 10. Build plan

| Phase | Work | Effort (order of magnitude) |
|---|---|---|
| **0. Decisions** | Name, editorial owner, hosting of the project (studio-hosted / new entity), CMS choice | days |
| **1. Curation pass** | Cut ~210 candidate gaps to ~100: merge duplicates across domains (e.g. Sovereign Tech Fund appears in four dossiers — that's one gap, multi-domain), apply the critique's boundary redraws (§4a), rewrite to house style, assign ranks/tags/archetypes, extract ~250 interventions and ~800 resources from the dossiers | 2–4 weeks of focused editorial work |
| **2. Validation interviews** | 30–50 conversations with practitioners per domain; kill/add/re-rank; recruit editorial board and first contributors from interviewees | 4–8 weeks elapsed, parallelisable |
| **3. Build** | Site + data pipeline + contribute flow (small: the hard part is content, not code) | 2–3 weeks |
| **4. Soft launch** | Private-tag review with interviewees and friendly funders; corrections pass | 2 weeks |
| **5. Launch** | Public v1.0 + launch essay making the follow-through-deficit argument (the essay is as important as the site — Convergent's blog post *was* the launch) | 1 week |
| **Ongoing** | Tiered review per the §8 cadence standard: quarterly sweep of short-horizon entries + `WATCHLIST.md` dates; six-monthly for mid-term; annual for long-term; contribution triage throughout | ~2–4 days/quarter |

## 11. Open questions (for you)

1. **Voice and framing.** The map is built and maintained by IP3 Studio and presented as an independent, evidence-first reference. Credibility depends on being read as neutral — so the map name-checks specific technologies only as candidate fills, rated by the same yardstick as everything else, and states where a fill carries residual trust assumptions.
2. **Name.** "UK Gap Map" is descriptive and available-looking; the launch essay concept ("the follow-through deficit") could also name the whole project.
3. **Curation depth for v1.0.** Ship all ~15 domains thinner, or launch with the 6–8 strongest dossiers and add domains quarterly? (Convergent shipped everything at "crude map" quality and said so; that's the recommended posture.)
4. **The interviews.** Who conducts them, and are they on-record? They double as community-building for the contributor base.
5. **Funding the map itself.** The dossiers repeatedly identify pooled funds that don't exist; the map is itself a small fundable public good (~£50–150k/year run properly, mostly editorial time). JRRT, Luminate, Nesta, and the new UK "abundance" funders (Coefficient Giving's Abundance & Growth Fund) all plausibly fund exactly this.

## 12. File map

```
uk-gap-map/
├── SCOPE.md                  ← this document
├── WATCHLIST.md              ← dated events the inventory hangs on; first stop of every quarterly review
├── reference-models.md       ← gap-map.org data model, CR methodology, Europe-2031 analysis
├── completeness-critique.md  ← adversarial review: missing domains, boundary redraws, taxonomy rulings
└── domains/
    ├── 01-civic-society.md         (12 gaps)
    ├── 02-open-source-public-goods.md (12)
    ├── 03-youth-mobilisation.md    (12)
    ├── 04-education-ai.md          (11)
    ├── 05-growth-stagnation.md     (12)
    ├── 06-debt.md                  (12)
    ├── 07-surveillance.md          (12)
    ├── 08-corruption-integrity.md  (12)
    ├── 09-parallel-institutions.md (11)
    ├── 10-portable-sovereignty.md  (12)
    ├── 11-privacy.md               (12)
    ├── 12-ai-crisis.md             (12)
    ├── 13-funding-gaps-lens.md     (12 — cross-cutting funding dossier)
    ├── 14-policy-gaps-lens.md      (12 — cross-cutting policy dossier)
    ├── 15-health-social-care.md    (11 — critic addition)
    ├── 16-justice-access.md        (12 — critic addition)
    ├── 17-local-state-capacity.md  (10 — critic addition)
    └── 18-national-resilience.md   (12 — critic addition)
```

Each dossier: landscape summary → 14–15 key actors → candidate gaps (what's missing / why it matters / what would fill it / horizon / sources) → funders → policy notes → sources consulted.
