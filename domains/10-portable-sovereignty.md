# Portable sovereignty stack (personal and community digital autonomy: local AI, E2EE comms, personal data stores, co-op governance tooling, community economy, private collaboration)

## Landscape
The UK has strong ingredients but no assembled stack. Intelligence: open-weight models (Llama, Mistral, Qwen families) run adequately on consumer hardware, and public compute has grown (Isambard-AI, the AI Research Resource, a £500m Sovereign AI Unit opened April 2026) — but access routes exclude community groups and no UK open-weight model yet exists. Communications: Signal/WhatsApp dominate; Matrix — a UK-originated protocol powering France's and Germany's sovereign messengers — is production-grade but has negligible UK public-sector uptake and a chronically underfunded foundation; Waku is honest-to-goodness pre-production (public testnet targeted 2026, mainnet 2027). Storage: Mydex personal data stores work at pilot scale in Scotland; Solid has stalled; DUAA 2025 smart-data powers (in force August 2025) remain unused beyond open banking. Governance: Loomio/Decidim are usable today, but co-op registration is paper-era; the Law Commission's co-op law report lands 2026, and its 2024 DAO scoping paper's recommendations sit unactioned. Economy: self-custody wallets are lawful and usable; the FCA cryptoasset regime (regulations made February 2026, live October 2027, stablecoin gateway September 2026) is built for capitalised issuers; paper town pounds are dead (Lewes Pound last used 2025) and mutual credit sits in a regulatory grey zone. Coordination: CryptPad/Nextcloud work now, but UK ethical hosting (Webarchitects, Autonomic) is micro-scale. Overarching constraints: OSA duties drove ~300 small forums offline in March 2025, Ofcom's May 2026 technology-notice guidance keeps E2EE-scanning powers live, and secret IPA notices already stripped UK users of Apple's Advanced Data Protection.

## Actors
- **Element** (company): UK-founded Matrix vendor supplying sovereign messengers to 30+ governments (France, Germany, Belgium) — yet with almost no UK public-sector deployment.
- **Matrix.org Foundation** (nonprofit / open protocol steward): UK-originated steward of the Matrix E2EE protocol; chronically underfunded relative to the governments that depend on it (DINUM became first government member, Oct 2025).
- **Open Rights Group** (charity): Leading UK digital-rights campaigner on the Online Safety Act, Investigatory Powers Act and digital ID; convenes the small-services OSA response.
- **Privacy International** (charity): Litigating the secrecy of IPA technical capability notices before the Investigatory Powers Tribunal (heard 2026, alongside the Apple/ADP saga).
- **Mydex CIC** (community interest company): Edinburgh-based personal data store operator; longest-running UK PDS with Scottish Government contracts — proof the storage layer works at pilot scale.
- **Open Data Institute** (nonprofit): Research and stewardship on data institutions/data trusts; natural convener for smart-data and PDS interoperability standards.
- **Webarchitects Co-operative** (co-operative): Sheffield multi-stakeholder co-op providing ethical, green, open-source hosting (Nextcloud etc.) — one of very few UK public-interest hosts.
- **Autonomic Co-operative** (co-operative): Worker co-op that founded Co-op Cloud, a deployment platform enabling small hosts to offer federated community services.
- **CoTech (Cooperative Technologists)** (network): Network of ~40 UK tech co-ops; has discussed shared digital infrastructure but lacks the funding to build it.
- **Co-operatives UK** (federation / trade body): Represents the UK co-op sector; driving the Law Commission review of co-operative and community benefit society law (report due 2026).
- **Mutual Credit Services** (company): Stroud-based developer of mutual-credit 'trade clubs' and local clearing systems — the main serious UK attempt at the community-economy layer post-town-pounds.
- **Timebanking UK** (charity): National support body for timebanks; the surviving mass-participation form of UK community exchange.
- **OpenUK** (nonprofit / advocacy): Open-source industry advocacy; documented chronic OSS underfunding as a sovereignty risk and pushes for a UK Sovereign Tech Fund.
- **DSIT Sovereign AI Unit / AI Research Resource** (government body / programme): £500m sovereign AI investment unit (opened April 2026) plus national compute (Isambard-AI, AIRR) — allocated to research, startups and public sector, not communities.
- **Institute of Free Technology (Waku, Codex, Nomos)** (project): Building Waku messaging, Codex storage and Nomos chain; explicitly civil-society-framed but pre-production — public testnet targeted 2026, mainnet 2027.

