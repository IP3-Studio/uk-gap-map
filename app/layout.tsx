import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Newsreader } from "next/font/google";
import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { gaps } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "UK Gap Map",
  description:
    "A map of concrete, fillable gaps in the UK's civic, economic and technological fabric: what is missing, what would fill it, and who is working on it.",
};

// Applies a stored theme choice before first paint so neither mode flashes.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="brand">
              UK Gap Map<span className="beta">v0 · uncurated</span>
            </Link>
            <NavLinks />
            <ThemeToggle />
          </div>
        </header>
        <div className="notice">
          <div className="container">
            {gaps.length} candidate gaps, researched July 2026. A crude map, not a prioritisation; every entry
            carries a review-by date.
          </div>
        </div>
        <main id="main">
          <div className="container">{children}</div>
        </main>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <a href="https://github.com/IP3-Studio/uk-gap-map" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              <a href="/data/gaps.json">Download the data</a>
              <Link href="/about/">Methodology &amp; limitations</Link>
            </div>
            <div>
              Built and maintained by IP3 Studio. Modelled on Convergent Research’s gap-map.org.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
