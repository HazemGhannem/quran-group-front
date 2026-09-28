import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import type { CourseSummary, Difficulty } from "@/lib/home/data";

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  beginner: "bg-sage/80 border-sage/20",
  intermediate: "bg-gold/80 border-gold/20",
  advanced: "bg-destructive/80 border-destructive/20",
};

export default function FeaturedCourses({
  courses,
}: {
  courses: CourseSummary[];
}) {
  if (courses.length === 0) return null;

  return (
    <section
      aria-labelledby="featured-courses-heading"
      className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="container mx-auto">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-label mb-2 text-xs font-semibold uppercase tracking-widest text-gold-ink">
              Start today
            </p>
            <h2
              id="featured-courses-heading"
              className="font-display text-4xl font-semibold"
            >
              Featured Curricula
            </h2>
          </div>
          <Link
            href="/courses"
            className="hidden items-center gap-1 rounded-sm text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:flex"
          >
            All courses{" "}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group block animate-fade-up overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                {course.thumbnailUrl ? (
                  <>
                    {/* Only the first card loads eagerly. */}
                    <Image
                      src={course.thumbnailUrl}
                      alt={`${course.title} course cover`}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={i === 0}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-gold/10"
                    aria-hidden="true"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                      <BookOpen className="h-7 w-7" />
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm ${
                      DIFFICULTY_STYLES[course.difficulty]
                    }`}
                  >
                    {course.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="mb-2 line-clamp-2 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                  {course.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {course.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{course.enrolledCount.toLocaleString()} students</span>
                  <span aria-hidden="true" className="mx-1">
                    ·
                  </span>
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{course.lessonCount} lessons</span>
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary"
                    aria-hidden="true"
                  >
                    {course.teacherName[0]}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {course.teacherName}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
