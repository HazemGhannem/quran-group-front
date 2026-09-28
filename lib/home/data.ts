// Home-page data, derived from the course catalogue and team data.

import { courses, type Course } from "@/dummy-data/course-data";
import { TEAM } from "@/dummy-data/about-data";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface CourseSummary {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  enrolledCount: number;
  lessonCount: number;
  teacherName: string;
  thumbnailUrl: string | null;
}

export interface Scholar {
  id: string;
  fullName: string;
  bio: string | null;
  specialization: string;
  avatarUrl: string | null;
}

/** Catalogue ids to surface on the home page, in display order. */
const FEATURED_IDS = [
  "quran-foundations",
  "classical-arabic",
  "islamic-history",
] as const;

const DIFFICULTY_BY_LEVEL: Record<Course["level"], Difficulty> = {
  Beginner: "beginner",
  Intermediate: "intermediate",
  Advanced: "advanced",
};

function toSummary(course: Course): CourseSummary {
  return {
    id: course.id,
    title: course.title,
    description: course.description,
    category: course.category,
    difficulty: DIFFICULTY_BY_LEVEL[course.level],
    enrolledCount: course.students,
    lessonCount:
      course.modules?.reduce((n, m) => n + m.lessons.length, 0) ?? 0,
    teacherName: course.instructor,
    thumbnailUrl: course.image ?? null,
  };
}

export const FEATURED_COURSES: CourseSummary[] = FEATURED_IDS.map((id) => {
  const course = courses.find((c) => c.id === id);

  if (!course) {
    // Fails the build rather than silently shipping a card that 404s.
    throw new Error(
      `FEATURED_IDS references unknown course "${id}". Update lib/home/data.ts.`
    );
  }

  return toSummary(course);
});

/** Team members who teach, surfaced as the "scholars" rail. */
export const FEATURED_SCHOLARS: Scholar[] = TEAM.slice(0, 4).map((member) => ({
  id: member.id,
  fullName: member.name,
  bio: member.bio,
  specialization: member.expertise?.[0] ?? member.role,
  avatarUrl: member.image ?? null,
}));
