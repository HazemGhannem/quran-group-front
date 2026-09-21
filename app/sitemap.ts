import type { MetadataRoute } from "next";
import { courses } from "@/dummy-data/course-data";
import { TEAM } from "@/dummy-data/about-data";

const SITE_URL = "https://thequrangroup.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/courses", changeFrequency: "weekly", priority: 0.9 },
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

  const courseRoutes: MetadataRoute.Sitemap = courses.flatMap((course) =>
    ["", "/syllabus", "/instructor", "/reviews"].map((tab) => ({
      url: `${SITE_URL}/courses/${course.id}${tab}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: tab === "" ? 0.8 : 0.5,
    }))
  );

  const teamRoutes: MetadataRoute.Sitemap = TEAM.map((member) => ({
    url: `${SITE_URL}/team/${member.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...courseRoutes, ...teamRoutes];
}
