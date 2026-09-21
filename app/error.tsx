"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        Something went wrong
      </h1>

      <p className="mt-3 max-w-md text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>

      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex h-11 cursor-pointer items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Try again
      </button>
    </div>
  );
}
