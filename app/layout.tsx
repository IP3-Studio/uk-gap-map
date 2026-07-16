import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import AttemptsProvider from "@/components/AttemptsProvider";
import NavLinks from "@/components/NavLinks";
import TakeWizard from "@/components/TakeWizard";
import Toast from "@/components/Toast";
import { REPO } from "@/lib/attempts";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#0e1310",
};

export const metadata: Metadata = {
  title: "UK Gap Map",
  description:
    "A map of concrete, fillable gaps in the UK's civic, economic and technological fabric: what is missing, what would fill it, and who is building it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <AttemptsProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <header className="site-header">
            <Link href="/" className="brand">
              uk-gap-map<span className="cursor">_</span>
            </Link>
            <NavLinks />
            <Link href="/gaps/?filter=urgent#gaps" className="btn-green" style={{ whiteSpace: "nowrap" }}>
              take action
            </Link>
          </header>
          <main id="main">{children}</main>
          <footer className="site-footer">
            <div className="row">
              <span>ip3-studio · modelled on gap-map.org</span>
              <span className="right">
                <a href={REPO} rel="noopener noreferrer" target="_blank">
                  github
                </a>
                <a href="/data/gaps.json">gaps.json</a>
                <Link href="/about/">methodology</Link>
              </span>
            </div>
            <div className="more">
              <Link href="/suggest/">suggest a gap</Link>
              <Link href="/dialogue/">dialogue</Link>
              <Link href="/act/">act</Link>
              <Link href="/watchlist/">watchlist</Link>
            </div>
          </footer>
          <TakeWizard />
          <Toast />
        </AttemptsProvider>
      </body>
    </html>
  );
}
