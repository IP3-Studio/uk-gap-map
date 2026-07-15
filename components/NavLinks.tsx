import Link from "next/link";

// Minimal terminal nav. There is no separate forum destination: every gap page
// carries its own thread, so discussion lives on the gaps themselves.
export default function NavLinks() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <Link href="/">map</Link>
      <Link href="/gaps/">gaps</Link>
      <Link href="/domains/">domains</Link>
      <Link href="/resources/">resources</Link>
      <Link href="/about/">about</Link>
    </nav>
  );
}
