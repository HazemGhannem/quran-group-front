"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CourseTabsProps {
  courseId: string;
}

const tabs = [
  {
    value: "overview",
    label: "Overview",
    path: "",
  },
  {
    value: "syllabus",
    label: "Syllabus",
    path: "/syllabus",
  },
  {
    value: "instructor",
    label: "Instructor",
    path: "/instructor",
  },
  {
    value: "reviews",
    label: "Reviews",
    path: "/reviews",
  },
] as const;

export default function CourseTabs({ courseId }: CourseTabsProps) {
  const pathname = usePathname();

  const basePath = `/courses/${courseId}`;

  return (
    <nav className="flex overflow-x-auto border-b border-border">
      {tabs.map((tab) => {
        const href = `${basePath}${tab.path}`;

        const active =
          tab.value === "overview" ? pathname === basePath : pathname === href;

        return (
          <Link
            key={tab.value}
            href={href}
            className={`shrink-0 border-b-2 px-5 py-4 text-sm font-medium transition-colors ${
              active
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
