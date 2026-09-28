"use client";

import { useSyncExternalStore } from "react";

import {
  GTM_ID,
  getServerConsent,
  readConsent,
  subscribeConsent,
  writeConsent,
} from "@/lib/analytics/consent";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  STUB — functional, but the copy and the policy link are placeholders.
 *
 *  Before this goes to production:
 *    1. Write the real /privacy page (it currently says "being prepared")
 *       and describe what Google Tag Manager collects.
 *    2. Replace the wording below with copy you are happy to stand behind.
 *    3. Decide whether "Decline" is enough, or whether you need per-category
 *       choices (analytics / marketing / preferences). If tags beyond
 *       analytics ever go into the GTM container, per-category is expected.
 *
 *  What is already correct and worth keeping:
 *    - Nothing loads before a choice is made.
 *    - Declining is exactly as easy as accepting (same size, same prominence).
 *    - The choice can be withdrawn later via the footer's "Cookie settings".
 * ─────────────────────────────────────────────────────────────────────────
 */
/**
 * A solid surface, deliberately not `bg-card/95 backdrop-blur-md`. A blurred
 * fixed overlay makes the compositor re-blur everything behind it, which
 * measured as roughly 110ms of extra main-thread blocking on the home page
 * under Lighthouse's 4x CPU throttling. The shadow gives the same separation
 * for free.
 */
const PANEL_CLASS =
  "fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card " +
  "shadow-[0_-4px_24px_-10px_rgba(0,0,0,0.3)]";

export default function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    getServerConsent
  );

  // Nothing to ask about if analytics is not configured for this environment.
  if (!GTM_ID) return null;

  // "unknown" = server render / pre-hydration. Render nothing so the banner
  // never flashes for someone who already decided.
  // Anything other than null means a choice is already on record.
  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className={PANEL_CLASS}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2
            id="cookie-consent-title"
            className="text-sm font-semibold text-foreground"
          >
            Cookies on this site
          </h2>

          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {/* TODO: replace with final copy, reviewed alongside the privacy policy. */}
            We would like to use analytics cookies to understand how people use
            the site so we can improve it. We will not set them unless you
            agree. Read our{" "}
            <a
              href="/privacy"
              className="font-medium text-primary underline underline-offset-2"
            >
              privacy policy
            </a>
            .
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => writeConsent("denied")}
            className="inline-flex h-10 flex-1 cursor-pointer items-center justify-center rounded-md border border-input bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:flex-none"
          >
            Decline
          </button>

          <button
            type="button"
            onClick={() => writeConsent("granted")}
            className="inline-flex h-10 flex-1 cursor-pointer items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
