 import { Course } from "@/dummy-data/course-data";
import CourseCard from "./course-card";

interface CourseSectionProps {
  title: string;
  description: string;
  courses: Course[];
}

export default function CourseSection({
  title,
  description,
  courses,
}: CourseSectionProps) {
  if (courses.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-primary" />

          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {title}
          </h2>
        </div>

        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
