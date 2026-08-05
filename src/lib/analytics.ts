/**
 * Site analytics + notifications.
 *
 * Privacy-friendly, event-only signals sent to whatever is configured:
 *  - Plausible          (dashboard)       — pageviews auto + custom events
 *  - Google Analytics 4 (dashboard)       — pageviews auto + custom events
 *  - Vercel Analytics   (dashboard)       — if present
 *  - Outbound webhook   (Slack/Discord)   — notifications (visit + download)
 *
 * Everything is gated by env vars, so with nothing configured this is a no-op
 * (the PDF still downloads). No personal data is sent unless the visitor
 * voluntarily submits their email.
 *
 * Configure via .env.local (all optional) — see setup.md:
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN
 *   NEXT_PUBLIC_GA_ID
 *   NEXT_PUBLIC_VISIT_WEBHOOK_URL
 *   NEXT_PUBLIC_DOWNLOAD_WEBHOOK_URL
 */

type PlausibleFn = (event: string, opts?: { props?: Record<string, string | number | boolean> }) => void
type VercelTrackFn = (event: string, props?: Record<string, string | number | boolean>) => void
type GtagFn = (...args: unknown[]) => void

declare global {
  interface Window {
    plausible?: PlausibleFn
    va?: VercelTrackFn
    gtag?: GtagFn
    dataLayer?: unknown[]
  }
}

const VISIT_WEBHOOK_URL = process.env.NEXT_PUBLIC_VISIT_WEBHOOK_URL
const DOWNLOAD_WEBHOOK_URL = process.env.NEXT_PUBLIC_DOWNLOAD_WEBHOOK_URL

/** Anonymous, non-identifying context about the visit. */
function collectContext(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  return {
    page: window.location.pathname,
    referrer: document.referrer || 'direct',
    userAgent: navigator.userAgent,
    language: navigator.language,
    screen: `${window.screen.width}x${window.screen.height}`,
    timestamp: new Date().toISOString(),
  }
}

/** Send an incoming-webhook message (Discord `content` / Slack `text`). */
async function notifyWebhook(
  url: string | undefined,
  title: string,
  extraLines: string[],
  ctx: Record<string, string>,
) {
  if (!url) return
  const message = [
    title,
    ...extraLines,
    `• Referrer: ${ctx.referrer}`,
    `• Page: ${ctx.page}`,
    `• Device: ${ctx.screen} · ${ctx.language}`,
    `• Time: ${ctx.timestamp}`,
  ].join('\n')
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // `content` = Discord, `text` = Slack; sending both is harmless.
      body: JSON.stringify({ content: message, text: message }),
      keepalive: true,
    })
  } catch {
    // Never let analytics failures affect UX.
  }
}

function gtagEvent(event: string, params: Record<string, string | number | boolean> = {}) {
  try {
    window.gtag?.('event', event, params)
  } catch { /* noop */ }
}

/**
 * Fire once per browser session when a visitor lands on the site.
 * Pageviews are recorded automatically by Plausible/GA; this adds the
 * webhook notification and a custom "visit" event for funnel tracking.
 */
export function trackVisit() {
  if (typeof window === 'undefined') return
  try {
    if (sessionStorage.getItem('visit-tracked')) return
    sessionStorage.setItem('visit-tracked', '1')
  } catch { /* sessionStorage may be blocked — still fire once per load */ }

  const ctx = collectContext()

  try { window.plausible?.('Visit', { props: { referrer: ctx.referrer } }) } catch { /* noop */ }
  gtagEvent('site_visit', { referrer: ctx.referrer })
  try { window.va?.('site_visit', { referrer: ctx.referrer }) } catch { /* noop */ }

  void notifyWebhook(VISIT_WEBHOOK_URL, '👀 **New site visit**', [], ctx)
}

/**
 * Track a resume download. Always fires the anonymous dashboard event;
 * includes an email only when the visitor chooses to share one.
 */
export function trackResumeDownload(email: string | null = null) {
  const ctx = collectContext()

  // Dashboard events (anonymous — no email sent to analytics providers).
  try { window.plausible?.('Resume Download', { props: { hasEmail: Boolean(email) } }) } catch { /* noop */ }
  gtagEvent('resume_download', { hasEmail: Boolean(email) })
  try { window.va?.('resume_download', { hasEmail: Boolean(email) }) } catch { /* noop */ }

  // Notification channel (may include the voluntarily-shared email).
  void notifyWebhook(
    DOWNLOAD_WEBHOOK_URL,
    '📄 **Resume downloaded**',
    [email ? `• Email: ${email}` : '• Email: (not provided)'],
    ctx,
  )
}
