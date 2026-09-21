import {
  courses,
  type Course,
  type CourseAudience,
  type CourseCategory,
  type CourseLevel,
} from "@/dummy-data/course-data";

export const COURSES_PER_PAGE = 6;

export const CATEGORY_VALUES = [
  "quran",
  "tajweed",
  "classical-arabic",
  "fiqh",
  "history",
] as const satisfies readonly CourseCategory[];

export const AUDIENCE_VALUES = [
  "all",
  "male",
  "female",
] as const satisfies readonly CourseAudience[];

export const LEVEL_VALUES = [
  "Beginner",
  "Intermediate",
  "Advanced",
] as const satisfies readonly CourseLevel[];

export interface CourseFilters {
  category: CourseCategory | "all";
  audience: CourseAudience | "all";
  level: CourseLevel | "all";
  page: number;
}

/** Raw `searchParams` as handed to a page — every value may be absent or repeated. */
export type RawSearchParams = Record<string, string | string[] | undefined>;

function one(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

/**
 * Parse URL search params into filters, falling back to "all" for anything
 * missing or not in the allowed set. Never throws on hostile input.
 */
export function parseFilters(params: RawSearchParams): CourseFilters {
  const pick = <T extends string>(
    raw: string | undefined,
    allowed: readonly T[]
  ): T | "all" => (allowed.includes(raw as T) ? (raw as T) : "all");

  const page = Number.parseInt(one(params.page) ?? "1", 10);

  return {
    category: pick(one(params.category), CATEGORY_VALUES),
    audience: pick(one(params.audience), AUDIENCE_VALUES),
    level: pick(one(params.level), LEVEL_VALUES),
    page: Number.isFinite(page) && page > 0 ? page : 1,
  };
}

export function filterCourses(filters: CourseFilters): Course[] {
  return courses.filter(
    (course) =>
      (filters.category === "all" || course.category === filters.category) &&
      (filters.audience === "all" || course.audience === filters.audience) &&
      (filters.level === "all" || course.level === filters.level)
  );
}

export function paginate(list: Course[], page: number) {
  const totalPages = Math.max(1, Math.ceil(list.length / COURSES_PER_PAGE));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * COURSES_PER_PAGE;

  return {
    items: list.slice(start, start + COURSES_PER_PAGE),
    currentPage: current,
    totalPages,
  };
}

export function hasActiveFilters(filters: CourseFilters): boolean {
  return (
    filters.category !== "all" ||
    filters.audience !== "all" ||
    filters.level !== "all"
  );
}

/**
 * Build a `/courses` href from the current filters plus an override.
 * Defaults are omitted so the canonical unfiltered URL stays clean.
 */
export function buildCoursesHref(
  filters: CourseFilters,
  override: Partial<CourseFilters>
): string {
  const next = { ...filters, ...override };

  // Any filter change resets pagination unless the page was set explicitly.
  if (override.page === undefined) next.page = 1;

  const qs = new URLSearchParams();
  if (next.category !== "all") qs.set("category", next.category);
  if (next.audience !== "all") qs.set("audience", next.audience);
  if (next.level !== "all") qs.set("level", next.level);
  if (next.page > 1) qs.set("page", String(next.page));

  const query = qs.toString();
  return query ? `/courses?${query}` : "/courses";
}
