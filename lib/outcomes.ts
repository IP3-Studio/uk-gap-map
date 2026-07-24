import outcomesJson from "@/data/outcomes.json";
import { gaps, type Gap } from "@/lib/data";

export type Outcome = {
  id: string;
  short: string;
  title: string;
  line: string;
  domains: string[];
  gaps: number[];
};

const raw = (outcomesJson as { outcomes: Outcome[] }).outcomes;

// An outcome's gap set = every gap in its listed domains plus any named
// cross-domain gap numbers. Lightweight v1: membership only, no dependency
// logic between outcomes yet.
export const outcomes = raw.map((o) => {
  const set = new Set<number>(o.gaps);
  for (const g of gaps) if (o.domains.includes(g.domain)) set.add(g.number);
  const members = gaps.filter((g) => set.has(g.number));
  return { ...o, members };
});

export type ResolvedOutcome = (typeof outcomes)[number];

const byGapNumber = new Map<number, ResolvedOutcome[]>();
for (const o of outcomes) {
  for (const m of o.members) {
    if (!byGapNumber.has(m.number)) byGapNumber.set(m.number, []);
    byGapNumber.get(m.number)!.push(o);
  }
}

export const outcomesForGap = (n: number): ResolvedOutcome[] => byGapNumber.get(n) ?? [];

/** the outcome's fastest way in: its highest-ranked build-now gap */
export const startHere = (o: ResolvedOutcome): Gap | undefined =>
  [...o.members]
    .filter((g) => g.permission === "build-now")
    .sort((a, b) => (b.rank ?? 0) - (a.rank ?? 0) || a.number - b.number)[0];
