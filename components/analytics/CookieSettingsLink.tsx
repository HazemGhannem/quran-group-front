"use client";

import { GTM_ID, resetConsent } from "@/lib/analytics/consent";

/** Footer link that lets visitors withdraw or change consent. */
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
