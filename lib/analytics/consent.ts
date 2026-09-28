/** Analytics consent, stored in a cookie and read client-side. Nothing loads until "granted". */

export const CONSENT_COOKIE = "tqg_analytics_consent";

/** One year, the usual ceiling for a consent record. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

const CHANGE_EVENT = "tqg:consent-change";

export type Consent = "granted" | "denied";

/** "unknown" = server render / before hydration; null = not decided yet. */
export type ConsentState = Consent | null | "unknown";

/** "granted" | "denied" once chosen; null while the visitor has not decided. */
export function readConsent(): ConsentState {
  if (typeof document === "undefined") return "unknown";

  try {
    const match = document.cookie.match(
      // `\\s` is needed in a template literal.
      new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=(granted|denied)`)
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
    // Still notify listeners if the cookie cannot be saved.
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

/** The server never knows the choice, so it reports "unknown". */
export function getServerConsent(): ConsentState {
  return "unknown";
}

/** Undefined when the env var is unset, which disables analytics entirely. */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
