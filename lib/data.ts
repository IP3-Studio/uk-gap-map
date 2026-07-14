import domainsJson from "@/data/domains.json";
import gapsJson from "@/data/gaps.json";
import aliasesJson from "@/data/aliases.json";

export type Actor = { name: string; type: string; note: string };

export type Domain = {
  num: number;
  slug: string;
  name: string;
  shortName: string;
  hue: number;
  landscape: string;
  actors: Actor[];
  funders: string[];
  policyNotes: string;
  sources: string[];
  gapCount: number;
  intro?: string;
  /** funding-gaps / policy-gaps: cross-cutting lenses, not domains — kept as landscape chapters */
  lens?: boolean;
};

export type GapRef = { number: number; slug: string; title: string; domain?: string };

export type Gap = {
  number: number;
  slug: string;
  title: string;
  domain: string;
  type: string;
  horizon: "short" | "mid" | "long";
  description: string;
  why: string;
  fill: string;
  sources: string[];
  status: string;
  provenance: { added: string; lastVerified: string; reviewBy: string };
  lens?: string;
  permission?: "build-now" | "build-together" | "state-led";
  dataReady?: boolean;
  permissionNote?: string;
  tagline?: string;
  summary?: string;
  dialogue?: { counterparty: string; ask: string; weBring: string; theyGain: string; firstStep: string };
  /** editorial urgency 0–5, curated per the published criteria; default sort */
  rank?: number;
  rankNote?: string;
  /** original lens domain for entries re-homed from funding-gaps / policy-gaps */
  facet?: string;
  /** lens facets absorbed by merging a funding-gaps / policy-gaps duplicate */
  facets?: string[];
  /** other domains whose dossiers surfaced this same gap (merged duplicates) */
  alsoDomains?: string[];
  mergedFrom?: { number: number; title: string; domain: string; description: string; fill: string }[];
  seeAlso?: GapRef[];
  curationNote?: string;
  /** AI-crisis entries: how many frontier model generations until this bites */
  capabilityTime?: string;
  capabilityTimeNote?: string;
};

export type Alias = { number: number; slug: string; title: string; canonicalNumber: number; canonicalSlug: string };

export const domains = domainsJson as Domain[];
export const gaps = gapsJson as Gap[];
export const aliases = aliasesJson as Alias[];
/** total candidate entries before curation folded duplicates */
export const candidateCount = gaps.length + aliases.length;

export const domainBySlug = new Map(domains.map((d) => [d.slug, d]));
export const gapBySlug = new Map(gaps.map((g) => [g.slug, g]));

export const GAP_TYPES = ["policy", "institutional", "funding", "tooling", "knowledge", "coordination"] as const;
export const HORIZONS = [
  { key: "short", label: "Short (0–2y)" },
  { key: "mid", label: "Mid (2–7y)" },
  { key: "long", label: "Long (7y+)" },
] as const;

export const horizonLabel = (h: string) => HORIZONS.find((x) => x.key === h)?.label ?? h;

export const PERMISSIONS = [
  { key: "build-now", label: "Build now", blurb: "no permission needed — start this week" },
  { key: "build-together", label: "Build together", blurb: "needs a willing institution at the table" },
  { key: "state-led", label: "State-led", blurb: "needs legislation or a government decision" },
] as const;

export const permissionLabel = (p?: string) => PERMISSIONS.find((x) => x.key === p)?.label ?? p ?? "";

export const COUNTERPARTIES: Record<string, string> = {
  councils: "Local government",
  "nhs-and-care": "NHS & care",
  "schools-and-education": "Schools & education",
  regulators: "Regulators",
  "unions-and-membership-bodies": "Unions & membership bodies",
  "funders-and-foundations": "Funders & foundations",
  "government-bodies": "Government bodies",
  "electoral-bodies": "Electoral bodies",
};
