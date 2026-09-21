import { notFound } from "next/navigation";
import { UserRound } from "lucide-react";

import { courses } from "@/dummy-data/course-data";

// Every course is known at build time, so prerender all of them instead of
// server-rendering each on first request.
export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function InstructorPage({ params }: PageProps) {
  const { id } = await params;

  const course = courses.find((course) => course.id === id);

  if (!course) {
    notFound();
  }

  return (
    <div>
      <div>
        <p className="text-sm font-medium text-primary">{course.title}</p>

        <h2 className="mt-2 text-2xl font-bold text-foreground">
          Your Instructor
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Learn from an instructor dedicated to helping students develop their
          knowledge and understanding.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-background p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <UserRound className="h-9 w-9 text-primary" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {course.instructor}
            </h3>

            <p className="mt-1 text-sm text-primary">Course Instructor</p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              The instructor will guide you through the course material,
              lessons, and learning activities throughout the program.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border p-5">
          <p className="text-2xl font-bold text-foreground">
            {course.students}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Students enrolled
          </p>
        </div>

        <div className="rounded-xl border border-border p-5">
          <p className="text-2xl font-bold text-foreground">
            {course.modules?.length ?? 0}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Course modules</p>
        </div>

        <div className="rounded-xl border border-border p-5">
          <p className="text-2xl font-bold text-foreground">{course.level}</p>
          <p className="mt-1 text-sm text-muted-foreground">Course level</p>
        </div>
      </div>
    </div>
  );
}
