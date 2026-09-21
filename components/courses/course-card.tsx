import Link from "next/link";
import { BookOpen, CalendarDays, Clock, Users } from "lucide-react";
import { Course } from "@/dummy-data/course-data";

interface CourseCardProps {
  course: Course;
}

const audienceLabels = {
  all: "Brothers & Sisters",
  male: "Brothers",
  female: "Sisters",
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      {/* Top */}
      <div className="relative flex h-44 shrink-0 items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-gold/10">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
          <BookOpen className="h-7 w-7" />
        </div>

        <div className="absolute left-4 top-4 rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {audienceLabels[course.audience]}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            {course.level}
          </span>

          <span className="text-xs text-muted-foreground">
            {course.students} students
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
          {course.title}
        </h3>

        <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-muted-foreground">
          {course.description}
        </p>

        <div className="mt-5 space-y-3 border-t border-border pt-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Users className="h-4 w-4 shrink-0 text-primary" />
            <span>{course.instructor}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 shrink-0 text-primary" />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
            <span>{course.schedule}</span>
          </div>
        </div>

        {/* Always at the same bottom position */}
        <Link href={`/courses/${course.id}`} className="mt-auto pt-6">
          <span className="flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            View Course
          </span>
        </Link>
      </div>
    </article>
  );
}
