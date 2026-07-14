import { readFileSync } from "node:fs";

// Gap entries merged away by the curation pass (data/curation.json) keep their
// old URLs working via permanent redirects to the canonical entry.
let aliasRedirects = [];
try {
  const aliases = JSON.parse(readFileSync(new URL("./data/aliases.json", import.meta.url), "utf8"));
  aliasRedirects = aliases.map((a) => ({
    source: `/gaps/${a.slug}`,
    destination: `/gaps/${a.canonicalSlug}/`,
    permanent: true,
  }));
} catch {
  /* pre-curation build: no aliases yet */
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // No `output: "export"` — Vercel hosts Next.js natively and statically
  // optimises every page (all our pages are static via generateStaticParams),
  // which avoids the static-export serving edge cases that cause 404s on Vercel.
  trailingSlash: true,
  async redirects() {
    return aliasRedirects;
  },
};

export default nextConfig;
