import attemptsJson from "@/data/attempts.json";
import type { Gap } from "@/lib/data";

// The claims store is the git repo itself (non-ephemeral): data/attempts.json is
// committed, the site builds from it, and the client re-fetches the raw GitHub
// copy so merged claims appear without waiting for a redeploy.
export const RAW_ATTEMPTS_URL =
  "https://raw.githubusercontent.com/IP3-Studio/uk-gap-map/main/data/attempts.json";
export const REPO = "https://github.com/IP3-Studio/uk-gap-map";

export type AttemptUpdate = { date: string; kind: "update" | "ship"; body: string };

export type Attempt = {
  gap: number;
  team: string;
  link?: string;
  plan: string;
  milestone?: string;
  claimed: string; // YYYY-MM-DD
  updates?: AttemptUpdate[];
  state?: "active" | "withdrawn";
  shipped?: { date: string; verifiedBy: string; url?: string };
  /** true only for this visitor's own un-merged claim (localStorage) */
  pending?: boolean;
};

export type AttemptsFile = { generatedAt: string; attempts: Attempt[] };

export const committedAttempts = attemptsJson as AttemptsFile;

const DAY = 86400000;

export const daysSince = (iso: string, now: Date) =>
  Math.max(0, Math.floor((now.getTime() - new Date(iso).getTime()) / DAY));

export const lastActivity = (a: Attempt): string => {
  let last = a.claimed;
  for (const u of a.updates ?? []) if (u.date > last) last = u.date;
  if (a.shipped && a.shipped.date > last) last = a.shipped.date;
  return last;
};

/** ≥ 60 days silent frees the gap; withdrawn attempts never count */
export const isStalled = (a: Attempt, now: Date) =>
  a.state === "withdrawn" || (!a.shipped && daysSince(lastActivity(a), now) >= 60);

export const agoLabel = (iso: string, now: Date) => {
  const d = daysSince(iso, now);
  return d < 1 ? "now" : d < 7 ? `${d}d` : `${Math.round(d / 7)}w`;
};

export type AttemptView = Attempt & {
  fresh: boolean;
  stalled: boolean;
  pct: number;
  meta: string; // "day 34" | "quiet 5w"
  when: string; // "2d"
  line: string;
};

export const viewAttempt = (a: Attempt, now: Date): AttemptView => {
  const silent = daysSince(lastActivity(a), now);
  const fresh = silent <= 21;
  const dayN = daysSince(a.claimed, now) + 1;
  return {
    ...a,
    fresh,
    stalled: isStalled(a, now),
    pct: Math.max(4, Math.round(100 - (silent / 60) * 100)),
    meta: fresh ? `day ${dayN}` : `quiet ${Math.max(1, Math.round(silent / 7))}w`,
    when: agoLabel(lastActivity(a), now),
    line:
      a.plan.length > 64
        ? `${a.plan.slice(0, 64)}…${a.link ? ` · ${a.link}` : ""}`
        : `${a.plan}${a.link ? ` · ${a.link}` : ""}`,
  };
};

export type GapStatus = "open" | "build" | "shipped";

export const gapStatus = (list: Attempt[], now: Date): GapStatus => {
  if (list.some((a) => a.shipped)) return "shipped";
  if (list.some((a) => !isStalled(a, now))) return "build";
  return "open";
};

export type ThreadPost = {
  kind: "claim" | "update" | "ship";
  author: string;
  when: string;
  body: string;
  pending?: boolean;
};

/** claims pinned first, then everything else oldest-to-newest */
export const postsFor = (list: Attempt[], now: Date): ThreadPost[] => {
  const claims: ThreadPost[] = [];
  const rest: { date: string; post: ThreadPost }[] = [];
  for (const a of list) {
    claims.push({
      kind: "claim",
      author: a.team,
      when: agoLabel(a.claimed, now),
      body:
        a.plan +
        (a.milestone ? ` Milestone 1: ${a.milestone}` : "") +
        (a.link ? ` → ${a.link}` : ""),
      pending: a.pending,
    });
    for (const u of a.updates ?? [])
      rest.push({ date: u.date, post: { kind: u.kind === "ship" ? "ship" : "update", author: a.team, when: agoLabel(u.date, now), body: u.body } });
    if (a.shipped)
      rest.push({
        date: a.shipped.date,
        post: { kind: "ship", author: a.team, when: agoLabel(a.shipped.date, now), body: `Shipped and ${a.shipped.verifiedBy} verified.${a.shipped.url ? ` → ${a.shipped.url}` : ""}` },
      });
  }
  rest.sort((x, y) => (x.date < y.date ? -1 : 1));
  return [...claims, ...rest.map((r) => r.post)];
};

export const refOf = (n: number) => `№${String(n).padStart(3, "0")}`;

export const slugifyTeam = (t: string) =>
  (t || "anon").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "anon";

export const claimIssueUrl = (gap: Gap, f: { team: string; link: string; plan: string; milestone: string }) => {
  const handle = slugifyTeam(f.team);
  const body = [
    `**Gap:** ${refOf(gap.number)} ${gap.title} (https://uk-gap-map.vercel.app/gaps/${gap.slug}/)`,
    `**Handle:** ${handle}`,
    f.link.trim() ? `**Link:** ${f.link.trim()}` : null,
    "",
    "**What will exist in 90 days:**",
    f.plan.trim(),
    f.milestone.trim() ? `\n**First milestone:** ${f.milestone.trim()}` : null,
    "",
    "---",
    "Posted from the take-a-gap wizard. Curators: merge into `data/attempts.json` to flip the gap to in-build.",
  ]
    .filter((l) => l !== null)
    .join("\n");
  return `${REPO}/issues/new?labels=claim&title=${encodeURIComponent(`claim: ${refOf(gap.number)} · ${handle}`)}&body=${encodeURIComponent(body)}`;
};

export const replyIssueUrl = (gap: Gap) =>
  `${REPO}/issues/new?labels=thread&title=${encodeURIComponent(`thread: ${refOf(gap.number)} ${gap.title.slice(0, 60)}`)}&body=${encodeURIComponent(`Replying to ${refOf(gap.number)} (https://uk-gap-map.vercel.app/gaps/${gap.slug}/):\n\n`)}`;
