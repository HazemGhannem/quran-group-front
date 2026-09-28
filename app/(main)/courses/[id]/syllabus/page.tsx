import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { courses } from "@/dummy-data/course-data";

// Prerender every course at build time.
export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SyllabusPage({ params }: PageProps) {
  const { id } = await params;

  const course = courses.find((course) => course.id === id);

  if (!course) {
    notFound();
  }

  const totalLessons =
    course.modules?.reduce(
      (total, module) => total + module.lessons.length,
      0
    ) ?? 0;

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground">Course syllabus</h2>

      <p className="mt-1 text-sm text-muted-foreground">
        {course.modules?.length ?? 0} modules · {totalLessons} lessons
      </p>

      <div className="mt-6 space-y-3">
        {course.modules?.map((module, moduleIndex) => (
          <details
            key={module.id}
            open={moduleIndex === 0}
            className="group overflow-hidden rounded-xl border border-border bg-background"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                  {moduleIndex + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">
                    {module.title}
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {module.lessons.length}{" "}
                    {module.lessons.length === 1 ? "lesson" : "lessons"}
                  </p>
                </div>
              </div>

              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>

            <div className="border-t border-border">
              {module.lessons.map((lesson, lessonIndex) => (
                <div
                  key={lesson.id}
                  className="flex gap-4 border-b border-border p-4 last:border-b-0"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    {lessonIndex + 1}
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground">
                      {lesson.title}
                    </h4>

                    {lesson.description && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {lesson.description}
                      </p>
                    )}

                    {lesson.duration && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        {lesson.duration}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
