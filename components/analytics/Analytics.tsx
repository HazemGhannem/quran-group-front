"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

import {
  GTM_ID,
  getServerConsent,
  readConsent,
  subscribeConsent,
} from "@/lib/analytics/consent";

/** Lazy-loaded so GTM code is only downloaded after consent. */
const GoogleTagManager = dynamic(
  () => import("@next/third-parties/google").then((m) => m.GoogleTagManager),
  { ssr: false }
);

/** Loads GTM only when NEXT_PUBLIC_GTM_ID is set and the visitor has consented. */
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
