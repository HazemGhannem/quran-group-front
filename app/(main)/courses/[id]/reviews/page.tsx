import { notFound } from "next/navigation";
import { Star } from "lucide-react";

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

export default async function ReviewsPage({ params }: PageProps) {
  const { id } = await params;

  const course = courses.find((course) => course.id === id);

  if (!course) {
    notFound();
  }

  const reviews = course.reviews ?? [];

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((total, review) => total + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : null;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">{course.title}</p>

          <h2 className="mt-2 text-2xl font-bold text-foreground">
            Student Reviews
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Feedback from students who have joined this course.
          </p>
        </div>

        {averageRating && (
          <div className="flex items-center gap-2 rounded-xl border border-border px-4 py-3">
            <Star className="h-5 w-5 fill-primary text-primary" />

            <span className="text-lg font-bold text-foreground">
              {averageRating}
            </span>

            <span className="text-sm text-muted-foreground">
              ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
            </span>
          </div>
        )}
      </div>

      {reviews.length > 0 ? (
        <div className="mt-8 space-y-4">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">Student</p>
                </div>

                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < review.rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {review.comment}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center">
          <Star className="mx-auto h-8 w-8 text-muted-foreground/40" />

          <h3 className="mt-4 font-semibold text-foreground">No reviews yet</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Be the first student to share your experience.
          </p>
        </div>
      )}
    </div>
  );
}
