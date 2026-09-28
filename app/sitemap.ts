import type { MetadataRoute } from "next";
import { TEAM } from "@/dummy-data/about-data";

const SITE_URL = "https://thequrangroup.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/team", changeFrequency: "monthly", priority: 0.7 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
    { path: "/apply/teacher", changeFrequency: "monthly", priority: 0.6 },
    { path: "/register", changeFrequency: "yearly", priority: 0.4 },
  ] as const;

  const staticRoutes: MetadataRoute.Sitemap = pages.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  // Course routes are left out while /courses redirects to the home page.

  const teamRoutes: MetadataRoute.Sitemap = TEAM.map((member) => ({
    url: `${SITE_URL}/team/${member.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...teamRoutes];
}
