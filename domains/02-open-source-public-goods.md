# Open source tools and public goods

## Landscape
The UK was an early leader: the 2012 Service Standard and Technology Code of Practice made government code "open by default", GDS's alphagov GitHub became a global reference, and OpenUK finds open source contributes 27% of UK digital GVA, with the UK the top OSS contributor in Europe. By mid-2026 policy and practice have diverged sharply. NHS England quietly deleted its open source policy pages (December 2025) and in May 2026 adopted a default-closed posture on its code over AI security concerns, prompting an open letter from 70+ signatories. data.gov.uk's own team admits over 25% of links are broken after "underinvestment since 2017"; GDS's canonical Registers programme was retired in 2021. There is no UK analogue of Germany's Sovereign Tech Fund (over €24.6m deployed to 60+ critical open source projects), and the EU dropped Next Generation Internet from Horizon Europe's 2025 work programme, closing the NLnet small-grant route. Counter-currents exist: the Software Sustainability Institute's £4.8m UKRI Research Software Maintenance Fund (2025) is the first of its kind; LocalGov Drupal's steward, Open Digital Cooperative, is profitably self-sustaining across ~60 councils; OpenSAFELY won £17m over seven years from Wellcome; DSIT's National Data Library completed discovery with £100m+ backing; UKRI contracted OpenUK (October 2025) to draft public-sector open source guidance; and GDS Local is consulting on an open source assurance process. Government money, however, flows to sovereign AI (a £500m equity fund) rather than the open infrastructure underneath it.

## Actors
- **OpenUK** (nonprofit industry body): Advocacy and research body for UK open technology; publishes State of Open reports (27% of digital GVA claim); contracted by UKRI in October 2025 to write public-sector open source guidance including a sovereign tech fund recommendation.
- **Government Digital Service (GDS, within DSIT)** (government body): Owns the Service Standard and Technology Code of Practice 'open by default' rules; GDS Local's 'Sourcing the Stack' (May 2026) is building the first cross-government open source assurance criteria.
- **Department for Science, Innovation and Technology (DSIT)** (government department): Owns the National Data Library, data.gov.uk reset, Software Security Code of Practice and commissioned OSS supply-chain research; currently funds sovereign AI, not open infrastructure.
- **Software Sustainability Institute (SSI)** (research institute/programme): Runs the £4.8m UKRI Research Software Maintenance Fund (13 projects in round 1, 2025; round 2 opened January 2026) — the UK's only dedicated software maintenance fund.
- **Open Digital Cooperative (LocalGov Drupal)** (cooperative): Steward of LocalGov Drupal, used by ~60 councils and 23 vendors; became self-sustaining on member subscriptions after ~£1m of DLUHC Local Digital Fund grants ended in 2023; councils save £30k-£90k per website rebuild.
- **Bennett Institute for Applied Data Science (University of Oxford)** (university institute): Builds OpenSAFELY and OpenPrescribing, open source NHS data infrastructure; long-running funding precarity eased by £17m from Wellcome (2025), illustrating dependence on philanthropy rather than NHS core budgets.
- **Open Data Institute (ODI)** (nonprofit): Founded 2012 by Berners-Lee and Shadbolt; data stewardship training, standards and policy work; fed evidence into the National Data Library discovery phase.
- **mySociety / SocietyWorks** (charity with trading subsidiary): Runs TheyWorkForYou, WhatDoTheyKnow and FixMyStreet — de facto national civic infrastructure funded by foundations plus commercial income, with no dedicated UK funding stream for such infrastructure.
- **Centre for Public Data** (nonprofit): Anna Powell-Smith's non-partisan data-policy body; leads the Open Address File UK campaign and has asked Ofcom to review Royal Mail's Postcode Address File licensing.
- **Society of Research Software Engineering** (professional body/charity): Professional association for the UK's research software engineers; the RSE career track the UK invented still lacks recurring maintenance funding.
- **National Cyber Security Centre (NCSC)** (government body): Publishes SBOM and supply-chain guidance and warns of active dependency-compromise attacks, but runs no inventory of or support scheme for the open source the state depends on.
- **Apperta Foundation** (community interest company): Clinician-led CIC promoting open platforms in health (steward of the OpenEyes EPR); still operating but small, and now swimming against NHS England's 2026 default-closed code posture.
- **UKRI / Innovate UK** (funder): Funds the Digital Research Infrastructure programme (host of the SSI maintenance fund) and is the administering body proposed for a UK open-source fund by both OpenUK and the UK Day One paper.
- **National Data Library (DSIT programme)** (government programme): £100m+ programme; completed discovery January 2026 with five kickstarter projects; absorbing data.gov.uk and shifting it from passive aggregation to curation; details due spring 2026.
- **Open Rights Group** (campaign group): Running a 'Demand UK Digital Sovereignty' campaign pushing government away from proprietary hyperscaler dependence toward open alternatives.

