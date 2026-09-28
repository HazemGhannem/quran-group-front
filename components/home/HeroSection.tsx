import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBook from "@/components/home/HeroBook";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="geometric-pattern absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 h-[600px] w-[600px] rounded-full bg-gold/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <h1 className="mb-6 text-balance font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Your Journey Into
              <br />
              <span className="text-gold">Sacred Knowledge</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
              Comprehensive courses on Quran recitation, Tajweed, Fiqh, and
              more, taught by qualified scholars dedicated to authentic Islamic
              education.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/courses"
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gold px-8 font-semibold text-gold-foreground transition-colors hover:bg-gold/90 ${FOCUS_RING}`}
              >
                Explore Courses{" "}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/apply/teacher"
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 font-semibold text-white transition-colors hover:bg-white/10 ${FOCUS_RING}`}
              >
                Apply as Teacher
              </Link>
            </div>
          </div>

          {/* HeroBook is a pure server component (no hooks, no state) — it
              renders to static SVG/CSS and ships zero client-side JS. */}
          <div className="hidden items-center justify-center lg:flex">
            <HeroBook />
          </div>
        </div>
      </div>
    </section>
  );
}
