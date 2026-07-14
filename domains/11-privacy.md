# Privacy and sovereignty of the individual

## Landscape
The UK's privacy settlement was rewritten in 2025–26. The Data (Use and Access) Act 2025 (DUAA, Royal Assent June 2025; main provisions commenced 5 February 2026) loosened UK GDPR — "recognised legitimate interests", broader automated decision-making, opt-out analytics cookies — while putting digital verification services on a statutory footing and restructuring the ICO into an Information Commission during 2026. The EU renewed adequacy in December 2025, to 2031 with a four-year mid-point review. Enforcement remains the weak joint: the ICO favours engagement over sanction; 2025 produced only seven fines (£19.6m, mostly security breaches, including 23andMe's £2.31m), and its 2019 finding that real-time bidding adtech is systemically unlawful has still produced no RTB enforcement. Complaints take roughly a year to resolve. The Online Safety Act's age-verification duties (July 2025) triggered a 1,400%+ VPN sign-up surge and breaches exposing verification IDs (Discord's third-party provider ~70,000 IDs; the Tea app), with no mandated privacy-preserving architecture. The government's digital ID scheme (announced September 2025) drew a 2.9m-signature petition, a January 2026 retreat from compulsion, and a Digital Access to Services Bill in the May 2026 King's Speech — with credentials locked to the GOV.UK Wallet and oversight sitting inside DSIT. A secret Technical Capability Notice forced Apple to withdraw Advanced Data Protection from UK users; IPT litigation continues in 2026. Health-data centralisation (Palantir's Federated Data Platform, Single Patient Record from 2028) proceeds under an opt-out that largely does not apply. Advocacy capacity is thin and philanthropically precarious.

## Actors
- **Information Commissioner's Office (becoming the Information Commission)** (regulator (government body)): UK data protection regulator; restructured into a board-led Information Commission under the DUAA in 2026; criticised for favouring engagement over enforcement, notably on adtech/RTB.
- **Open Rights Group** (advocacy nonprofit): Main UK digital rights campaign group (adtech complaints, digital ID, age verification); member-funded with JRRT/Luminate grants; originated the RTB complaints the ICO never enforced.
- **Privacy International** (charity): London-based; litigating the Apple Technical Capability Notice at the Investigatory Powers Tribunal and challenging secret surveillance orders in 2026.
- **medConfidential** (advocacy group): Tiny but pivotal health-data confidentiality watchdog; tracks the FDP, Single Patient Record and National Data Opt-Out erosion; runs a volunteer data-release register.
- **Foxglove** (legal nonprofit): Tech-justice litigators; challenged the NHS–Palantir Federated Data Platform contract and government data deals.
- **Big Brother Watch** (civil liberties group): Campaigns on digital ID, online age checks and data exploitation; co-authored the December 2025 joint briefing for the digital ID petition debate.
- **Ada Lovelace Institute** (research institute): Nuffield-founded; research on data governance, digital identity and public attitudes; key evidence source but not an enforcement actor.
- **AWO** (company (data rights law firm/consultancy)): Specialist data rights legal practice bringing individual and strategic UK GDPR claims; closest UK analogue to enforcement-focused capacity, but commercial.
- **Office for Digital Identities and Attributes (OfDIA, within DSIT)** (government body): Governs the DVS trust framework (statutory from 1 December 2025, v1.0 March 2026, UK CertifID trust mark); sits inside DSIT rather than independent of it.
- **Yoti** (company): Leading UK age-assurance and digital ID provider; certified under DIATF; major beneficiary of Online Safety Act age checks and party to debates on privacy standards.
- **Age Check Certification Scheme (ACCS)** (certification body): Runs the ICO-approved UK GDPR certification for age-assurance providers — the only privacy certification in the AV market, but voluntary.
- **Age Verification Providers Association** (trade body): UK-based global trade association for AV suppliers; lobbies for age assurance and defends the sector's privacy record post-breaches.
- **Genomics England** (government-owned company): Runs the National Genomic Research Library and the Generation Study (100,000 newborn genomes); governance of access, commercial use and future law-enforcement requests is the live issue.
- **REPHRAIN** (UKRI research centre): National Research Centre on Privacy, Harm Reduction and Adversarial Influence Online (Bristol-led, EPSRC-funded, Phase II); academic PETs and online-safety-privacy research.
- **Mydex CIC** (community interest company): Long-running personal data store operator; exemplar of the personal-data-intermediary market that lacks a legal authorisation regime (DSIT consultation live to 31 August 2026).

## Gaps
### G1. No opt-out collective redress route for data protection breaches
- **Type:** policy | **Horizon:** short
- **What is missing:** The UK never implemented UK GDPR Article 80(2) (non-profits complaining/litigating without named claimants); the 2021 DCMS review declined, citing Lloyd v Google — which the Supreme Court then shut down, ruling representative damages claims need individual proof of loss. The DUAA 2025 did not revisit it. Competition law has opt-out actions at the CAT; data protection has nothing. ORG has campaigned for implementation; AWO and claimant firms can only run costly opt-in group actions.
- **Why it matters:** Mass-scale unlawful processing — RTB, mega-breaches — produces per-person harms too small to litigate individually, so it goes unremedied and undeterred. With the ICO declining systemic enforcement, private enforcement is the only backstop, and the UK has structurally disabled it.
- **What would fill it:** Legislation creating an opt-out representative action regime for data claims (Article 80(2)-equivalent or CAT-style certification), allowing authorised non-profits to bring complaints and damages claims on behalf of affected classes.
- **Sources:** https://www.linklaters.com/en/insights/blogs/digilinks/2021/march/uk---government-rejects-opt-out-gdpr-class-actions ; https://www.openrightsgroup.org/publications/org-representative-actions-under-the-uk-gdpr/ ; https://www.stephensonharwood.com/insights/lloyd-v-google-no-damages-without-proof-of-damage/

### G2. No UK equivalent of noyb: a resourced strategic data rights enforcement organisation
- **Type:** institutional | **Horizon:** short
- **What is missing:** No UK organisation systematically files and litigates data protection complaints at scale the way noyb does in the EU. Open Rights Group campaigns and files occasional complaints on a small member-funded budget; Privacy International focuses internationally and on surveillance; Foxglove litigates selected tech-justice cases; AWO is a commercial firm. Nobody runs a pipeline of test complaints, s166 tribunal applications and appeals designed to force the law to bite — which is why the 2018 RTB complaints died without determination.
- **Why it matters:** Rights that are never enforced are decorative. The DUAA now requires controllers to run complaints processes (from 19 June 2026), creating a documented trail an enforcement organisation could exploit — but no one is staffed to do it.
- **What would fill it:** A dedicated UK data rights enforcement centre (£1–2m/yr, lawyers plus technologists) filing strategic complaints, tribunal applications and test litigation; buildable as a new organisation or by capitalising ORG's data rights programme.
- **Sources:** https://www.openrightsgroup.org/campaign/ending-adtech-abuse/ ; https://www.computerweekly.com/news/252491682/ICO-sued-over-failure-to-address-ad-industry-practices

### G3. No merits accountability when the ICO declines to enforce
- **Type:** policy | **Horizon:** short
- **What is missing:** Section 166 DPA 2018 lets complainants ask the First-tier Tribunal only to fix procedural failings — not to review the outcome; the Court of Appeal in R (Delo) v ICO confirmed the Commissioner need not determine every complaint. Judicial review is expensive and deferential. This is how the ICO's own 2019 finding that real-time bidding systemically breaches UK GDPR could end in closed complaints (Killock & Veale) and zero RTB enforcement seven years on, while its 2026 tracking strategy focuses on cookie banners and accommodates consent-or-pay.
- **Why it matters:** A regulator whose inaction cannot be appealed on the merits faces asymmetric incentives: enforcement risks appeals from deep-pocketed firms, inaction risks nothing. The adtech failure shows the result — documented unlawfulness at population scale with no remedy.
- **What would fill it:** Statutory duty to determine complaints within deadlines plus a merits appeal to the First-tier Tribunal against ICO complaint outcomes, mirroring the FOI s50 decision-notice model.
- **Sources:** https://www.handleygill.co.uk/handley-gill-blog/data-protection-complaints-data-use-and-access-act-2025-information-commissioner-data-protection-complaints-handling-consultation ; https://www.computerweekly.com/news/252495225/ICO-resumes-adtech-investigation ; https://www.scl.org/ico-issues-online-tracking-strategy-update/

### G4. Age assurance without mandated privacy-preserving architecture
- **Type:** tooling | **Horizon:** short
- **What is missing:** Ofcom's 'highly effective age assurance' criteria under the Online Safety Act judge efficacy, not privacy; the ICO–Ofcom joint statement (March 2026) restates data-minimisation expectations but is not a binding technical standard. The Age Check Certification Scheme is ICO-approved but voluntary. The result: millions of ID/selfie uploads to third parties, a 1,400%+ VPN surge, and breaches exposing verification IDs (Discord's third-party provider ~70,000 IDs; the Tea app). The EU has a zero-knowledge age-verification blueprint and reference app; the UK has no equivalent public infrastructure.
- **Why it matters:** Age checks are now a permanent feature of the UK internet. Without a required data-minimising architecture, every regulated service spawns new honeypots of identity documents, teaching users that privacy and safety are opposites and eroding compliance.
- **What would fill it:** A binding UK age-assurance privacy standard (Ofcom/ICO) requiring double-blind or zero-knowledge age proofs and prohibiting ID retention, plus a publicly funded open-source reference implementation and mandatory certification for AV providers.
- **Sources:** https://www.ofcom.org.uk/siteassets/resources/documents/online-safety/information-for-industry/other/ofcom-ico-joint-statement-on-age-assurance.pdf ; https://www.openrightsgroup.org/publications/regulating-age-verification/ ; https://www.theregister.com/2025/07/28/uk_vpn_demand_soars/ ; https://www.eff.org/deeplinks/2026/02/discord-voluntarily-pushes-mandatory-age-verification-despite-recent-data-breach

