import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-10 text-center lg:p-16">
          <div
            className="geometric-pattern absolute inset-0 opacity-[0.04]"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 h-48 w-48 rounded-bl-full bg-gold/[0.06]"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mb-4 font-display text-3xl font-semibold text-white lg:text-4xl">
              Begin Your Journey Today
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-primary-foreground/70">
              Join students from around the world studying the Quran and
              Islamic sciences with qualified teachers.
            </p>
            <Link
              href="/register"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gold px-8 font-semibold text-gold-foreground transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
