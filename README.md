# UK Gap Map

A public, navigable map of concrete, **fillable** gaps in the UK's civic, economic and
technological fabric — missing institutions, funds, tools, datasets, legal instruments and
coordination mechanisms. Each entry says what is missing, why it matters, and what a founder,
funder or policymaker could build to fill it.

Modelled on [Convergent Research's gap-map.org](https://www.gap-map.org/), extended from science
to society. Built and maintained by **IP3 Studio**, inspired by *Farewell to Westphalia* by
Jarrad Hope & Peter Ludlow. Get involved, propose a gap or correct an entry via the repository's
issues.

> **Status: v0 — uncurated.** 228 candidate gaps researched July 2026. A crude map, not a
> prioritisation. Entries have not yet been through editorial curation or practitioner-interview
> validation. Every entry carries a review-by date; facts about live processes (bills,
> consultations, contracts) decay fast.

## The thesis

Across 18 domains the same failure recurs: Britain is good at producing rights, reviews and
legislation, and bad at the unglamorous second half — commencement, capital, staffing,
enforcement, maintenance. The map calls this the **follow-through deficit** and tags every gap
with one of six archetypes (uncommenced law, rights without capital, policy without an owner,
maintenance blindness, oversight outsourced to charities, evidence-infrastructure decay).

## What's in here

```
uk-gap-map/
├── SCOPE.md                  Scoping document: thesis, data model, methodology, build plan, open questions
├── reference-models.md       Analysis of gap-map.org, CR methodology, Europe-2031
├── westphalia-alignment.md   Application of Farewell to Westphalia → the map (12 lens entries)
├── completeness-critique.md  Adversarial review: missing domains, boundary rulings
├── WATCHLIST.md              Dated events the inventory hangs on (also on the site)
├── domains/                  18 research dossiers (landscape, actors, gaps, funders, sources)
└── site/                     The website (Next.js static export)
    ├── app/                  Routes: gaps, domains, watchlist, act, dialogue, resources, about
    ├── components/           Dashboard, ActBlock, DialogueBlock, TerritoryChart, etc.
    ├── lib/data.ts           Typed data access
    ├── scripts/build-data.mjs  Merges the data layers → gaps.json / domains.json
    └── data/                 The dataset (see below)
```

## The dataset

The site is a static build over a layered dataset in `site/data/`, assembled by
`scripts/build-data.mjs`:

| File | What it is |
|---|---|
| `raw/workflow-output.json` | The July 2026 research pass (18 domains, provenance) |
| `additions.json` | Hand-curated gaps added after the research pass (Westphalia + Synthetic State lenses) |
| `permissions.json` | Permission axis per gap: `build-now` / `build-together` / `state-led` |
| `copy.json` | Editorial layer: plain-English taglines, summaries, domain intros |
| `dialogue.json` | Institutional dialogue briefs for every build-together gap |
| `watchlist.json` | Dated events |
| `resources.json` | The `/resources` hub: open-source tech stacks, maturity-rated |

Regenerate the built data (`gaps.json`, `domains.json`, and their `public/` copies) with:

```bash
cd site && npm run data
```

## Running the site

```bash
cd site
npm install
npm run dev        # dev server on :3000
npm run build      # runs `npm run data` then next build → static export in out/
```

## Design principles

- **Permission-first.** Every gap is classified by who has to say yes. `build-now` (57) needs no
  permission; `build-together` (43) needs a willing institution — the standing agenda on
  `/dialogue`; `state-led` (123) needs the state, but pressure and prototypes are permissionless.
- **Honest maturity.** The resource hub rates tools `production` / `usable` / `early` by
  deployment reality, not roadmap — including the pre-mainnet projects it lists, rated by the same
  yardstick as everything else.
- **Time-tiered review.** Short-horizon entries are revisited quarterly, mid-term six-monthly,
  long-term annually; overdue entries are badged stale.
- **Sourced, not asserted.** Every gap carries primary sources. Lens entries (Westphalia,
  Synthetic State) are traceable to their origin and, where a source is a self-published or
  pseudonymous investigation, cite the underlying primary records rather than the synthesis.

## Licence

To be decided (SCOPE.md §11). Until a licence is set, treat this as source-available for reference,
not for redistribution.
