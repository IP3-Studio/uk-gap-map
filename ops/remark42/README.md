# Remark42 deployment — forum.gapmap.uk

The comments backend for the gap map's per-gap threads. One small
Docker-capable Debian VPS (Webarchitects co-op, Sheffield). Anonymous
posting with public handles, post-moderation, auto-SSL, daily JSON backups.

## One-time setup

1. **Order the box**: smallest Debian virtual server with root SSH access
   (1GB RAM is enough, 2GB comfortable). Ask for Docker preinstalled, or:
   `apt update && apt install -y docker.io docker-compose-v2`
2. **DNS**: at the registrar (Epik), add an `A` record, host `forum`,
   value = the server's IPv4. Wait for `forum.gapmap.uk` to resolve.
3. **Firewall** (if ufw): allow 22, 80, 443; deny the rest.
4. Copy this directory to the server (e.g. `/opt/remark42`), then:
   ```
   cp .env.example .env      # fill in SECRET, emails, ADMIN_PASSWD
   docker compose up -d
   docker compose logs -f    # watch the Let's Encrypt cert get issued
   ```
5. **Claim admin**: open https://forum.gapmap.uk/web/, log in (anonymous,
   pick your curator handle), copy your user id from the profile, put it in
   `.env` as ADMIN_ID, then `docker compose up -d` again.

## Non-ephemeral guarantee

Remark42 writes a daily JSON backup to `./var/backups/`. Periodically commit
a copy into this repo (`data/threads-backup.json.gz`) so the public record
survives the server: `scp` the latest backup down, commit, push. Automating
this with a deploy key is a later step; manual monthly is fine at current
volume.

## What the site needs once this is live

Set `NEXT_PUBLIC_REMARK_URL=https://forum.gapmap.uk` and the code pass in
task #8 embeds the Remark42 widget on every gap page for open discussion,
keyed on the canonical page URL (https://www.gapmap.uk/gaps/<slug>/).

Division of labour (decision, 24 Jul 2026): claims stay on GitHub
permanently. The take-a-gap wizard keeps posting structured claim issues,
curators keep merging them into data/attempts.json, and the thread panel
keeps rendering CLAIM / UPDATE / SHIPPED posts from that curated record,
pinned above the Remark42 comments. Remark42 carries conversation only;
it never drives a gap's status.

## Moderation

Post-moderation by design: comments appear immediately; the admin handle can
delete, block users and pin claims from the widget. Email notifications for
new comments go to ADMIN_EMAIL. Restricted words can be added later via
RESTRICTED_WORDS if spam appears.
