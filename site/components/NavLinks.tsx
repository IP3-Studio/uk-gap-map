"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Gaps" },
  { href: "/domains/", label: "Domains" },
  { href: "/watchlist/", label: "Watchlist" },
  { href: "/act/", label: "Act" },
  { href: "/dialogue/", label: "Dialogue" },
  { href: "/resources/", label: "Resources" },
  { href: "/about/", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" || pathname.startsWith("/gaps/") : pathname.startsWith(href);

  return (
    <nav className="site-nav">
      {LINKS.map((l) => (
        <Link key={l.href} href={l.href} aria-current={isCurrent(l.href) ? "page" : undefined}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
