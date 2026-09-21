// app/courses/[id]/layout.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BookOpen,
  Award,
  Clock3,
  Globe,
  Layers,
  Users,
  CalendarDays,
} from "lucide-react";

import { courses } from "@/dummy-data/course-data";
import CourseTabs from "@/components/courses/course-tabs";

// Every course is known at build time, so prerender all of them instead of
// server-rendering each on first request.
export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

interface CourseLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    id: string;
  }>;
}

function getCourse(id: string) {
  return courses.find((course) => course.id === id);
}

export default async function CourseLayout({
  children,
  params,
}: CourseLayoutProps) {
  const { id } = await params;
  const course = getCourse(id);

  if (!course) {
    notFound();
  }

  const totalLessons =
    course.modules?.reduce(
      (total, module) => total + module.lessons.length,
      0
    ) ?? 0;

  return (
    <div className="bg-background">
      {/* Back */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to courses
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Left */}
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold capitalize text-primary">
                  {course.category.replace("-", " ")}
                </span>

                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {course.level}
                </span>
              </div>

              <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                {course.description}
              </p>

              {/* Instructor */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">Instructor</p>

                  <p className="font-semibold text-foreground">
                    {course.instructor}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <CourseStat
                  icon={Clock3}
                  label="Duration"
                  value={course.duration}
                />

                <CourseStat
                  icon={BookOpen}
                  label="Lessons"
                  value={String(totalLessons)}
                />

                <CourseStat
                  icon={Users}
                  label="Students"
                  value={String(course.students)}
                />

                <CourseStat
                  icon={Award}
                  label="Certificate"
                  value={course.certificate ? "Included" : "No"}
                />
              </div>
            </div>

            {/* Join Course */}
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm lg:sticky lg:top-24">
              {course.image && (
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={course.image}
                    alt={`${course.title} course cover`}
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="p-6">
                <p className="text-sm text-muted-foreground">
                  Begin your journey of knowledge
                </p>

                <div className="mt-2 text-2xl font-bold text-foreground">
                  {course.duration}
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {totalLessons} lessons · {course.modules?.length ?? 0} modules
                </p>

                <button
                  type="button"
                  className="mt-6 flex h-11 w-full items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Join Course
                </button>

                <div className="mt-5 space-y-3 border-t border-border pt-5">
                  <CourseFeature
                    icon={Globe}
                    text={course.language ?? "English"}
                  />

                  <CourseFeature icon={CalendarDays} text={course.schedule} />

                  <CourseFeature
                    icon={Award}
                    text={
                      course.certificate
                        ? "Certificate included"
                        : "No certificate"
                    }
                  />

                  <CourseFeature
                    icon={Users}
                    text={
                      course.audience === "all"
                        ? "Open to everyone"
                        : course.audience === "male"
                        ? "For brothers"
                        : "For sisters"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Content */}
          <div>
            <CourseTabs courseId={course.id} />

            <div className="pt-10">{children}</div>
          </div>

          {/* Course Details */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground">Course Details</h3>

              <div className="mt-5 space-y-4">
                <DetailRow
                  icon={Clock3}
                  label="Duration"
                  value={course.duration}
                />

                <DetailRow
                  icon={BookOpen}
                  label="Lessons"
                  value={String(totalLessons)}
                />

                <DetailRow
                  icon={Layers}
                  label="Modules"
                  value={String(course.modules?.length ?? 0)}
                />

                <DetailRow
                  icon={Users}
                  label="Students"
                  value={String(course.students)}
                />

                <DetailRow
                  icon={Globe}
                  label="Language"
                  value={course.language ?? "English"}
                />

                <DetailRow
                  icon={Award}
                  label="Certificate"
                  value={course.certificate ? "Included" : "Not included"}
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function CourseStat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <Icon className="h-4 w-4 text-primary" />

      <p className="mt-3 text-lg font-semibold text-foreground">{value}</p>

      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function CourseFeature({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <Icon className="h-4 w-4 shrink-0 text-primary" />
      {text}
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon className="h-4 w-4" />
        {label}
      </div>

      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}