## Gaps
### G1. No UK Sovereign Tech Fund paying for maintenance of critical open-source infrastructure
- **Type:** funding | **Horizon:** short (0-2y)
- **What is missing:** Germany's Sovereign Tech Agency has funded maintenance of critical open-source components since 2022 and an EU equivalent is proposed; the UK has nothing. No DSIT or UKRI stream pays maintainers of the open components the sovereignty stack depends on (Matrix server implementations, cryptographic libraries, local-first and inference tooling). UK Day One / Centre for British Progress published a costed £12.5m/yr proposal; OpenUK documents OSS underfunding as a strategic sovereignty risk. The £500m Sovereign AI Unit invests venture-style in companies, not maintenance. The Matrix.org Foundation — steward of a UK-origin protocol run as critical national infrastructure abroad — has publicly struggled to fund core development.
- **Why it matters:** Every other layer of the stack assumes maintained open infrastructure. Maintenance is a public good markets and grant funders both skip; Germany proved a small agency can buy it directly. The UK free-rides on foreign-funded code while exporting its own maintainers' labour unpaid.
- **What would fill it:** A DSIT-sponsored, UKRI-administered UK Sovereign Tech Fund (~£12.5m/yr initially) issuing maintenance contracts (not competitive grants) for critical open-source components, guided by a published criticality assessment of UK digital dependencies.
- **Sources:** https://britishprogress.org/uk-day-one/a-uk-open-source-fund-to-support-software-innovati ; https://www.sovereign.tech/programs/fund ; https://openuk.uk/wp-content/uploads/2025/07/Chronic-underfunding-of-open-source-software-poses-strategic-risk-to-Europes-digital-sovereignty-Tech.eu_.pdf ; https://www.theregister.com/2026/02/09/matrix_element_secure_chat/

### G2. No compliance mutual for small community-run online services under the Online Safety Act
- **Type:** institutional | **Horizon:** short (0-2y)
- **What is missing:** When OSA illegal-content duties began (March 2025), roughly 300 small volunteer-run forums exited or migrated to Big Tech platforms; at least 22 confirmed closures per tech lawyer Neil Brown's tracker; LFGSS/Microcosm shut and only partially returned. Ofcom offers a small-services hub and revamped compliance guide, but every volunteer admin — including operators of Matrix homeservers and Fediverse instances, who are in scope — must individually produce risk assessments with no shared legal defence, insurance product, or template compliance stack. Open Rights Group campaigns on the issue but provides no operational compliance service. A December 2025 Westminster Hall debate on repeal aired the burden without resolution; the categorisation register lands July 2026.
- **Why it matters:** Community self-hosting is the entry point to the whole sovereignty stack. If running a forum or homeserver is legally hazardous for volunteers, UK online community life centralises onto US platforms by default — the opposite of the Act's intent and of digital sovereignty.
- **What would fill it:** A compliance co-operative ('OSA mutual') offering model risk assessments, shared moderation tooling, a legal helpline and group insurance for community services — paired with a statutory proportionality carve-out for low-risk community services at the next OSA review.
- **Sources:** https://www.lfgss.com/conversations/401475/ ; https://www.parallelparliament.co.uk/debate/2025-12-15/commons/westminster-hall/online-safety-act-2023-repeal ; https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/helping-small-services-navigate-the-online-safety-act ; https://decoded.legal/blog/2025/03/it-is-time-to-make-the-online-safety-act-2023-fit-for-purpose/

