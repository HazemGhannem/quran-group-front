import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { buildCoursesHref, type CourseFilters } from "@/lib/courses/filters";

interface CoursesPaginationProps {
  filters: CourseFilters;
  currentPage: number;
  totalPages: number;
}

const BASE =
  "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors";

export default function CoursesPagination({
  filters,
  currentPage,
  totalPages,
}: CoursesPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <nav
      aria-label="Course pagination"
      className="mt-12 flex items-center justify-center gap-2"
    >
      {isFirst ? (
        <span
          aria-disabled="true"
          className={`${BASE} border border-border text-muted-foreground opacity-40`}
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        </span>
      ) : (
        <Link
          href={buildCoursesHref(filters, { page: currentPage - 1 })}
          rel="prev"
          aria-label="Previous page"
          className={`${BASE} border border-border text-muted-foreground hover:border-primary hover:text-primary`}
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        </Link>
      )}

      {pages.map((page) => {
        const active = page === currentPage;

        return (
          <Link
            key={page}
            href={buildCoursesHref(filters, { page })}
            aria-label={`Page ${page}`}
            aria-current={active ? "page" : undefined}
            className={`${BASE} ${
              active
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {isLast ? (
        <span
          aria-disabled="true"
          className={`${BASE} border border-border text-muted-foreground opacity-40`}
        >
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </span>
      ) : (
        <Link
          href={buildCoursesHref(filters, { page: currentPage + 1 })}
          rel="next"
          aria-label="Next page"
          className={`${BASE} border border-border text-muted-foreground hover:border-primary hover:text-primary`}
        >
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      )}
    </nav>
  );
}
