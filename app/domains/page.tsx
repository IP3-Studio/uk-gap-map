import Link from "next/link";
import { domains } from "@/lib/data";

export const metadata = { title: "Domains — UK Gap Map" };

export default function DomainsPage() {
  const vertical = domains.filter((d) => !d.lens);
  const lenses = domains.filter((d) => d.lens);
  return (
    <>
      <h1>Domains</h1>
      <p className="lede">
        {vertical.length} domains researched July 2026. Each domain page carries the current UK landscape, the
        key actors and funders, and its canonical gaps.
      </p>
      <div className="domain-grid">
        {vertical.map((d) => (
          <Link key={d.slug} href={`/domains/${d.slug}/`} className="domain-card" style={{ "--hue": d.hue } as React.CSSProperties}>
            <h2>{d.shortName}</h2>
            <p>
              {d.gapCount} canonical gaps · {d.actors.length} key actors
            </p>
          </Link>
        ))}
      </div>
      {lenses.length > 0 && (
        <>
          <h2 className="home-h2">Lenses</h2>
          <p className="lede">
            Funding and policy were researched as cross-cutting dossiers. Their gap entries now live in the
            domains above (each marked with its lens origin); the landscape chapters remain here.
          </p>
          <div className="domain-grid">
            {lenses.map((d) => (
              <Link key={d.slug} href={`/domains/${d.slug}/`} className="domain-card" style={{ "--hue": d.hue } as React.CSSProperties}>
                <h2>{d.shortName}</h2>
                <p>landscape chapter · {d.actors.length} key actors</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
