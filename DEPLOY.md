# Deploying to Vercel (private)

The site is a **native Next.js app** in `site/` — Vercel hosts it directly and statically
optimises every page (all pages are static via `generateStaticParams`; there is no server-side
code). This is Vercel's most-supported path and avoids the static-export serving 404s.
Deployed via Vercel's GitHub integration off `IP3-Studio/uk-gap-map`, kept **private** with
Vercel Authentication.

## The one setting that matters: Root Directory = `site`

The app's `package.json` and `next.config.mjs` are in `site/`, not the repo root. Vercel needs to
build from there.

1. Log into Vercel as a member of the **IP3 Studio Vercel team** (create the team first if there
   isn't one — team membership is what "login-gated private" checks against). If Vercel can't see
   the repo, install/authorise the Vercel GitHub app on the **IP3-Studio** org.
2. **Add New → Project → Import** `IP3-Studio/uk-gap-map`.
3. Set **Root Directory = `site`** (Vercel often auto-detects and pre-fills this because it finds
   Next.js in `site/`; confirm it says `site`). Framework preset: **Next.js** (auto).
4. Leave the rest default — the `build` script regenerates the dataset then builds. **No
   environment variables.** **Deploy.**

## If you already imported and hit a 404

Project → **Settings → Build & Deployment**, confirm **Root Directory = `site`** and **Framework
Preset = Next.js**, then **Redeploy** the latest commit. The site no longer uses `output: export`,
so once it builds from `site/` there is nothing left to 404.

## Make it private (after first deploy)

Project → **Settings → Deployment Protection → Vercel Authentication** → choose **Standard
Protection** (covers production + preview) → **Save**. Viewers must then be logged into a Vercel
account on the IP3 Studio team.

> Plan note: Vercel Authentication for **preview** URLs works on the free Hobby plan. Protecting
> the **production** URL behind login (and Password Protection) may require **Vercel Pro**. If the
> production option is gated, either upgrade, or leave it as a preview-only deployment (don't
> attach a public domain) — the preview URL stays behind auth.

## Ongoing

- Every push to `main` auto-deploys (production). Pushes to other branches create protected
  preview deployments.
- No secrets, no env vars, no server — it's a static export, so nothing to rotate or leak.
- If a build ever fails on Vercel: 99% of the time it's the Root Directory not being `site`.
