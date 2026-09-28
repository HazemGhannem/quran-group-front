"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

import {
  GTM_ID,
  getServerConsent,
  readConsent,
  subscribeConsent,
} from "@/lib/analytics/consent";

/**
 * Loaded lazily rather than imported at the top level. A static import pulls
 * the GTM wrapper and next/script into the shared client bundle on every page
 * (~18KB) even when it never renders. With dynamic(), the chunk is only
 * fetched once consent is actually granted — which for a declining visitor is
 * never.
 */
const GoogleTagManager = dynamic(
  () => import("@next/third-parties/google").then((m) => m.GoogleTagManager),
  { ssr: false }
);

/**
 * Loads Google Tag Manager, but only when both gates pass:
 *
 *   1. NEXT_PUBLIC_GTM_ID is set  — so local dev and preview builds never
 *      report into the production container.
 *   2. The visitor has granted consent — nothing Google-related is requested
 *      before that, which is what UK GDPR / PECR ask for.
 *
 * Until both are true this renders nothing at all: no script tag, no cookie,
 * no request to googletagmanager.com.
 */
export default function Analytics() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    getServerConsent
  );

  if (!GTM_ID) return null;
  if (consent !== "granted") return null;

  return <GoogleTagManager gtmId={GTM_ID} />;
}