### G3. No statutory protection or transparency mechanism for end-to-end encryption
- **Type:** policy | **Horizon:** short (0-2y)
- **What is missing:** OSA s.121 lets Ofcom mandate 'accredited technology' to scan private messaging; Ofcom finalised its Technology Notices guidance in May 2026, and enforcement is deferred only by a ministerial 'technical feasibility' assurance with no legal force. Separately, IPA technical capability notices are secret: Apple withdrew Advanced Data Protection from UK users (Feb 2025), the IPT dismissed Apple's appeal after the Home Office narrowed its order to UK users only, and Privacy International's secrecy challenge was heard in 2026. There is no statutory transparency reporting (even aggregate counts) for TCNs, and no dedicated litigation/defence fund — ORG, PI and Big Brother Watch cover encryption from general budgets.
- **Why it matters:** Every layer of the stack rests on lawful, durable E2EE. The current regime is an uncertainty tax: providers withdraw features (ADP), builders cannot promise UK users lasting security, and secrecy prevents Parliament or the market from weighing the trade-offs.
- **What would fill it:** A statutory amendment protecting E2EE from scanning mandates; annual aggregate transparency reporting on IPA notices; and a philanthropic UK Encryption Defence Fund financing interventions and representation for small providers facing notices.
- **Sources:** https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/consultation-technology-notices ; https://www.computerweekly.com/news/366632561/Apple-and-Home-Office-agree-to-drop-legal-claim-over-encryption-backdoor ; https://privacyinternational.org/news-analysis/5624/update-our-case-against-uk-governments-secret-surveillance-orders-be-heard-2026 ; https://proton.me/blog/online-safety-act

### G4. No UK public-sector or civic deployment of sovereign messaging (a UK 'Tchap')
- **Type:** coordination | **Horizon:** mid (2-7y)
- **What is missing:** France (Tchap/DINUM, now a Matrix.org Foundation member), Germany (BwMessenger), Belgium and Sweden run Matrix-based sovereign messengers; over 25 countries deploy Matrix. UK representatives attended the 2025 Matrix Conference, but there is no UK procurement, no Crown Commercial Service framework, and government business still runs over WhatsApp — criticised by the Covid-19 Inquiry. Element, the leading vendor, is a UK company earning almost entirely abroad. Nothing offers councils, unions, co-ops or mutual-aid networks affordable managed homeservers.
- **Why it matters:** The UK invented the protocol its allies use for sovereign communications yet buys none of it, exporting the industrial benefit and leaving its own public and civic sectors dependent on US platforms subject to foreign legal process.
- **What would fill it:** A GDS/CCS pilot of a Matrix-based government messenger; UK government membership of the Matrix.org Foundation; and a subsidised managed-homeserver service for civil-society organisations.
- **Sources:** https://www.theregister.com/2026/02/09/matrix_element_secure_chat/ ; https://matrix.org/blog/2025/10/dinum/ ; https://www.computerweekly.com/news/366633894/European-governments-opt-for-open-source-alternatives-to-Big-Tech-encrypted-communications

### G5. Smart-data powers with no scheme: personal data stores stuck at pilot scale
- **Type:** policy | **Horizon:** mid (2-7y)
- **What is missing:** The Data (Use and Access) Act 2025's smart data provisions came into force in August 2025, but no scheme beyond open banking has been designated. Mydex CIC runs personal data stores under Scottish Government contracts; Solid/Inrupt has stalled internationally; the ODI researches data institutions. What is missing is the secondary legislation designating the first non-finance smart data scheme plus an interoperability standard letting certified PDS providers receive and share citizens' data with public services — without which the storage-and-memory layer cannot leave pilot purgatory.
- **Why it matters:** Portability rights without operating schemes are dead letters. One working scheme routed through user-held stores would flip the default from institutional data hoarding to citizen custody, and create a market for UK PDS providers that fifteen years of pilots have failed to create.
- **What would fill it:** DSIT designating a first non-finance smart data scheme (e.g. energy or social-care records) implemented via certified personal data stores, with an open interoperability standard co-developed by ODI, Mydex-type providers and the ICO.
- **Sources:** https://www.kennedyslaw.com/en/thought-leadership/article/2026/the-data-use-and-access-act-2025-commencement-dates-and-planned-guidance-for-2026/ ; https://mydex.org/ ; https://en.wikipedia.org/wiki/Data_(Use_and_Access)_Act_2025

