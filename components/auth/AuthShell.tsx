import Link from "next/link";
import { BookOpen } from "lucide-react";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  arabicVerse?: string;
  verseTranslation?: string;
  verseReference?: string;
}

export function AuthShell({
  title,
  subtitle,
  children,
  arabicVerse = "طَلَبُ الْعِلْمِ فَرِيضَةٌ",
  verseTranslation = "Seeking knowledge is an obligation.",
  verseReference = "— The Prophet ﷺ",
}: AuthShellProps) {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      {/* Brand / Quote panel */}
      <section
        aria-label="The Quran Group"
        className="relative hidden overflow-hidden bg-gradient-hero text-primary-foreground lg:block"
      >
        {/* Background pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 geometric-pattern opacity-15"
        />

        <div className="relative grid min-h-screen place-items-center p-12">
          <div className="w-full max-w-md text-center">
            {/* Logo */}
            <Link href="/" className="mb-16 inline-flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15 backdrop-blur-sm">
                <BookOpen aria-hidden="true" className="h-5 w-5" />
              </span>

              <span className="font-display text-xl font-semibold">
                The Quran Group
              </span>
            </Link>

            {/* Quote */}
            <blockquote>
              <p className="font-arabic text-5xl leading-relaxed text-gold">
                {arabicVerse}
              </p>

              <p className="mt-6 italic leading-relaxed text-white/80">
                &ldquo;{verseTranslation}&rdquo;
              </p>

              <footer className="mt-2 text-xs uppercase tracking-widest text-gold/80">
                {verseReference}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Form panel */}
      <section className="flex min-h-screen items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <Link href="/" className="mb-10 flex items-center gap-2 lg:hidden">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary">
              <BookOpen
                aria-hidden="true"
                className="h-4 w-4 text-primary-foreground"
              />
            </span>

            <span className="font-display text-lg font-semibold">
              The Quran Group
            </span>
          </Link>

          {/* Heading */}
          <header>
            <h1 className="font-display text-3xl font-semibold tracking-tight">
              {title}
            </h1>

            <p className="mt-2 leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          </header>

          {/* Content */}
          <div className="mt-8">{children}</div>
        </div>
      </section>
    </main>
  );
}
