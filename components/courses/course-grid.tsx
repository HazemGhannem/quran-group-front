 import { Course } from "@/dummy-data/course-data";
import CourseCard from "./course-card";

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
        <h3 className="font-display text-xl font-semibold text-foreground">
          No courses found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Try changing your filters to find available courses.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
