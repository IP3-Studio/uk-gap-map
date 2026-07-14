# Deploying to Vercel (private)

The site is a **native Next.js app at the repository root** — `package.json`, `next.config.mjs`
and the `app/` directory are all at the top level, so Vercel auto-detects Next.js with **zero
configuration**. Every page is static (`generateStaticParams`, no server-side code), so Vercel
statically optimises the whole site. Deployed via Vercel's GitHub integration off
`IP3-Studio/uk-gap-map`, kept **private** with Vercel Authentication.

## Fresh import (recommended — nothing to configure)

Because the app is at the repo root, a new import needs **no Root Directory, no Framework Preset,
no Output Directory** — everything auto-detects.

1. Log into Vercel as a member of the **IP3 Studio Vercel team** (create the team first if there
   isn't one — team membership is what "login-gated private" checks against). If Vercel can't see
   the repo, install/authorise the Vercel GitHub app on the **IP3-Studio** org.
2. **Add New → Project → Import** `IP3-Studio/uk-gap-map`.
3. Leave **everything default** — Root Directory blank (`./`), Framework preset **Next.js** (auto),
   build command `npm run build` (auto). No environment variables. **Deploy.**

## Migrating an existing (broken) project

If you have an earlier project that 404s, it has stale overrides from when the app lived in `site/`
and briefly used `output: export`. The reliable fix is a clean slate:

- **Easiest:** delete the old Vercel project (Settings → bottom → Delete Project) and do a fresh
  import per above. All overrides reset to Next.js defaults.
- **Or fix in place:** Settings → **Build & Deployment** → set **Root Directory** back to blank
  (`./`), **Framework Preset = Next.js**, and clear any **Output Directory** override (leave it
  default — do *not* set it to `out`). Then redeploy the latest commit.

## Make it private (after first deploy)

Project → **Settings → Deployment Protection → Vercel Authentication** → choose **Standard
Protection** (covers production + preview) → **Save**. Viewers must then be logged into a Vercel
account on the IP3 Studio team. (IP3 Studio is on **Pro**, so production-URL protection is
available, not just preview.)

## Ongoing

- Every push to `main` auto-deploys (production). Pushes to other branches create protected
  preview deployments.
- No secrets, no env vars, no server — the `build` script regenerates the dataset from the layered
  JSON then runs `next build`. Nothing to rotate or leak.
- If a build ever fails on Vercel, read the build log — with the app at root there is no Root
  Directory to get wrong, so a failure is a real build error, not a routing misconfiguration.
