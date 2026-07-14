import Link from "next/link";
import { COUNTERPARTIES, gaps } from "@/lib/data";

export const metadata = { title: "Dialogue — UK Gap Map" };

const REPO = "https://github.com/IP3-Studio/uk-gap-map";

const briefs = gaps.filter((g) => g.permission === "build-together" && g.dialogue);
const groups = Object.keys(COUNTERPARTIES)
  .map((key) => ({ key, label: COUNTERPARTIES[key], items: briefs.filter((g) => g.dialogue!.counterparty === key) }))
  .filter((g) => g.items.length > 0);

export default function DialoguePage() {
  return (
    <div>
      <h1>An open dialogue with public institutions</h1>
      <p className="lede">
        {briefs.length} of the gaps on this map need no new law — just a willing institution at the table. This
        page is our standing offer: for each one, what we’re asking, what we bring, what you gain, and a first
        step small enough to agree in one meeting. If you work inside one of these institutions, this is the
        agenda.
      </p>
      <p className="disclosure">
        These are written for both sides of the table — the gain named for your institution is meant honestly,
        and the first steps are deliberately pilot-sized, time-boxed and reversible. Every brief links to a full
        dossier with sources.
      </p>

      {groups.map((grp) => (
        <section key={grp.key}>
          <h2>
            {grp.label} <span className="count-inline">({grp.items.length})</span>
          </h2>
          <div className="card-list">
            {grp.items.map((g) => (
              <Link key={g.slug} href={`/gaps/${g.slug}/`} className="gap-card">
                <div className="meta">
                  <span className="num">№ {g.number}</span>
                  <span className="badge perm build-together">Build together</span>
                </div>
                <h3>{g.title}</h3>
                <p>
                  <strong>The ask:</strong> {g.dialogue!.ask}
                </p>
                <p className="first-step">
                  <strong>First step:</strong> {g.dialogue!.firstStep}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {briefs.length === 0 && (
        <div className="empty-state">
          <p>The dialogue briefs are being written — check back shortly.</p>
        </div>
      )}

      <h2>How to start</h2>
      <p className="prose-width">
        Reach us through the{" "}
        <a href={REPO} rel="noopener noreferrer" target="_blank">
          repository
        </a>
        . Officials: name the gap number and we’ll bring the dossier and the people. Community groups: tell us
        which institution you already have a relationship with — warm introductions move faster than cold
        letters. Nothing here requires anyone to commit beyond the first step.
      </p>
    </div>
  );
}
