import type { Course } from "@/dummy-data/course-data";

export const SITE_URL = "https://thequrangroup.space";
export const ORG_NAME = "The Quran Group";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: ORG_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "Learn the Quran, Tajweed, Fiqh, and Arabic with qualified teachers.",
  email: "info@thequrangroup.com",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61586010052765",
    "https://www.instagram.com/thequrangroup/",
    "https://www.linkedin.com/company/thequrangroup/",
    "https://www.youtube.com/@TheQuranGroup",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: ORG_NAME,
  url: SITE_URL,
  publisher: { "@type": "Organization", name: ORG_NAME },
};

export function courseSchema(course: Course) {
  const lessons =
    course.modules?.reduce((n, m) => n + m.lessons.length, 0) ?? 0;

  const ratings = course.reviews ?? [];
  const average =
    ratings.length > 0
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
      : null;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${SITE_URL}/courses/${course.id}`,
    inLanguage: course.language ?? "English",
    educationalLevel: course.level,
    numberOfCredits: lessons,
    provider: {
      "@type": "EducationalOrganization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseSchedule: course.schedule,
      instructor: { "@type": "Person", name: course.instructor },
    },
    ...(average !== null && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: Number(average.toFixed(1)),
        reviewCount: ratings.length,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
