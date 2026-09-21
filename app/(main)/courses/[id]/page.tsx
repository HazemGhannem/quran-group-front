// app/courses/[id]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { courses } from "@/dummy-data/course-data";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, courseSchema } from "@/lib/seo/schema";

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

function getCourse(id: string) {
  return courses.find((course) => course.id === id);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourse(id);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: `${course.title} | The Quran Group`,
      description: course.description,
      type: "website",
      images: course.image ? [{ url: course.image }] : undefined,
    },
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { id } = await params;
  const course = getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div>
      <JsonLd data={courseSchema(course)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Courses", path: "/courses" },
          { name: course.title, path: `/courses/${course.id}` },
        ])}
      />

      <h2 className="text-2xl font-bold text-foreground">About this course</h2>

      <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
        {course.description}
      </p>
    </div>
  );
}