### G6. No community access tier for public compute and open-weight AI
- **Type:** funding | **Horizon:** mid (2-7y)
- **What is missing:** AIRR/Isambard-AI allocate compute via structured calls favouring researchers, startups and the public sector; the £500m Sovereign AI Unit (opened April 2026) makes venture investments. No programme funds charities, community organisations or local newsrooms to fine-tune or run open-weight models for local services (advice triage, translation, casework), and no public inference endpoint exists for accredited civil-society organisations. Running Llama/Mistral-class models locally is technically feasible on consumer hardware today, but the skills, hosting and support layer for communities is absent; Nesta and CAST offer advice, not infrastructure.
- **Why it matters:** Without a community tier, 'sovereign AI' means sovereign for the state and investors only. Civil society will rent US frontier APIs instead, sending sensitive community data offshore and forfeiting the privacy advantage that local open-weight inference uniquely offers.
- **What would fill it:** A 'community compute' allocation within AIRR plus a grant programme providing hosted open-weight inference, fine-tuning support and deployment assistance to accredited civil-society organisations.
- **Sources:** https://www.gov.uk/government/publications/ai-opportunities-action-plan-one-year-on/ai-opportunities-action-plan-one-year-on ; https://www.bristol.ac.uk/research/centres/bristol-supercomputing/articles/2026/isambard-ai-supercomputer-powers-500m-uk-sovereign-ai-fund.html ; https://www.publictechnology.net/2026/04/16/business-and-industry/governments-500m-sovereign-ai-venture-capital-unit-opens-doors-today-to-invest-in-uk-tech-firms/

### G7. Paper-era co-operative registration and no digital-first mutual legal form
- **Type:** policy | **Horizon:** mid (2-7y)
- **What is missing:** Registering a co-operative or community benefit society through the FCA remains slower and costlier than forming a company at Companies House, and the Mutuals Public Register is not API-accessible. The Law Commission's review of the Co-operative and Community Benefit Societies Act (consultation closed December 2024, report due 2026) proposes modernisation, and its July 2024 DAO scoping paper recommended reviewing the Companies Act to accommodate technology-mediated governance — with no government action since. Platform co-ops wanting digital-native governance (online voting, programmable membership records) shoehorn into unsuitable forms; Loomio and Decidim supply the software but the law does not recognise digitally-native operation.
- **Why it matters:** The governance layer of the stack is legal, not technical. If forming a digitally-governed mutual is harder than forming a company, community ownership loses by default — undermining a sector the government says it wants to double.
- **What would fill it:** Prompt implementation of the Law Commission's 2026 recommendations, a digitised FCA registration pipeline with an API-accessible register, statutory clarity on electronic member decision-making, and model rules for digital-first co-operatives.
- **Sources:** https://lawcom.gov.uk/project/co-operatives-and-community-benefit-societies/ ; https://lawcom.gov.uk/project/decentralised-autonomous-organisations-daos/ ; https://www.scl.org/law-commission-publishes-scoping-paper-on-decentralised-autonomous-organisations/

### G8. No proportionate regulatory route for mutual credit and community currencies
- **Type:** policy | **Horizon:** mid (2-7y)
- **What is missing:** The UK's paper town pounds are gone (Bristol Pound closed 2020; the Lewes Pound was last used in 2025). Mutual credit networks (Mutual Credit Services' trade clubs, timebanks under Timebanking UK) operate in a grey zone between e-money, consumer-credit rules and the incoming FCA cryptoasset regime — which was calibrated for capitalised stablecoin issuers (authorisation gateway opens September 2026 with a £350k minimum capital floor; full regime October 2027). No FCA perimeter guidance or sandbox tier addresses non-speculative community exchange systems; the Bank of England's Digital Securities Sandbox is wholesale-only.
- **Why it matters:** Community economies fail in the UK partly because every serious design triggers disproportionate financial regulation or unquantifiable legal risk. Italy's Sardex shows regional mutual credit can move hundreds of millions in trade; no UK community can lawfully and confidently replicate it today.
- **What would fill it:** FCA perimeter guidance plus a proportionate sandbox tier for mutual credit and community currencies, and seed funding for shared national clearing infrastructure that local trade clubs and timebanks can plug into.
- **Sources:** https://www.fca.org.uk/firms/new-regime-cryptoasset-regulation ; https://www.sidley.com/en/insights/newsupdates/2026/01/uk-cryptoasset-regulation-action-points-for-2026-2027 ; https://en.wikipedia.org/wiki/List_of_community_currencies_in_the_United_Kingdom ; https://www.opendemocracy.net/en/oureconomy/switching-uk-mutual-credit/