## Gaps
### G1. No UK Sovereign Tech Fund for maintaining critical open source infrastructure
- **Type:** funding | **Horizon:** short
- **What is missing:** Germany's Sovereign Tech Fund (Sovereign Tech Agency) has invested over €24.6m in 60+ critical open source components since 2022, and a €350m EU-level fund is proposed; the UK, whose software stacks are 90%+ OSS-dependent (Log4j hit the NHS), has no equivalent. Partial coverage: SSI's £4.8m Research Software Maintenance Fund covers research software only; OpenSSF's Alpha-Omega is US corporate philanthropy not UK-directed; corporate sponsorship is ad hoc. A costed blueprint exists — the UK Day One proposal (Milton, Osborne, Pickering, 2024) for a £12.5m/year UKRI-administered fund (£7.5m maintenance, £5m innovation) — and OpenUK's October 2025 recommendations to UKRI include a sovereign tech fund. Nothing has been announced as of mid-2026; the £500m Sovereign AI Fund is an equity venture fund, not commons maintenance.
- **Why it matters:** The UK state and economy free-ride on unpaid maintainers of components they cannot function without. One funded UK maintainer per critical dependency is cheap insurance against the next Log4j; Germany has proven the delivery model works at €15-20m/year.
- **What would fill it:** A 'UK Sovereign Tech Fund' inside DSIT or UKRI at £10-15m/year, issuing service contracts (not grants) to maintainers of dependencies critical to government and CNI, with a rapid security-response arm; adopt the Sovereign Tech Agency's published operating model and the UK Day One costing.
- **Sources:** https://www.sovereign.tech/programs/fund ; https://britishprogress.org/uk-day-one/a-uk-open-source-fund-to-support-software-innovati ; https://openuk.uk/theuksfutureleadershipinopensource/ ; https://eu-stf.openforumeurope.org/

### G2. No cross-government Open Source Programme Office to own the 'open by default' policy
- **Type:** institutional | **Horizon:** short
- **What is missing:** France, Germany (ZenDiS) and the European Commission run public-sector OSPOs; the UK — which wrote the open-by-default playbook — has none. Ownership is fragmented between GDS (Service Standard point on open code), the Technology Code of Practice and individual departments; nobody audits whether departments actually publish code, curates cross-government reuse, or owns licensing and stewardship questions. The cost of this vacuum showed when NHS England's open source policies silently lapsed after the NHSX merger and the pages were deleted in December 2025. OpenUK's UKRI-commissioned guidance (2025-26) is advisory and GDS Local's work is nascent; neither is an accountable institution.
- **Why it matters:** A policy without an owner evaporates, as the NHS just demonstrated. An OSPO converts fourteen years of aspiration into measured compliance, reuse savings, and a single door for maintainers, vendors and international peers to knock on.
- **What would fill it:** A cross-government OSPO in GDS/DSIT with a mandate to audit Service Standard compliance annually, publish a code-reuse catalogue, steward government-maintained projects, and represent the UK in international public-code networks; modelled on the EC OSPO and ZenDiS.
- **Sources:** https://www.digitalhealth.net/2025/12/nhs-england-quietly-removes-open-source-policy-web-pages/ ; https://interoperable-europe.ec.europa.eu/collection/ec-ospo ; https://www.computerweekly.com/news/366633932/OpenUK-works-with-UKRI-on-open-source-guidance-for-public-sector

