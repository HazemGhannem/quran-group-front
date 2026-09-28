/**
 * Analytics consent store.
 *
 * UK GDPR / PECR require consent *before* non-essential analytics cookies are
 * set, so nothing Google-related loads until `readConsent()` returns "granted".
 *
 * Why a cookie read in the browser rather than `cookies()` from next/headers:
 * calling `cookies()` in the root layout opts the entire app out of static
 * rendering. That would turn all 46 prerendered pages into per-request renders
 * and undo the performance work. Consent is only needed client-side, so it is
 * read client-side.
 *
 * Exposed as an external store so components can subscribe with
 * `useSyncExternalStore` — that avoids a hydration mismatch (the server has no
 * idea what the visitor chose) without a setState-in-effect.
 */

export const CONSENT_COOKIE = "tqg_analytics_consent";

/** One year, the usual ceiling for a consent record. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

const CHANGE_EVENT = "tqg:consent-change";

export type Consent = "granted" | "denied";

/**
 * Three states, not two. "unknown" is what the server and the hydration pass
 * see, because a statically cached page is shared by every visitor and cannot
 * know who is reading it.
 *
 * Rendering nothing for "unknown" means a returning visitor who already chose
 * never sees the banner flash, and a visitor without JavaScript never sees a
 * banner they could not dismiss (GTM cannot load for them either, so the two
 * stay consistent).
 */
export type ConsentState = Consent | null | "unknown";

/** "granted" | "denied" once chosen; null while the visitor has not decided. */
export function readConsent(): ConsentState {
  if (typeof document === "undefined") return "unknown";

  try {
    const match = document.cookie.match(
      new RegExp(`(?:^|;\s*)${CONSENT_COOKIE}=(granted|denied)`)
    );

    return match ? (match[1] as Consent) : null;
  } catch {
    // Cookies can be blocked entirely; treat that as "no consent given".
    return null;
  }
}

export function writeConsent(value: Consent): void {
  if (typeof document === "undefined") return;

  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";

    document.cookie =
      `${CONSENT_COOKIE}=${value}; Max-Age=${MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
  } catch {
    // If we cannot persist the choice, still notify listeners so the current
    // page reflects it for this session.
  }

  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Clears the record so the banner reappears — used by "Cookie settings". */
export function resetConsent(): void {
  if (typeof document === "undefined") return;

  try {
    document.cookie = `${CONSENT_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
  } catch {
    // ignore
  }

  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeConsent(onChange: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

/**
 * The server cannot know the visitor's choice without reading cookies, which
 * would force dynamic rendering. It reports "unknown" so both the prerendered
 * HTML and the hydration pass agree, and the real value is picked up straight
 * after hydration.
 */
export function getServerConsent(): ConsentState {
  return "unknown";
}

/** Undefined when the env var is unset, which disables analytics entirely. */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