### G9. No UK public-interest hosting backbone (Framasoft equivalent)
- **Type:** institutional | **Horizon:** short (0-2y)
- **What is missing:** France has Framasoft and the CHATONS hosting collective; Germany procures openDesk/Nextcloud for its public sector. The UK equivalents are micro-scale: Webarchitects Co-operative (Sheffield) and Autonomic (whose Co-op Cloud platform was built precisely to let small hosts offer federated services), loosely networked through CoTech. No funder backs a UK alliance offering CryptPad, Nextcloud, Matrix and mailing lists at charity-affordable prices with credible SLAs, so UK charities default to discounted Google/Microsoft nonprofit licences — deepening the dependence the sovereignty stack is meant to reduce.
- **Why it matters:** The coordination layer is the easiest to fix: the software exists, UK operators exist, demand exists. What is missing is modest institutional capital and aggregation. Every charity moved off Big Tech suites is an immediate, measurable sovereignty gain.
- **What would fill it:** A philanthropically seeded UK community-hosting alliance built on Co-op Cloud/Webarchitects-type members, with a shared security baseline, SLA and nonprofit pricing — plus eligibility for it in charity digital-funding schemes.
- **Sources:** https://coopcloud.tech/ ; https://www.webarchitects.coop/ ; https://www.coops.tech/co-op/webarchitects ; https://autonomic.zone/blog/2023/02/co-op-cloud/

### G10. Community mesh communications absent from UK civil resilience doctrine
- **Type:** coordination | **Horizon:** mid (2-7y)
- **What is missing:** LoRa mesh (Meshtastic) is cheap, encrypted and licence-exempt in the UK (868MHz), and hobbyists already run a national MQTT-bridged emergency text network (meshtastic.sytes.net) plus preparedness groups like UKSN. But Local Resilience Forums and national resilience guidance assign no role, standard kit list or funding to neighbourhood-level data mesh. RAYNET provides recognised amateur-radio voice support to emergency services, but nothing covers community-owned digital messaging that survives power and telecoms outages — a gap highlighted by Storm Éowyn-class events and the 2025 Iberian blackout.
- **Why it matters:** When mobile networks fail, communities currently have no sanctioned, practised fallback for local digital coordination. The hardware costs tens of pounds; the missing ingredient is doctrine, training and modest procurement — classic under-provisioned public-good territory.
- **What would fill it:** A Cabinet Office/MHCLG community resilience communications pilot funding mesh starter kits and training through Local Resilience Forums and town/parish councils, with published interoperability and governance guidance.
- **Sources:** http://meshtastic.sytes.net/ ; https://www.uksn.org.uk/post/exploring-meshtastic-secure-off-grid-communication-with-project-lora ; https://meshtastic.org/