### G3. No national assurance service giving public bodies confidence in open source products
- **Type:** tooling | **Horizon:** short
- **What is missing:** GDS Principal Technologist Phil Rumens stated in May 2026 that there is 'no formal or standardised process across government for evaluating, recommending, or providing confidence in open-source products'. Every council, trust and department repeats (or skips) its own due diligence, so risk-averse buyers default to proprietary suppliers who arrive pre-assured. GDS Local's 'Sourcing the Stack' is consulting on seven evaluation criteria (maturity, governance, security, sustainability, cost, operational fit, ethical AI) but is early-stage and unfunded as a service; Open Digital Cooperative assures only LocalGov Drupal.
- **Why it matters:** LocalGov Drupal shows the prize — 30-50% cost reductions and £30k-£90k saved per council website — but only one product ever crossed the assurance barrier. A kite-mark service would unlock those savings across the whole local government and NHS software stack.
- **What would fill it:** Fund GDS Local's assurance process into a standing national service: kite-marked evaluations, pooled security reviews, a public catalogue of assured open source products with signposting to commercial support vendors — the equivalent of Germany's openCode platform.
- **Sources:** https://technology.blog.gov.uk/2026/05/27/adopting-open-source-in-local-government/ ; https://www.ukauthority.com/articles/localgov-drupal-becomes-open-digital-cooperative/

### G4. No open national address file: PAF remains a proprietary Royal Mail asset
- **Type:** policy | **Horizon:** mid
- **What is missing:** The Postcode Address File (32.1m delivery addresses) went private with Royal Mail in 2013; in 2025 Royal Mail successfully defended its database rights in court, and anyone needing address data pays layered licence fees under complex IP restrictions. Partial substitutes are inadequate: ONS Postcode Directory gives postcode centroids not addresses; Ordnance Survey opened UPRNs (identifiers) in 2020 but not the addresses themselves; OpenStreetMap coverage is incomplete. The ODI-incubated Open Addresses project died in 2015 for lack of legal access. The Centre for Public Data's Open Address File UK campaign and a House of Lords proposal have put the issue back on the agenda, including a request that Ofcom review PAF licensing.
- **Why it matters:** Address lookup is a tax on every delivery firm, emergency service, council and startup in the country. Nations with open address files (Denmark, France, Netherlands) documented net economic gains; the UK re-buys its own geography millions of times over.
- **What would fill it:** Government acquisition or mandated open licensing of PAF (Ofcom review of PAF terms as the first step), or an openly licensed national address register built from councils' AddressBase source data and published through the National Data Library.
- **Sources:** https://www.centreforpublicdata.org/postal-address-data ; https://www.twobirds.com/en/insights/2025/uk/addressing-database-rights-royal-mail-successfully-protects-rights-in-its-postcode-address-file ; https://www.owenboswarva.com/blog/post-addr4.htm

### G5. No statutory duty or function for maintaining canonical government reference data
- **Type:** institutional | **Horizon:** mid
- **What is missing:** GDS's Registers programme — 51 canonical, API-accessible datasets (countries, local authorities, schools) — was retired in March 2021 with no successor function. The consequences are now official: data.gov.uk's own team admits over 25% of links lead to error pages, datasets sit unupdated for years, and publishers include organisations that no longer exist, after 'underinvestment since 2017'. The March 2026 data.gov.uk reset (curation, Data Manual v1, public roadmap) treats symptoms, but no department is under any duty to maintain reference data that others build on, and the National Data Library's published plans do not yet include ownership obligations.
- **Why it matters:** Every service, journalist and AI system built on rotting reference data inherits its errors. The government is now spending £100m+ on a National Data Library whose raw inputs decay by default because maintenance is nobody's job.
- **What would fill it:** A registers function inside the National Data Library: named accountable data owners per canonical dataset, update SLAs and public quality dashboards, backed by a Cabinet Office functional standard or statutory duty to maintain designated reference datasets.
- **Sources:** https://dataingovernment.blog.gov.uk/2026/03/25/whats-changing-on-data-gov-uk-and-why/ ; https://www.registers.service.gov.uk/ ; https://www.gov.uk/government/publications/national-data-library-progress-update-january-2026/national-data-library-progress-update-january-2026