### G5. Digital ID legislation without statutory privacy safeguards or independent oversight
- **Type:** policy | **Horizon:** short
- **What is missing:** The Digital Access to Services Bill (King's Speech, May 2026) follows a 2.9m-signature petition and the January 2026 retreat from compulsion. Government promises data minimisation and cites zero-knowledge-style attribute proofs, but nothing in statute yet mandates unlinkability, bans central transaction logs, or creates independent oversight — OfDIA sits inside DSIT, and the 'independent advisory panel' is non-statutory. DSIT also plans to lock government-issued credentials (e.g. the 2026 mobile driving licence) to the GOV.UK Wallet, excluding DIATF-certified private wallets and undermining the trust framework it built.
- **Why it matters:** Architecture decided now is near-irreversible. A wallet whose issuer can observe use, and a scheme overseen by its own sponsoring department, converts a convenience tool into surveillance infrastructure — the precise fear that made the petition Britain's fourth-largest ever.
- **What would fill it:** Amendments to the Bill: statutory unlinkability/selective-disclosure requirements, prohibition on issuer observation and central usage logs, an independent statutory digital identity commissioner, and interoperability letting certified private wallets hold government credentials.
- **Sources:** https://commonslibrary.parliament.uk/research-briefings/cbp-10369/ ; https://www.biometricupdate.com/202602/uk-digital-id-providers-fear-govt-plans-conflict-with-data-protection-act-aims ; https://petition.parliament.uk/petitions/730194 ; https://statewatch.org/news/2025/december/uk-joint-briefing-on-the-do-not-introduce-digital-id-cards-parliamentary-petition-debate/

### G6. No statutory shield for end-to-end encryption
- **Type:** policy | **Horizon:** mid
- **What is missing:** Technical Capability Notices under the Investigatory Powers Act are issued and contested in secret: the late-2024 TCN forced Apple to withdraw Advanced Data Protection from all UK users in February 2025, a narrower replacement order followed in late 2025, and the IPT heard the case on 'assumed facts' in 2026 only because Apple and Privacy International litigated. Separately, Online Safety Act s121 'accredited technology' notices could compel scanning of encrypted services — unused but on the statute book. UK law contains no presumption protecting E2EE and not even a duty to publish TCN numbers.
- **Why it matters:** Every UK user now has weaker cloud security than users elsewhere — a unique national downgrade. Secret orders against encryption chill security investment, threaten adequacy, and were checked only by leaks and foreign-government pressure, not by any domestic institution.
- **What would fill it:** IPA/OSA amendment creating a statutory presumption against notices that weaken end-to-end encryption, mandatory aggregate transparency reporting on TCNs, and independent technical review before issuance.
- **Sources:** https://privacyinternational.org/legal-action/pi-apple-tcn-challenge ; https://www.computerweekly.com/news/366632159/Home-Office-issues-new-back-door-order-over-Apple-encryption ; https://www.eff.org/deeplinks/2025/10/uk-still-trying-backdoor-encryption-apple-users

### G7. A health data opt-out that doesn't opt you out — and no patient-facing access audit
- **Type:** institutional | **Horizon:** short
- **What is missing:** The National Data Opt-Out does not apply to the Palantir-built Federated Data Platform (168/214 trusts signed up), justified via direct-care purposes and an unpublished s254 direction that Parliament has questioned; the BMA voted to oppose FDP rollout in June 2025. The Single Patient Record (Health Bill; NHS App from 2028) will centralise further, while medConfidential warns opt-out 'reform' will weaken what remains. Patients still cannot see who has accessed or received their record — 'data usage reports' promised since the care.data era were never delivered; medConfidential's volunteer register is the only tracker.
- **Why it matters:** Two national data-trust collapses (care.data, GPDPR) each cost millions of opt-outs and years of research capability. Repeating the pattern with FDP and SPR risks a third, at the exact moment the government is betting the NHS's future on data.
- **What would fill it:** A statutory single opt-out covering all secondary uses including FDP-hosted products, plus a patient-facing data-usage report in the NHS App showing every access and release, independently audited.
- **Sources:** https://www.theregister.com/databases/2026/06/13/nhs-patients-cant-opt-out-of-palantirs-data-platform-but-their-hospital-can/5254766 ; https://hansard.parliament.uk/commons/2026-04-16/debates/2FDCA71C-D0C1-4738-BEE8-A4BDA311DB99/NHSFederatedDataPlatform ; https://medconfidential.org/2025/10-year-plan-for-englands-nhs-week-one/ ; https://www.gov.uk/government/publications/health-bill-single-patient-record-fact-sheet/health-bill-single-patient-record-fact-sheet

### G8. Genetic discrimination prevented only by a voluntary insurance code
- **Type:** policy | **Horizon:** mid
- **What is missing:** The UK has no statute banning genetic discrimination — unlike the US (GINA) or Canada (Genetic Non-Discrimination Act). Insurers' use of predictive genetic tests is limited only by the voluntary ABI Code on Genetic Testing and Insurance (three-year review, 2025), binding only signatories; employment protection is indirect via the Equality Act 2010. Meanwhile the state is normalising population genomics: the Generation Study is sequencing 100,000 newborns, and the 23andMe breach (£2.31m ICO fine, 2025) showed how genomic data leaks. The Progress Educational Trust and academics have called for legislation; no organisation owns the campaign.
- **Why it matters:** Newborns sequenced today carry that data for 80+ years under a code that can be rescinded by an industry board. Fear of genetic disadvantage measurably suppresses research participation and screening uptake, undermining the UK's genomics strategy itself.
- **What would fill it:** A statutory prohibition on genetic discrimination in insurance and employment, plus statutory rules governing law-enforcement access to research genomic databases (NGRL, UK Biobank).
- **Sources:** https://www.gov.uk/government/publications/code-on-genetic-testing-and-insurance-3-year-review-2025/code-on-genetic-testing-and-insurance-3-year-review-2025 ; https://www.progress.org.uk/why-the-uk-needs-a-law-to-prevent-genetic-discrimination/ ; https://www.generationstudy.co.uk/overview-of-the-study/keeping-your-data-safe

### G9. No public funder for PETs deployment or privacy infrastructure maintenance
- **Type:** funding | **Horizon:** mid
- **What is missing:** The UK produces world-class privacy-enhancing-technologies guidance (ICO 2023, world-first) and research (REPHRAIN, EPSRC), and DSIT/ICO shipped a PETs cost-benefit tool (Nov 2024) after the ICO's own report found adoption persistently low. But translation money is one-off: the UK–US PETs prize (2022–23) ended; the NHS–US National Cancer Institute PETs pilot (2025) has no scale-up vehicle; and no UK body pays for maintenance of open-source privacy infrastructure the way Germany's Sovereign Tech Fund does. Innovate UK has no standing PETs programme.
- **Why it matters:** PETs are the technical resolution of the UK's 'growth vs privacy' dilemma — enabling data use without data exposure — and a plausible export strength. Guidance without procurement pull or deployment funding has demonstrably failed to move adoption for three years.
- **What would fill it:** A DSIT/Innovate UK PETs adoption fund (~£20–50m): procurement-linked challenges in NHS/ONS/HMRC data sharing plus maintenance grants for open-source privacy tooling — or a privacy strand of any future UK sovereign tech fund.
- **Sources:** https://ico.org.uk/about-the-ico/research-reports-impact-and-evaluation/research-and-reports/technology-and-innovation/tackling-barriers-to-privacy-enhancing-technologies-adoption/ ; https://www.gov.uk/government/publications/privacy-enhancing-technologies-cost-benefit-awareness-tool ; https://gds.blog.gov.uk/2025/10/09/using-privacy-enhancing-technologies-to-enable-international-data-sharing/ ; https://www.rephrain.ac.uk/

### G10. Personal data intermediaries have no legal authorisation or certification regime
- **Type:** coordination | **Horizon:** mid
- **What is missing:** DUAA smart data powers exist, but beyond open banking no scheme is live, and DSIT's June 2026 consultation ('Empowering people through data intermediaries', closes 31 August 2026) concedes the blockers: legal ambiguity over whether intermediaries can exercise data subject rights on individuals' behalf, controller friction when they try, and zero public awareness. Pioneers like Mydex CIC have operated for a decade with no authorisation route; the ICO has no guidance or code. The market that would let individuals actually wield portability rights cannot form.
- **Why it matters:** Data portability has been a paper right since 2018. Without certified intermediaries, individual 'data sovereignty' means clicking through subject access requests alone; with them, it becomes a market — as open banking (13m+ users) proved in finance.
- **What would fill it:** Legislation or an ICO code authorising certified personal data intermediaries to exercise access/portability rights on behalf of individuals, plus launch of the first non-finance smart data scheme (energy or telecoms) with intermediary access built in.
- **Sources:** https://www.gov.uk/government/consultations/empowering-people-through-data-intermediaries/empowering-people-through-data-intermediaries ; https://www.aoshearman.com/en/insights/ao-shearman-on-data/department-for-science-innovation-and-technology-publishes-consultation-on-empowering-individuals

### G11. No UK data broker register or deletion mechanism
- **Type:** knowledge | **Horizon:** mid
- **What is missing:** No one — including government — can enumerate who holds and trades UK residents' personal data. There is no registration obligation for data brokers (contrast California's registry and Delete Act); DSIT's call for evidence on data brokers and national security acknowledged the blind spot. ICO enforcement is rare and fragile: its 2020 Experian enforcement notice on offline data broking was largely overturned on appeal. Consumers have no practical way to discover or delete broker-held profiles; ORG's campaigns are ad hoc.
- **Why it matters:** Broker data feeds scams, discriminatory pricing, and — per DSIT's own framing — hostile-state targeting. Individual rights are unusable against entities you cannot name; a register converts an invisible market into a governable one.
- **What would fill it:** Statutory data broker registration administered by the Information Commission, with a one-stop deletion mechanism (California Delete Act model); interim: a funded independent observatory mapping the UK broker market.
- **Sources:** https://www.techuk.org/resource/dsit-launches-call-for-evidence-on-data-brokers-and-national-security.html ; https://www.digit.fyi/uk-gov-asks-for-insight-into-data-brokers-security/

