import Link from "next/link";

// Terminal nav. No forum destination: every gap page carries its own thread.
export default function NavLinks() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <Link href="/">map</Link>
      <Link href="/london/">london</Link>
      <Link href="/gaps/">gaps</Link>
      <Link href="/domains/">domains</Link>
      <Link href="/resources/">resources</Link>
      <Link href="/manifesto/">manifesto</Link>
      <Link href="/about/">about</Link>
    </nav>
  );
}