### G6. No UK small-grants vehicle for public-interest internet technology (NGI analogue)
- **Type:** funding | **Horizon:** short
- **What is missing:** The EU's Next Generation Internet initiative distributed ~€140m to 1,200+ projects in small, low-bureaucracy cascade grants (largely via NLnet) for privacy tech, open protocols and digital commons — then the Commission dropped NGI from the Horizon Europe 2025 work programme. UK developers had already lost easy access post-Brexit, and no domestic substitute exists at the €5k-€50k grant size where most independent maintainers and public-interest tools live. UK civil-society funders explicitly treat technology as unfundable infrastructure (Careful Industries, December 2025), and Nesta/National Lottery digital funds have closed. Careful Industries has floated a 'Civic Technology Fund' concept; nobody has built it.
- **Why it matters:** Small fast grants are the proven mechanism that produced much of Europe's privacy and protocol innovation. With both the EU spigot and UK philanthropy closed, an entire tier of public-interest tooling now has no funder in the UK at all.
- **What would fill it:** A pooled DSIT-philanthropy fund making £10k-£75k grants with NLnet-style lightweight process, targeting privacy-enhancing tech, open protocols, accessibility and digital commons; could be hosted by an existing intermediary (e.g. ODI or Nesta) to avoid new-institution overhead.
- **Sources:** https://fsfe.org/news/2024/news-20240719-01.en.html ; https://edri.org/our-work/european-commission-cuts-funding-support-for-free-software-projects/ ; https://www.careful.industries/blog/2025-12-could-2026-be-the-year-of-public-interest-technology

### G7. Research software maintenance funding is a one-off pilot, not a recurring budget line
- **Type:** funding | **Horizon:** short
- **What is missing:** The SSI's Research Software Maintenance Fund — £4.8m from UKRI's Digital Research Infrastructure programme, first round 2025 — is the UK's first dedicated maintenance fund and proves demand: 13 projects funded (four up to £500k/two years, nine up to £150k/one year), with round 2 capped at £150k for 12 months. But it is a fixed-term pilot against a research software estate of thousands of packages underpinning UK science; when the DRI spending period ends there is no recurring UKRI line for keeping software alive, and EPSRC RSE fellowships have been sporadic. Grant incentives still reward novelty over stewardship, pushing the RSE workforce (organised by the Society of Research Software Engineering) onto short contracts.
- **Why it matters:** The UK invented the RSE profession, yet the software multiplying every UKRI research pound decays on volunteer time. Maintenance funding at roughly 1% of what is spent producing software would protect the reproducibility and reuse of the rest.
- **What would fill it:** A permanent maintenance stream within UKRI's Digital Research Infrastructure programme (analogous to the US NSF's POSE programme or Germany's DFG research-software line), plus block funding for institutional RSE teams, converting the RSMF pilot into standing infrastructure.
- **Sources:** https://www.software.ac.uk/programmes/research-software-maintenance-fund ; https://www.ukri.org/opportunity/ssi-research-software-maintenance-fund-round-two/ ; https://www.software.ac.uk/news/ukri-awards-software-sustainability-institute-ps48m-strengthen-research-software-maintenance

### G8. Charities and civil society are locked out of government platform infrastructure
- **Type:** institutional | **Horizon:** short
- **What is missing:** GOV.UK Notify — the shared notifications platform serving 1,500+ public services — explicitly excludes charities, community pharmacies, hospices, housing associations and universities, and no UK body provides equivalent shared digital infrastructure to civil society. Charities re-buy messaging, forms and payments at retail SaaS prices with donated funds. Notify's code is open source, so the technical barrier is trivial; the barrier is institutional (data-processing agreements limited to public bodies) and the absence of any chartered provider. mySociety/SocietyWorks and small intermediaries like Superhighways help at the margins; US models (e.g. philanthropically backed civic tech infrastructure) have no UK counterpart.
- **Why it matters:** The voluntary sector delivers public services under contract yet pays commercial rates for infrastructure the state already built and open-sourced. Extending access is one of the cheapest transfers to civil society available — the software is written and running.
- **What would fill it:** Either extend Government-as-a-Platform eligibility to regulated charities on a cost-recovery basis, or charter a 'civic infrastructure service' — a nonprofit operator running the open-sourced Notify/Forms codebases for civil society, seed-funded by trusts and subscription-sustained like Open Digital Cooperative.
- **Sources:** https://www.notifications.service.gov.uk/features/who-can-use-notify ; https://superhighways.org.uk/latest/funding-your-tech-and-digital/ ; https://www.mysociety.org/about/funding/

