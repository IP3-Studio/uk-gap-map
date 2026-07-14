import { COUNTERPARTIES, type Gap } from "@/lib/data";

const REPO = "https://github.com/IP3-Studio/uk-gap-map";

export default function DialogueBlock({ gap }: { gap: Gap }) {
  const d = gap.dialogue;
  if (!d) return null;

  return (
    <aside className="dialogue-block">
      <h2>The conversation to have — with {COUNTERPARTIES[d.counterparty] ?? d.counterparty}</h2>
      <dl className="dialogue-grid">
        <div>
          <dt>The ask</dt>
          <dd>{d.ask}</dd>
        </div>
        <div>
          <dt>What we bring</dt>
          <dd>{d.weBring}</dd>
        </div>
        <div>
          <dt>What you gain</dt>
          <dd>{d.theyGain}</dd>
        </div>
        <div>
          <dt>A first step you could say yes to</dt>
          <dd>{d.firstStep}</dd>
        </div>
      </dl>
      <div className="act-buttons">
        <a className="btn primary" href={REPO} rel="noopener noreferrer" target="_blank">
          Open the dialogue on GitHub
        </a>
      </div>
      <p className="act-note">
        Written for both sides of the table. If you work inside the institution named here, this page is the
        agenda — we will bring the dossier.
      </p>
    </aside>
  );
}
