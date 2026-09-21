export type CourseSummary = {
  id: string;
  title: string;
  description: string;
  course_type: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced" | string;
  enrolled_count: number;
  lesson_count: number;
  thumbnail_url: string | null;
  teacher: { full_name: string };
};

export type Scholar = {
  id: string;
  full_name: string;
  bio: string | null;
  specializations: string[];
  avatar_url: string | null;
  course_count: number;
};