### G9. No institutional home for open code in the NHS — and an active retreat from it
- **Type:** institutional | **Horizon:** mid
- **What is missing:** NHS England's open source policies lapsed when NHSX was merged away in 2021; the policy pages were quietly deleted in December 2025, and in May 2026 NHSE adopted a default-closed posture on its source code citing AI-related security risks — drawing an open letter (74 signatories, May 2026) asking it to keep code open. Meanwhile the EPR rollout (95% of trusts by March 2026) locks in proprietary vendors with no open-code or open-API conditions. Partial coverage: the Apperta Foundation (clinician-led CIC, steward of OpenEyes) is small and industry-supported; OpenSAFELY/OpenPrescribing are funded by Wellcome (£17m over seven years) and grants — philanthropy substituting for an NHS core responsibility.
- **Why it matters:** Health tech is where UK open source once led (OpenSAFELY ran national COVID research on open code) and where lock-in costs most. A closed-by-default NHS forfeits scrutiny, reuse across 200+ trusts, and negotiating power against EPR vendors.
- **What would fill it:** A reinstated NHS open source policy with a named accountable owner; open-code and open-API conditions in EPR and framework procurements; and a modest NHS stewardship fund maintaining clinically critical open software, contracted through bodies like Apperta or the Bennett Institute.
- **Sources:** https://www.digitalhealth.net/2025/12/nhs-england-quietly-removes-open-source-policy-web-pages/ ; https://www.digitalhealth.net/2026/05/nhse-to-move-away-from-open-source-over-ai-security-concerns/ ; https://www.bennett.ox.ac.uk/blog/2025/02/some-reflections-about-funding/

### G10. No census of the critical open source dependencies underpinning UK government and CNI
- **Type:** knowledge | **Horizon:** short
- **What is missing:** DSIT's commissioned research (2025) tells businesses to keep SBOMs, and the NCSC warns of active dependency-compromise attacks and urges organisations to check their dependencies — but the state has never aggregated this picture. There is no inventory of which open source components government services and critical national infrastructure actually depend on, who maintains them, or how healthy they are (contrast the Harvard/Linux Foundation 'Census II' of most-used OSS, and US federal SBOM aggregation under EO 14028). Without this evidence base, neither NCSC prioritisation nor any future UK maintenance fund can be targeted, and ministers can honestly say they don't know what the UK runs on.
- **Why it matters:** You cannot defend or fund what you haven't mapped. A census converts open source risk from anecdote (Log4j surprised everyone) into a ranked, actionable list — and is the analytic precondition for a UK Sovereign Tech Fund.
- **What would fill it:** An NCSC/DSIT-commissioned recurring census aggregating SBOMs across departments and CNI operators, published with criticality and maintainer-health rankings; deliverable by an academic-industry consortium in under a year using existing SCA tooling.
- **Sources:** https://www.gov.uk/government/publications/open-source-software-best-practice-supply-chain-risk-management ; https://www.ncsc.gov.uk/blogs/software-supply-chain-attacks-check-your-dependencies ; https://www.ncsc.gov.uk/blog-post/sboms-and-the-importance-of-inventory

