import type { ReactNode } from "react";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}

/** Shared hero + prose wrapper for simple content pages. */
export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: PageShellProps) {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-border bg-gradient-hero">
        <div
          className="geometric-pattern absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
              {intro}
            </p>
          )}
        </div>
      </section>

      {children && (
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          {children}
        </section>
      )}
    </div>
  );
}
