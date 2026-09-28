import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/dummy-data/about-data";

// Same real student reviews shown on the About page, kept in one place.
export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-gradient-to-b from-muted/30 to-background px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="font-label mb-2 text-xs font-semibold uppercase tracking-widest text-gold-ink">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="font-display text-4xl font-semibold"
          >
            Real Student Reviews
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map(({ name, country, stars, quote }, i) => (
            <figure
              key={name}
              className="glass animate-fade-up rounded-xl p-6"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="mb-3 flex items-center gap-1"
                role="img"
                aria-label={`Rated ${stars} out of 5 stars`}
              >
                {Array.from({ length: stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-gold text-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mb-4 text-sm italic leading-relaxed text-foreground/80">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary"
                  aria-hidden="true"
                >
                  {name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-xs text-muted-foreground">{country}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
