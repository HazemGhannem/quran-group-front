import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="font-display text-6xl font-semibold text-gold-ink">404</p>

      <h1 className="mt-4 font-display text-3xl font-semibold text-foreground">
        Page not found
      </h1>

      <p className="mt-3 max-w-md text-muted-foreground">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to home
        </Link>

        <Link
          href="/courses"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
        >
          Browse courses
        </Link>
      </div>
    </div>
  );
}