### G11. Open source procurement policy exists on paper but has no weighting, audit or skills behind it
- **Type:** policy | **Horizon:** short
- **What is missing:** The Technology Code of Practice ('be open and use open source') and the Digital, Data and Technology Playbook have required consideration of open source since 2012, but there is no evaluation weighting, no requirement to record the comparison, and no reporting on compliance. The Procurement Act 2023 and G-Cloud 15 (the first 'open framework') modernised process without any open source provisions. OpenUK's UKRI-commissioned recommendations (October 2025) identify the fixes: expand the procurement definition of open source beyond licence to include documentation, contributor support and community development, and train procurement officers to assess it. Result today: proprietary renewals roll over by default, and OSS SMEs (e.g. the 23 LocalGov Drupal vendors) get no credit for openness or exit-cost savings.
- **Why it matters:** Procurement is where open source policy dies. Without recorded comparisons and openness weighting, fourteen years of 'consider open source' has produced almost no measurable shift in the £20bn+ the public sector spends on technology.
- **What would fill it:** A Procurement Policy Note under the Procurement Act 2023 making open source consideration auditable — recorded total-cost-of-ownership comparison including exit costs, an openness criterion in evaluation — plus commercial-function training, implementing OpenUK's recommendations to UKRI.
- **Sources:** https://openuk.uk/theuksfutureleadershipinopensource/ ; https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/uk-government-prescribes-open-source-public-procurement ; https://thorntonandlowe.com/g-cloud-15-procurement-framework/

### G12. No UK support scheme for open source maintainers facing EU Cyber Resilience Act obligations
- **Type:** coordination | **Horizon:** mid
- **What is missing:** The EU Cyber Resilience Act creates obligations for manufacturers and a novel 'open-source software steward' category, phasing in through 2026-27; UK-based foundations, SMEs and maintainers whose software reaches the EU market must comply regardless of Brexit. The UK's own Cyber Security and Resilience Bill (report stage June 2026) focuses on NIS-regulated sectors and makes no equivalent provision for open source stewardship, and DSIT's Software Security Code of Practice (2025) is voluntary and generic. EU communities get guidance through OSS foundations' CRA workstreams (Linux Foundation Europe, Eclipse), but there is no UK-facing help, and small UK maintainers are least equipped to interpret extraterritorial product law.
- **Why it matters:** The UK hosts Europe's largest open source contributor base; if CRA compliance is left to individuals, projects will geofence the EU, relocate governance, or abandon maintenance — eroding exactly the sovereign capability other gaps aim to build.
- **What would fill it:** A DSIT/NCSC CRA-readiness programme: plain-English guidance for UK maintainers and stewards, small tooling grants for compliance artefacts (SBOMs, security attestations), and a UK 'steward' concept in future secondary legislation to keep UK-EU interoperability.
- **Sources:** https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act ; https://bills.parliament.uk/bills/4035 ; https://commonslibrary.parliament.uk/research-briefings/cbp-10442/

## Funders
- UKRI (Innovate UK, EPSRC and the Digital Research Infrastructure programme — host of the SSI maintenance fund and proposed administrator of a UK open-source fund)
- DSIT (National Data Library £100m+, £500m Sovereign AI Fund, digital centre of government budgets — the natural home for a sovereign tech fund)
- Wellcome Trust (£17m to OpenSAFELY 2025; £600m with government for the Health Data Research Service)
- NHS England (platform and EPR budgets; currently funds almost no open source stewardship)
- MHCLG (former DLUHC Local Digital Fund, ~£1m to LocalGov Drupal, now closed — an obvious vehicle to revive)
- Nesta (innovation foundation; past digital/civic tech funder)
- The National Lottery Community Fund (ran a Digital Fund, now closed)
- Charitable trusts funding civic tech at the margins (Joseph Rowntree trusts, Paul Hamlyn, Worshipful Company of Information Technologists small grants)
- US/international philanthropy currently substituting for UK funders (Omidyar Network, Open Society, Sloan/Ford digital infrastructure funds)
- Corporate open source money (GitHub Sponsors, Google/Microsoft OSS programmes, Linux Foundation/OpenSSF Alpha-Omega)
- EU Horizon Europe (UK associated; NGI cascade-grant route via NLnet cut from 2025)
- Member subscriptions (the Open Digital Cooperative council/supplier model — proven self-sustaining route once seed-funded)