### G12. Precarious, sub-scale funding base for UK privacy advocacy
- **Type:** funding | **Horizon:** short
- **What is missing:** The organisations that shifted national outcomes in 2025–26 — ORG (digital ID, adtech), medConfidential (NHS data), Privacy International and Liberty (Apple TCN), Big Brother Watch — run on small member subscriptions and a handful of funders (Joseph Rowntree Reform Trust, Luminate, historically Open Society Foundations, whose European retrenchment removed a mainstay). medConfidential operates at near-volunteer scale. There is no UK-based pooled fund for digital rights and no litigation costs fund for data cases; the Digital Freedom Fund covers Europe-wide litigation but not UK core capacity.
- **Why it matters:** A 2.9m-signature petition, a forced government retreat on digital ID compulsion, and the only scrutiny of secret encryption orders all came from organisations whose combined budgets are under £10m. That capacity is one funder-exit from collapse — while the legislative volume is accelerating.
- **What would fill it:** A pooled UK digital rights fund — a donor collaborative (JRRT, Luminate, Nuffield, tech-wealth philanthropy) making multi-year core grants of £3–5m/yr — plus a dedicated litigation costs fund for strategic data rights cases.
- **Sources:** https://www.jrrt.org.uk/what-we-do/grants-awarded/open-rights-group/ ; https://luminategroup.com/investee/open-rights-group ; https://en.wikipedia.org/wiki/Open_Rights_Group

