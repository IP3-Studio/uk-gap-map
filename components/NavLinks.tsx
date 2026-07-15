import Link from "next/link";

// Minimal nav per the Builder Terminal design: forum is dimmed until the
// Remark42 threads launch; the rest of the site stays reachable from the footer.
export default function NavLinks() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <Link href="/">map</Link>
      <Link href="/#gaps">gaps</Link>
      <Link href="/domains/">domains</Link>
      <span className="off" title="threads launch soon" aria-disabled="true">
        forum
      </span>
      <Link href="/about/">about</Link>
    </nav>
  );
}
