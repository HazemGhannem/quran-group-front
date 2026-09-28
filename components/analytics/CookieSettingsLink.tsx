"use client";

import { GTM_ID, resetConsent } from "@/lib/analytics/consent";

/**
 * Lets someone change their mind. Withdrawing consent has to be as easy as
 * giving it, so this sits in the footer next to Privacy and Terms.
 */
export default function CookieSettingsLink({
  className = "",
}: {
  className?: string;
}) {
  if (!GTM_ID) return null;

  return (
    <button
      type="button"
      onClick={resetConsent}
      className={`cursor-pointer transition-colors hover:text-primary-foreground ${className}`}
    >
      Cookie settings
    </button>
  );
}
