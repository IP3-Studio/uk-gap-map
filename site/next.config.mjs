/** @type {import('next').NextConfig} */
const nextConfig = {
  // No `output: "export"` — Vercel hosts Next.js natively and statically
  // optimises every page (all our pages are static via generateStaticParams),
  // which avoids the static-export serving edge cases that cause 404s on Vercel.
  trailingSlash: true,
};

export default nextConfig;
