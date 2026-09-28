import Link from "next/link";
import {
  BookOpen,
  BookMarked,
  Languages,
  Scale,
  History,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import {
  buildCoursesHref,
  type CourseFilters,
} from "@/lib/courses/filters";
import type {
  CourseAudience,
  CourseCategory,
  CourseLevel,
} from "@/dummy-data/course-data";

/** Filters are plain links, so this stays a Server Component. */

const categories: { value: CourseCategory | "all"; label: string; icon: LucideIcon }[] = [
  { value: "all", label: "All Courses", icon: Sparkles },
  { value: "quran", label: "Quran", icon: BookOpen },
  { value: "tajweed", label: "Tajweed", icon: BookMarked },
  { value: "classical-arabic", label: "Arabic", icon: Languages },
  { value: "fiqh", label: "Fiqh", icon: Scale },
  { value: "history", label: "History", icon: History },
];

const audiences: { value: CourseAudience | "all"; label: string }[] = [
  { value: "all", label: "Everyone" },
  { value: "male", label: "Brothers" },
  { value: "female", label: "Sisters" },
];

const levels: { value: CourseLevel | "all"; label: string }[] = [
  { value: "all", label: "All levels" },
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];

export default function CoursesFilters({
  filters,
}: {
  filters: CourseFilters;
}) {
  return (
    <section className="mb-10" aria-labelledby="filters-heading">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <Users aria-hidden="true" className="h-4 w-4 text-primary" />

          <h2
            id="filters-heading"
            className="text-sm font-semibold text-foreground"
          >
            Explore our courses
          </h2>
        </div>

        <p className="mt-1 text-sm text-muted-foreground">
          Choose a subject or refine your learning experience.
        </p>
      </div>

      {/* Categories */}
      <nav aria-label="Filter by subject" className="mb-6 overflow-x-auto pb-1">
        <ul className="flex min-w-max list-none gap-2">
          {categories.map(({ value, label, icon: Icon }) => {
            const active = filters.category === value;

            return (
              <li key={value}>
                <Link
                  href={buildCoursesHref(filters, { category: value })}
                  aria-current={active ? "true" : undefined}
                  className={`inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-input bg-background text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                  }`}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Secondary filters */}
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/20 p-4 sm:flex-row sm:items-center sm:justify-between">
        <FilterGroup
          label="Audience"
          options={audiences}
          active={filters.audience}
          hrefFor={(value) =>
            buildCoursesHref(filters, {
              audience: value as CourseAudience | "all",
            })
          }
        />

        <div aria-hidden="true" className="hidden h-8 w-px bg-border sm:block" />

        <FilterGroup
          label="Level"
          options={levels}
          active={filters.level}
          hrefFor={(value) =>
            buildCoursesHref(filters, { level: value as CourseLevel | "all" })
          }
        />
      </div>
    </section>
  );
}

function FilterGroup({
  label,
  options,
  active,
  hrefFor,
}: {
  label: string;
  options: readonly { value: string; label: string }[];
  active: string;
  hrefFor: (value: string) => string;
}) {
  return (
    <nav
      aria-label={`Filter by ${label.toLowerCase()}`}
      className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3"
    >
      <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>

      <ul className="flex list-none flex-wrap gap-1.5">
        {options.map((option) => {
          const isActive = active === option.value;

          return (
            <li key={option.value}>
              <Link
                href={hrefFor(option.value)}
                aria-current={isActive ? "true" : undefined}
                className={`inline-flex h-8 items-center rounded-lg px-3 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "text-muted-foreground hover:bg-background hover:text-foreground"
                }`}
              >
                {option.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
