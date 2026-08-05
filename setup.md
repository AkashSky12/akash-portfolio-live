# Setup — Analytics & Notifications

Reference for the site's visit/download tracking and how to configure it.
Everything is **optional and env-gated**: with nothing configured the site works
normally and all tracking stays off.

---

## 1. Overview

| Signal | Recorded where | Notified where |
|---|---|---|
| **Site visit** (once per browser session) | Plausible pageview + `Visit` event, GA4 pageview + `site_visit` event | `NEXT_PUBLIC_VISIT_WEBHOOK_URL` (Discord/Slack) |
| **Resume download** | Plausible `Resume Download` event, GA4 `resume_download` event | `NEXT_PUBLIC_DOWNLOAD_WEBHOOK_URL` (Discord/Slack) |
| **Optional email** (visitor-supplied after download) | not sent to dashboards (kept PII-free) | included in the download webhook message |

Pageviews are captured automatically by Plausible and Google Analytics once their
scripts load. The webhooks add real-time notifications on top of the dashboards.

---

## 2. Files involved

| File | Role |
|---|---|
| `src/lib/analytics.ts` | Core helper — `trackVisit()` and `trackResumeDownload(email)`; fans out to Plausible, GA4, Vercel, and webhooks. |
| `src/components/VisitTracker.tsx` | Mounts once, fires `trackVisit()` on first load. |
| `src/components/DownloadResume.tsx` | Fires `trackResumeDownload()` on download; shows the optional email popover. |
| `src/app/layout.tsx` | Injects the Plausible + Google Analytics `<script>` tags (only when their env vars are set). |
| `.env.example` | Template for the env vars below. |

---

## 3. Environment variables

Copy the template and fill in only what you need:

```bash
cp .env.example .env.local
```

| Variable | Purpose | Example |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible dashboard — your verified domain | `akashsimon.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_VISIT_WEBHOOK_URL` | Notify on each new visit | `https://discord.com/api/webhooks/…` |
| `NEXT_PUBLIC_DOWNLOAD_WEBHOOK_URL` | Notify on each resume download | `https://discord.com/api/webhooks/…` |

> `.env.local` is git-ignored. `NEXT_PUBLIC_*` vars are embedded into the client
> bundle at build time, so re-build/re-deploy after changing them.

---

## 4. Provider setup

### Google Analytics 4
1. Go to <https://analytics.google.com> → **Admin → Create Property**.
2. Add a **Web** data stream for your domain.
3. Copy the **Measurement ID** (`G-XXXXXXXXXX`) → set `NEXT_PUBLIC_GA_ID`.
4. Custom events `site_visit` and `resume_download` appear under
   **Reports → Engagement → Events** (may take up to 24h).

### Plausible (privacy-friendly)
1. Sign up at <https://plausible.io> and add your site domain.
2. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to that exact domain.
3. Custom events `Visit` and `Resume Download` show under **Goals**
   (add them as Custom Event goals in the Plausible dashboard).

### Discord webhook (recommended for notifications)
1. Server → **Settings → Integrations → Webhooks → New Webhook**.
2. Pick a channel, **Copy Webhook URL**.
3. Set it as `NEXT_PUBLIC_VISIT_WEBHOOK_URL` and/or
   `NEXT_PUBLIC_DOWNLOAD_WEBHOOK_URL` (they can be the same or different).

### Slack webhook (alternative)
1. Create an **Incoming Webhook** at <https://api.slack.com/messaging/webhooks>.
2. Use the URL as above.
3. ⚠️ Slack incoming webhooks may block browser (CORS) requests. If Slack
   messages don't arrive, prefer **Discord** or route through a proxy.

---

## 5. Security notes

- Webhook URLs live in the **public client bundle** — anyone can read and POST
  to them. Treat them as **low-sensitivity** and rotate if they get spammed.
- No personally identifying data is sent to analytics dashboards. A visitor's
  email is only captured if they voluntarily submit it, and it goes **only** to
  the download webhook (your private channel), not to GA/Plausible.
- For an abuse-proof/private setup, replace the client webhooks with a small
  serverless proxy (e.g. a Cloudflare Worker or Vercel function) that holds the
  real webhook URL server-side. Not needed for basic use.

---

## 6. Local testing

```bash
# with values set in .env.local
npm run dev
```

- Load the site → a visit message should hit your visit webhook (once per session;
  clear it by opening a new private window or clearing `sessionStorage`).
- Click **Download Resume** → PDF downloads, a download message hits your download
  webhook, and the optional email popover appears. Submit an email to see it
  included in a follow-up webhook message.
- GA/Plausible events only fire when their env vars are set and you're online.
