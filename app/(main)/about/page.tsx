import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { OFFERINGS, TESTIMONIALS } from "@/dummy-data/about-data";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about The Quran Group and our mission.",
};
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section
        aria-labelledby="about-heading"
        className="relative overflow-hidden bg-gradient-hero text-primary-foreground"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 geometric-pattern opacity-10"
        />

        <div className="relative container mx-auto px-4 py-20 text-center md:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
            Our Story
          </p>

          <h1
            id="about-heading"
            className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl"
          >
            Making Quran Education
            <br />
            Accessible to Everyone
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            We were founded on a simple belief: no one should be denied the
            opportunity to connect with the Quran because of time constraints
            or cost.
          </p>

          <blockquote className="mx-auto mt-10 inline-block rounded-2xl border border-white/20 bg-white/10 px-8 py-5 backdrop-blur-sm">
            <p className="font-arabic text-2xl leading-relaxed text-gold">
              طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
            </p>

            <p className="mt-2 text-sm italic text-white/70">
              &ldquo;Seeking knowledge is an obligation upon every
              Muslim.&rdquo;
            </p>

            <footer className="mt-1 text-xs uppercase tracking-widest text-gold/60">
              The Prophet ﷺ ·{" "}
              <a
                href="https://sunnah.com/ibnmajah:224"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-gold"
              >
                Sunan Ibn Majah 224
              </a>
            </footer>
          </blockquote>

          <p className="mx-auto mt-8 max-w-2xl text-base font-medium text-gold">
            Age is not a barrier. Time is not a barrier. Cost is not a barrier.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        aria-labelledby="mission-heading"
        className="container mx-auto px-4 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold-ink">
            Our Mission
          </p>

          <h2
            id="mission-heading"
            className="mb-6 font-display text-3xl font-semibold md:text-4xl"
          >
            Progress Over Perfection
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Our mission is to provide accessible, high-quality Islamic education
            to all, regardless of background, schedule, or circumstance. We
            believe that small, consistent steps matter more than waiting for
            perfect conditions. Your journey starts with one small step. Let us
            take it together.
          </p>

          <blockquote className="mt-8 border-l-4 border-gold pl-6 text-left">
            <p className="text-lg italic leading-relaxed text-foreground/80">
              &ldquo;We are called The Quran Group because that is exactly what
              we are: a group of people coming together around the
              Quran.&rdquo;
            </p>

            <footer className="mt-2 text-sm text-muted-foreground">
              Hafiz Isa Khan, Founder &amp; CEO
            </footer>
          </blockquote>
        </div>
      </section>

      {/* What we offer */}
      <section
        aria-labelledby="offer-heading"
        className="container mx-auto px-4 py-20"
      >
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold-ink">
            What We Offer
          </p>

          <h2
            id="offer-heading"
            className="font-display text-3xl font-semibold md:text-4xl"
          >
            Built Around Your Life
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
              </div>

              <h3 className="mb-2 font-display text-base font-semibold">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonials-heading"
        className="border-y border-border bg-gradient-subtle"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold-ink">
              Voices from Our Community
            </p>

            <h2
              id="testimonials-heading"
              className="font-display text-3xl font-semibold md:text-4xl"
            >
              Real Student Reviews
            </h2>

            <div
              className="mt-3 flex items-center justify-center gap-1"
              aria-label="4.0 out of 5 on Trustpilot"
            >
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  aria-hidden="true"
                  className="h-4 w-4 fill-gold text-gold"
                />
              ))}

              <span className="ml-2 text-sm text-muted-foreground">
                4.0 on Trustpilot
              </span>
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {TESTIMONIALS.map(({ name, country, stars, quote }) => (
              <article
                key={name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div
                  className="mb-3 flex items-center gap-1"
                  aria-label={`${stars} out of 5 stars`}
                >
                  {[...Array(stars)].map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="h-3.5 w-3.5 fill-gold text-gold"
                    />
                  ))}
                </div>

                <p className="mb-4 text-sm italic leading-relaxed text-foreground/80">
                  &ldquo;{quote}&rdquo;
                </p>

                <div className="flex items-center gap-2">
                  <div
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground"
                  >
                    {name[0]}
                  </div>

                  <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-muted-foreground">{country}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="join-heading"
        className="container mx-auto px-4 py-24 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold-ink">
            Join Us
          </p>

          <h2
            id="join-heading"
            className="mb-4 font-display text-3xl font-semibold md:text-4xl"
          >
            Whether you are starting for the first time or returning after years
            away
          </h2>

          <p className="mb-8 text-muted-foreground">
            Age is not a barrier. Time is not a barrier. Cost is not a barrier.
            There is a place for you here.
          </p>

          <div className="flex justify-center">
            <Link
              href="/register"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 font-medium text-primary-foreground shadow-soft transition-opacity hover:opacity-95"
            >
              Get started
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
