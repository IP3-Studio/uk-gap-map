import Link from "next/link";
import { domains } from "@/lib/data";

export const metadata = { title: "Domains — UK Gap Map" };

export default function DomainsPage() {
  return (
    <>
      <h1>Domains</h1>
      <p className="lede">
        Eighteen domains researched July 2026. Each domain page carries the current UK landscape, the key actors
        and funders, and its candidate gaps.
      </p>
      <div className="domain-grid">
        {domains.map((d) => (
          <Link key={d.slug} href={`/domains/${d.slug}/`} className="domain-card" style={{ "--hue": d.hue } as React.CSSProperties}>
            <h2>{d.shortName}</h2>
            <p>
              {d.gapCount} candidate gaps · {d.actors.length} key actors
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
