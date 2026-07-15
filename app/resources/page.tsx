import resourcesJson from "@/data/resources.json";

export const metadata = { title: "Resources · UK Gap Map" };

type Entry = {
  name: string;
  url: string;
  what: string;
  origin: string;
  license: string;
  maturity: string;
  selfhost: boolean;
  note?: string;
  tags?: string[];
};
type Category = { category: string; entries: Entry[] };

const SECTIONS: Record<string, { title: string; line: string }> = {
  communications: {
    title: "Communications",
    line: "Messaging and calls your community can run without a US platform in the middle.",
  },
  "p2p-foundations": {
    title: "Peer-to-peer foundations",
    line: "The networking layer underneath everything else: routing, anonymity, going off-grid.",
  },
  "storage-local-first": {
    title: "Storage & local-first",
    line: "Your data on your hardware, syncing between your devices, working offline.",
  },
  "collaboration-governance": {
    title: "Collaboration & governance",
    line: "Documents, code, publishing and decision-making a small team can self-host.",
  },
  "compute-ai": {
    title: "Compute & AI",
    line: "Hosting and machine intelligence without renting it all from US hyperscalers.",
  },
  "identity-money-coordination": {
    title: "Identity, money & coordination",
    line: "The rails for proving, paying and organising without a central gatekeeper.",
  },
  "personal-privacy": {
    title: "Personal privacy",
    line: "The end-user layer: phones, browsers, search, passwords and files that answer to you, not to an ad platform.",
  },
};

const MATURITY: Record<string, string> = {
  production: "rely on it today",
  usable: "works, rough edges",
  early: "watch or contribute; don't depend yet",
};

const categories = (resourcesJson as { categories: Category[] }).categories;

export default function ResourcesPage() {
  return (
    <div className="page-pad">
      <h1>Stacks you can build on today</h1>
      <p className="lede">
        Open-source infrastructure for founders and communities who would rather not run their lives through US
        platforms and US compute. Everything here is free software you can inspect, fork and self-host, rated
        honestly by what it can do <em>today</em>, not what its roadmap promises.
      </p>
      <p className="disclosure">Check the maturity badge before you depend on anything.</p>

      {categories.length === 0 && (
        <div className="empty-state">
          <p>The catalogue is being verified. Check back shortly.</p>
        </div>
      )}

      {categories.map((c) => {
        const meta = SECTIONS[c.category] ?? { title: c.category, line: "" };
        return (
          <section key={c.category}>
            <h2>{meta.title}</h2>
            <p className="section-line">{meta.line}</p>
            <div className="resource-grid">
              {c.entries.map((e) => (
                <article key={e.name} className="resource-card">
                  <div className="meta">
                    <a href={e.url} rel="noopener noreferrer" target="_blank" className="r-name">
                      {e.name}
                    </a>
                    <span className={`badge m-${e.maturity}`} title={MATURITY[e.maturity] ?? e.maturity}>
                      {e.maturity}
                    </span>
                    {e.tags?.map((t) => (
                      <span key={t} className="badge tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="r-what">{e.what}</p>
                  <p className="r-facts">
                    {e.origin} · {e.license}
                    {e.selfhost ? " · self-hostable" : ""}
                  </p>
                  {e.note && <p className="r-note">{e.note}</p>}
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <h2>How to read the maturity badges</h2>
      <p className="prose-width">
        <strong>production</strong>: widely deployed; you can rely on it today. <strong>usable</strong>: it
        works, with rough edges or a smaller track record; fine for the adventurous. <strong>early</strong>:
        testnet, pre-production or research-grade; watch it, contribute to it, don’t build your community’s
        lifeline on it yet. Nothing here is a recommendation to ignore your own threat model, and every entry
        still involves trusting someone: maintainers, hosts, or yourself.
      </p>
    </div>
  );
}
