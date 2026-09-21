import type { MetadataRoute } from "next";

const SITE_URL = "https://thequrangroup.space";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Utility route plus the legal pages that are still placeholders.
      disallow: ["/forgot-password", "/privacy", "/terms"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