### G11. No open, privacy-preserving attribute-verification infrastructure independent of the state digital ID
- **Type:** tooling | **Horizon:** mid (2-7y)
- **What is missing:** OSA age-assurance duties (from July 2025) pushed millions of users through proprietary age-verification providers, and the government's digital ID consultation (closed June 2026, with a People's Panel concluding 21 June 2026) proposes a state wallet — voluntary for citizens, but with digital right-to-work checks planned to be mandatory from 2029. The DIATF trust framework certifies providers (e.g. Yoti) but does not mandate unlinkability or selective disclosure, and no open-source, zero-knowledge attribute-proof standard exists that UK services can freely adopt. ORG and Big Brother Watch critique; nobody builds the alternative.
- **Why it matters:** Identity checks are becoming ubiquitous — age, work, services. Without privacy-preserving rails, each new check adds surveillance infrastructure and single points of failure. An open selective-disclosure standard is the difference between proving 'over 18' and handing over a passport.
- **What would fill it:** An open, DIATF-certified selective-disclosure credential standard (ZK proofs of age/right-to-work) with a funded open-source reference implementation, mandated as an accepted option in OSA age-assurance guidance and the digital ID scheme.
- **Sources:** https://commonslibrary.parliament.uk/research-briefings/cbp-10369/ ; https://www.gov.uk/government/publications/digital-id-scheme-explainer/digital-id-scheme-explainer ; https://www.pinsentmasons.com/out-law/news/uk-scales-back-digital-id-right-work

### G12. No independent field evaluation of the decentralised stack for real UK communities
- **Type:** knowledge | **Horizon:** short (0-2y)
- **What is missing:** Claims about the usability of sovereignty-stack tools are almost entirely vendor-made. Honest status: Waku is pre-production (public testnet targeted 2026, mainnet 2027) and unproven for ordinary community use; Matrix works but faces metadata-leakage and homeserver-burden critiques; Solid stalled; PDS and mutual-credit pilots are rarely independently evaluated. No What Works-style body runs structured trials of these stacks with actual UK community organisations (housing co-ops, mutual aid groups, parish councils) and publishes comparable results — so funders and councils cannot distinguish production-ready from aspirational, and money chases whitepapers.
- **Why it matters:** Misallocated trust cuts both ways: communities adopt immature tools and get burned, or dismiss mature ones as crypto-adjacent hype. Sixty years of What Works methodology exists; applying it here would discipline vendors (including the decentralised-web ecosystem itself) and de-risk adoption.
- **What would fill it:** A funded 'civic stack test lab' running structured field trials of sovereignty-stack tools with UK community organisations, publishing comparable evaluations, reference architectures and total-cost-of-ownership data.
- **Sources:** https://blog.waku.org/waku-monthly-update-june-2025/ ; https://blog.waku.org ; https://free.technology ; https://wire.com/en/blog/matrix-not-safe-eu-data-privacy

## Funders
- DSIT (Sovereign AI Unit, AI Research Resource, smart data implementation)
- UKRI / Innovate UK (natural administrator for a Sovereign Tech Fund)
- Joseph Rowntree Charitable Trust (Power and Accountability programme — funds digital rights orgs)
- Joseph Rowntree Reform Trust (democratic and civil liberties grants)
- Luminate (funds UK digital rights and public-interest news/tech)
- Open Society Foundations (digital rights litigation and advocacy)
- Nesta (innovation methods; charity AI adoption)
- National Lottery Community Fund (community infrastructure and resilience)
- Power to Change (community business, community ownership)
- Friends Provident Foundation (fair economy — plausible funder for mutual credit)
- Omidyar Network (responsible tech)
- NLnet / EU NGI programmes (have funded UK-linked open-source privacy projects; post-Brexit access partial)
- Institute of Free Technology / Ethereum Foundation grants (decentralised stack R&D)
- Ofcom/DSIT contestable funds and regulatory sandboxes (in-kind)

## Policy notes
Three regimes dominate. The OSA applies full illegal-content and child-safety duties to volunteer-run services with no community-scale exemption; Ofcom finalised Technology Notices guidance (May 2026) preserving the power to mandate 'accredited technology' against E2EE once 'technically feasible', and the categorisation register lands July 2026. The IPA (amended 2024) enables secret technical capability notices: Apple withdrew ADP for UK users, the IPT dismissed its appeal after the order was narrowed, and Privacy International's secrecy challenge was heard in 2026 — no transparency reporting exists. The FCA cryptoasset regime (regulations made February 2026; live October 2027; stablecoin gateway September 2026, £350k capital floor) has no proportionate route for community or mutual systems. DUAA 2025 smart-data powers sit unused. Digital ID consultation closed June 2026 — voluntary for citizens, digital right-to-work checks planned from 2029. No policy anywhere funds or protects the open-source substrate all of this depends on.