## Policy notes
'Open by default' has been UK policy since 2012 (Service Standard; Technology Code of Practice point 3) but has no institutional owner, no compliance measurement and no funding arm — a policy without a programme. NHS England's 2025-26 retreat to default-closed code shows how easily it evaporates. The Procurement Act 2023 and G-Cloud 15 modernised process but created no duty to weigh open source. The Cyber Security and Resilience Bill (report stage June 2026) is, unlike the EU Cyber Resilience Act, silent on open source stewardship. DSIT's activity is analytic — commissioned OSS supply-chain research, a voluntary Software Security Code of Practice — not financial. The National Data Library (further details due spring 2026) is the main live data policy and the natural host for register reform and open address data. The 2026 Digital and Technologies Sector Plan update funds sovereign AI equity, not open digital infrastructure; OpenUK's UKRI-commissioned guidance is the nearest thing to an emerging strategy.

## Sources consulted
- https://www.sovereign.tech/programs/fund
- https://eu-stf.openforumeurope.org/
- https://britishprogress.org/uk-day-one/a-uk-open-source-fund-to-support-software-innovati
- https://fsfe.org/news/2024/news-20240719-01.en.html
- https://edri.org/our-work/european-commission-cuts-funding-support-for-free-software-projects/
- https://www.software.ac.uk/programmes/research-software-maintenance-fund
- https://www.software.ac.uk/news/ukri-awards-software-sustainability-institute-ps48m-strengthen-research-software-maintenance
- https://www.ukri.org/opportunity/ssi-research-software-maintenance-fund-round-two/
- https://www.gov.uk/government/publications/national-data-library-progress-update-january-2026/national-data-library-progress-update-january-2026
- https://www.theregister.com/2026/04/08/national_data_library_plan/
- https://dataingovernment.blog.gov.uk/2026/03/25/whats-changing-on-data-gov-uk-and-why/
- https://technology.blog.gov.uk/2026/05/27/adopting-open-source-in-local-government/
- https://www.registers.service.gov.uk/
- https://dataingovernment.blog.gov.uk/2021/02/18/new-guidance-for-publishing-data/
- https://www.centreforpublicdata.org/postal-address-data
- https://www.twobirds.com/en/insights/2025/uk/addressing-database-rights-royal-mail-successfully-protects-rights-in-its-postcode-address-file
- https://www.owenboswarva.com/blog/post-addr4.htm
- https://www.ukauthority.com/articles/localgov-drupal-becomes-open-digital-cooperative/
- https://opendigital.coop/
- https://openuk.uk/stateofopen/
- https://openuk.uk/theuksfutureleadershipinopensource/
- https://www.computerweekly.com/news/366633932/OpenUK-works-with-UKRI-on-open-source-guidance-for-public-sector
- https://www.gov.uk/government/publications/open-source-software-best-practice-supply-chain-risk-management
- https://www.securityweek.com/uk-government-report-calls-for-stronger-open-source-supply-chain-security-practices/
- https://www.ncsc.gov.uk/blog-post/sboms-and-the-importance-of-inventory
- https://www.ncsc.gov.uk/blogs/software-supply-chain-attacks-check-your-dependencies
- https://www.digitalhealth.net/2025/12/nhs-england-quietly-removes-open-source-policy-web-pages/
- https://www.digitalhealth.net/2026/05/nhse-to-move-away-from-open-source-over-ai-security-concerns/
- https://www.bennett.ox.ac.uk/blog/2025/02/some-reflections-about-funding/
- https://www.bennett.ox.ac.uk/blog/2025/02/game-changing-new-funding-from-wellcome-for-opensafely-and-mental-health-data/
- https://www.notifications.service.gov.uk/features/who-can-use-notify
- https://www.mysociety.org/about/funding/
- https://www.careful.industries/blog/2025-12-could-2026-be-the-year-of-public-interest-technology
- https://bills.parliament.uk/bills/4035
- https://commonslibrary.parliament.uk/research-briefings/cbp-10442/
- https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act
- https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/uk-government-prescribes-open-source-public-procurement
- https://thorntonandlowe.com/g-cloud-15-procurement-framework/
- https://www.gov.uk/government/publications/digital-and-technologies-sector-plan-year-one-update/digital-and-technologies-sector-plan-year-one-update
- https://interoperable-europe.ec.europa.eu/collection/ec-ospo
- https://www.openrightsgroup.org/campaign/demand-uk-digital-sovereignty/