## Funders
- UKRI / EPSRC (REPHRAIN centre, PETs and online-harms research; Safer Streets R&D challenge)
- DSIT (PETs cost-benefit tool, UK–US PETs prize legacy, digital identity programme; plausible home for a PETs adoption fund)
- Innovate UK (plausible funder of PETs commercialisation; currently no standing programme)
- Joseph Rowntree Reform Trust (core funder of Open Rights Group and democratic-rights campaigning)
- Luminate (Open Rights Group and data-rights field funder)
- Open Society Foundations (historic funder of UK digital rights; retrenched from Europe — the gap its exit left is itself part of the problem)
- Nuffield Foundation (founded and funds the Ada Lovelace Institute; data governance research)
- Wellcome Trust (health data governance and public-trust research; plausible funder of patient-data transparency infrastructure)
- ICO / Information Commission grants programme (previously funded privacy research; could be revived for PETs and enforcement research)
- Digital Freedom Fund (European strategic litigation support, extendable to UK data rights cases)
- Tech-wealth and consumer-facing philanthropy (e.g. Proton, Mozilla Foundation) as plausible entrants for privacy-tool and advocacy funding

## Policy notes
The DUAA 2025 tilts deregulatory (recognised legitimate interests, relaxed automated decision-making, opt-out analytics cookies) while EU adequacy — renewed December 2025 to 2031 with a four-year mid-point review — caps divergence. Individual redress is the systemic hole: Article 80(2) opt-out actions were never implemented, Lloyd v Google closed the courts route, s166 DPA offers only procedural review, and Delo confirmed the ICO need not determine complaints. Encryption is unprotected in statute: secret IPA Technical Capability Notices (Apple litigation at the IPT, 2026) and unused OSA s121 scanning powers persist. The Digital Access to Services Bill (May 2026 King's Speech) currently lacks statutory unlinkability and independent oversight. Health-data centralisation outpaces the non-statutory National Data Opt-Out; genetic discrimination rests on a voluntary ABI code (2025 review). Live windows: digital ID Bill passage, DSIT data intermediaries consultation (closes 31 August 2026), data broker call for evidence.

## Sources consulted
- https://www.gov.uk/guidance/data-use-and-access-act-2025-data-protection-and-privacy-changes
- https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/
- https://privacymatters.dlapiper.com/2026/02/uk-commencement-of-the-data-protection-provisions-in-the-data-use-and-access-act/
- https://www.urmconsulting.com/blog/analysis-of-enforcement-action-by-the-ico-in-2025-actions-way-down-security-data-breach-fines-way-up
- https://www.reedsmith.com/our-insights/blogs/viewpoints/102mi7r/icohno-saying-goodbye-to-the-information-commissioners-office/
- https://www.hunton.com/privacy-and-information-security-law/european-commission-renews-uk-data-adequacy-decisions
- https://www.theregister.com/2025/12/22/eu_uk_data_adequacy/
- https://www.openrightsgroup.org/campaign/ending-adtech-abuse/
- https://www.computerweekly.com/news/252495225/ICO-resumes-adtech-investigation
- https://www.computerweekly.com/news/252491682/ICO-sued-over-failure-to-address-ad-industry-practices
- https://ico.org.uk/about-the-ico/what-we-do/our-work-on-online-tracking/
- https://www.scl.org/ico-issues-online-tracking-strategy-update/
- https://www.theregister.com/2025/07/28/uk_vpn_demand_soars/
- https://www.eff.org/deeplinks/2026/02/discord-voluntarily-pushes-mandatory-age-verification-despite-recent-data-breach
- https://www.kennedyslaw.com/en/thought-leadership/article/2025/spilling-the-tea-on-id-risk-unintended-consequences-of-the-online-safety-act/
- https://www.ofcom.org.uk/siteassets/resources/documents/online-safety/information-for-industry/other/ofcom-ico-joint-statement-on-age-assurance.pdf
- https://www.openrightsgroup.org/publications/regulating-age-verification/
- https://www.gov.uk/government/collections/uk-digital-verification-services-trust-framework
- https://www.biometricupdate.com/202602/uk-digital-id-providers-fear-govt-plans-conflict-with-data-protection-act-aims
- https://www.biometricupdate.com/202511/uk-digital-id-shouldnt-be-a-betrayal-of-diatf-certified-identity-firms
- https://petition.parliament.uk/petitions/730194
- https://en.wikipedia.org/wiki/UK_Digital_ID
- https://www.computing.co.uk/news/2026/government/government-backtracks-on-digital-id
- https://statewatch.org/news/2025/december/uk-joint-briefing-on-the-do-not-introduce-digital-id-cards-parliamentary-petition-debate/
- https://commonslibrary.parliament.uk/research-briefings/cbp-10369/
- https://www.wired-gov.net/wg/news.nsf/articles/UK+Government+includes+Digital+ID+in+Kings+Speech+Digital+Access+to+Services+Bill+14052026111000?open=
- https://privacyinternational.org/legal-action/pi-apple-tcn-challenge
- https://www.computerweekly.com/news/366632159/Home-Office-issues-new-back-door-order-over-Apple-encryption
- https://www.eff.org/deeplinks/2025/10/uk-still-trying-backdoor-encryption-apple-users
- https://www.theregister.com/databases/2026/06/13/nhs-patients-cant-opt-out-of-palantirs-data-platform-but-their-hospital-can/5254766
- https://hansard.parliament.uk/commons/2026-04-16/debates/2FDCA71C-D0C1-4738-BEE8-A4BDA311DB99/NHSFederatedDataPlatform
- https://medconfidential.org/2025/10-year-plan-for-englands-nhs-week-one/
- https://www.gov.uk/government/publications/health-bill-single-patient-record-fact-sheet/health-bill-single-patient-record-fact-sheet
- https://www.gov.uk/government/publications/code-on-genetic-testing-and-insurance-3-year-review-2025/code-on-genetic-testing-and-insurance-3-year-review-2025
- https://www.progress.org.uk/why-the-uk-needs-a-law-to-prevent-genetic-discrimination/
- https://www.generationstudy.co.uk/overview-of-the-study/keeping-your-data-safe
- https://www.genomicsengland.co.uk/blog/national-patient-data-day-blog
- https://www.linklaters.com/en/insights/blogs/digilinks/2021/march/uk---government-rejects-opt-out-gdpr-class-actions
- https://www.openrightsgroup.org/publications/org-representative-actions-under-the-uk-gdpr/
- https://www.stephensonharwood.com/insights/lloyd-v-google-no-damages-without-proof-of-damage/
- https://www.michelmores.com/commercial-litigation-insight/ico-guidance-explained-the-new-data-protection-complaints-regime-from-june-2026/
- https://www.handleygill.co.uk/handley-gill-blog/data-protection-complaints-data-use-and-access-act-2025-information-commissioner-data-protection-complaints-handling-consultation
- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/privacy-enhancing-technologies/
- https://ico.org.uk/about-the-ico/research-reports-impact-and-evaluation/research-and-reports/technology-and-innovation/tackling-barriers-to-privacy-enhancing-technologies-adoption/
- https://www.gov.uk/government/publications/privacy-enhancing-technologies-cost-benefit-awareness-tool
- https://gds.blog.gov.uk/2025/10/09/using-privacy-enhancing-technologies-to-enable-international-data-sharing/
- https://www.rephrain.ac.uk/
- https://www.gov.uk/government/consultations/empowering-people-through-data-intermediaries/empowering-people-through-data-intermediaries
- https://www.techuk.org/resource/dsit-launches-call-for-evidence-on-data-brokers-and-national-security.html
- https://www.jrrt.org.uk/what-we-do/grants-awarded/open-rights-group/
- https://luminategroup.com/investee/open-rights-group