## Sources consulted
- https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/consultation-technology-notices
- https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/helping-small-services-navigate-the-online-safety-act
- https://www.techuk.org/resource/online-safety-act-categorisation-register-pushed-back-to-july-2026-in-new-timeline.html
- https://www.lfgss.com/conversations/401475/
- https://www.parallelparliament.co.uk/debate/2025-12-15/commons/westminster-hall/online-safety-act-2023-repeal
- https://decoded.legal/blog/2025/03/it-is-time-to-make-the-online-safety-act-2023-fit-for-purpose/
- https://proton.me/blog/online-safety-act
- https://www.computerweekly.com/news/366632561/Apple-and-Home-Office-agree-to-drop-legal-claim-over-encryption-backdoor
- https://privacyinternational.org/news-analysis/5624/update-our-case-against-uk-governments-secret-surveillance-orders-be-heard-2026
- https://privacyinternational.org/legal-action/pi-apple-tcn-challenge
- https://www.fca.org.uk/firms/new-regime-cryptoasset-regulation
- https://www.fca.org.uk/publications/policy-statements/cryptoasset-regime
- https://www.sidley.com/en/insights/newsupdates/2026/01/uk-cryptoasset-regulation-action-points-for-2026-2027
- https://britishprogress.org/uk-day-one/a-uk-open-source-fund-to-support-software-innovati
- https://www.sovereign.tech/programs/fund
- https://openuk.uk/wp-content/uploads/2025/07/Chronic-underfunding-of-open-source-software-poses-strategic-risk-to-Europes-digital-sovereignty-Tech.eu_.pdf
- https://www.kennedyslaw.com/en/thought-leadership/article/2026/the-data-use-and-access-act-2025-commencement-dates-and-planned-guidance-for-2026/
- https://en.wikipedia.org/wiki/Data_(Use_and_Access)_Act_2025
- https://lawcom.gov.uk/project/decentralised-autonomous-organisations-daos/
- https://lawcom.gov.uk/project/co-operatives-and-community-benefit-societies/
- https://www.scl.org/law-commission-publishes-scoping-paper-on-decentralised-autonomous-organisations/
- https://www.theregister.com/2026/02/09/matrix_element_secure_chat/
- https://matrix.org/blog/2025/10/dinum/
- https://www.computerweekly.com/news/366633894/European-governments-opt-for-open-source-alternatives-to-Big-Tech-encrypted-communications
- https://commonslibrary.parliament.uk/research-briefings/cbp-10369/
- https://www.gov.uk/government/publications/digital-id-scheme-explainer/digital-id-scheme-explainer
- https://www.pinsentmasons.com/out-law/news/uk-scales-back-digital-id-right-work
- https://mydex.org/
- https://www.bristol.ac.uk/research/centres/bristol-supercomputing/articles/2026/isambard-ai-supercomputer-powers-500m-uk-sovereign-ai-fund.html
- https://www.gov.uk/government/publications/ai-opportunities-action-plan-one-year-on/ai-opportunities-action-plan-one-year-on
- https://www.publictechnology.net/2026/04/16/business-and-industry/governments-500m-sovereign-ai-venture-capital-unit-opens-doors-today-to-invest-in-uk-tech-firms/
- https://en.wikipedia.org/wiki/List_of_community_currencies_in_the_United_Kingdom
- https://www.opendemocracy.net/en/oureconomy/switching-uk-mutual-credit/
- https://coopcloud.tech/
- https://www.webarchitects.coop/
- https://www.coops.tech/co-op/webarchitects
- https://autonomic.zone/blog/2023/02/co-op-cloud/
- https://blog.waku.org/waku-monthly-update-june-2025/
- https://blog.waku.org
- https://free.technology
- http://meshtastic.sytes.net/
- https://www.uksn.org.uk/post/exploring-meshtastic-secure-off-grid-communication-with-project-lora
- https://www.jrct.org.uk/what-we-fund
