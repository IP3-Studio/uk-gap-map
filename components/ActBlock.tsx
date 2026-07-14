import { permissionLabel, type Gap } from "@/lib/data";

const REPO = "https://github.com/IP3-Studio/uk-gap-map";

const PERM_LEAD: Record<string, string> = {
  "build-now": "No permission needed: a competent team could start this week.",
  "build-together": "No new law needed: this needs a willing institution at the table, which is exactly a conversation worth opening.",
  "state-led": "This one needs the state to move, but pressure, prototypes and evidence are all permissionless.",
};

// Primary verb by gap type: who is best placed to move this, and how.
const CTA: Record<string, { verb: string; line: string }> = {
  funding: {
    verb: "Fund it",
    line: "This gap names a fundable vehicle. If you are a funder, or can convene one, the entry above is a term sheet waiting to happen.",
  },
  policy: {
    verb: "Move it",
    line: "This gap is a decision away: a commencement order, an amendment, a consultation response. Officials and advocates can move it; anyone can put it in front of their MP.",
  },
  institutional: {
    verb: "Build it",
    line: "This gap is an organisation that doesn't exist yet. Founding teams have started with less than the dossier above.",
  },
  tooling: {
    verb: "Build it",
    line: "This gap is a buildable product or dataset. A small team could ship a credible v1.",
  },
  knowledge: {
    verb: "Research it",
    line: "This gap is missing evidence or data. Researchers, journalists and analysts can close it, and change what everyone else can see.",
  },
  coordination: {
    verb: "Convene it",
    line: "This gap is a missing table, not a missing idea. Someone credible has to call the meeting.",
  },
};

export default function ActBlock({ gap }: { gap: Gap }) {
  const cta = CTA[gap.type] ?? CTA.institutional;

  return (
    <aside className="act-block">
      <h2>{cta.verb}: this gap is actionable</h2>
      {gap.permission && (
        <p className="perm-line">
          <strong>{permissionLabel(gap.permission)}.</strong> {PERM_LEAD[gap.permission]}
          {gap.permissionNote ? ` ${gap.permissionNote}` : ""}
        </p>
      )}
      <p>{cta.line}</p>
      <div className="act-buttons">
        <a className="btn primary" href={REPO} rel="noopener noreferrer" target="_blank">
          Claim this gap on GitHub
        </a>
        {gap.type === "policy" && (
          <a className="btn" href="https://www.writetothem.com/" rel="noopener noreferrer" target="_blank">
            Put it to your MP
          </a>
        )}
      </div>
      <p className="act-note">
        Working on this already? Open an issue on the repository and we&apos;ll link your effort from this entry,
        so the next person finds you instead of starting from zero.
      </p>
    </aside>
  );
}
