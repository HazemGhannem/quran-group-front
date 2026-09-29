import type { Metadata } from "next";
import Link from "next/link";
import { RotateCcw } from "lucide-react";

import CoursesHero from "@/components/courses/courses-hero";
import CoursesFilters from "@/components/courses/courses-filters";
import CourseGrid from "@/components/courses/course-grid";
import CoursesPagination from "@/components/courses/courses-pagination";
import {
  filterCourses,
  hasActiveFilters,
  paginate,
  parseFilters,
  type RawSearchParams,
} from "@/lib/courses/filters";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore Quran, Tajweed, Classical Arabic, Fiqh, and Islamic History courses for brothers and sisters at every level.",
  keywords: [
    "Quran courses",
    "Tajweed courses",
    "Islamic courses",
    "Classical Arabic",
    "Fiqh",
    "Islamic History",
    "Quran learning",
  ],
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Courses | The Quran Group",
    description:
      "Explore Quran, Tajweed, Classical Arabic, Fiqh, and Islamic History courses for brothers and sisters.",
    url: "/courses",
    type: "website",
  },
};

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const filters = parseFilters(await searchParams);
  const matches = filterCourses(filters);
  const { items, currentPage, totalPages } = paginate(matches, filters.page);
  const filtered = hasActiveFilters(filters);

  return (
    <div className="bg-background">
      <CoursesHero />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <CoursesFilters filters={filters} />

        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" aria-live="polite">
            <span className="font-semibold text-foreground">
              {matches.length}
            </span>
            {matches.length === 1 ? "course" : "courses"} available
          </p>

          {filtered && (
            <Link
              href="/courses"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
              Reset filters
            </Link>
          )}
        </div>

        {items.length > 0 ? (
          <>
            <CourseGrid courses={items} />

            <CoursesPagination
              filters={filters}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 px-6 text-center">
            <h2 className="font-display text-lg font-semibold text-foreground">
              No courses found
            </h2>

            <p className="my-2 max-w-md text-sm text-muted-foreground">
              Try changing your filters to find courses that match your
              interests.
            </p>

            <Link
              href="/courses"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Clear filters
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
