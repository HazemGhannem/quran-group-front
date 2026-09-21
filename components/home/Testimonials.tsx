import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  country: string;
  course: string;
  quote: string;
}

// Country names read correctly everywhere (flag emoji glyphs are missing on
// some platforms/screen readers, e.g. Windows), so we spell them out.
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amina Hassan",
    country: "Saudi Arabia",
    course: "Tajweed Fundamentals",
    quote:
      "My recitation improved dramatically within a month. The teacher is incredibly patient and knowledgeable.",
  },
  {
    name: "Bilal Okonkwo",
    country: "Nigeria",
    course: "Quranic Arabic",
    quote:
      "I can now read the Quran with understanding. This platform changed my relationship with the Book of Allah.",
  },
  {
    name: "Maryam Al-Turki",
    country: "Turkey",
    course: "Fiqh Basics",
    quote:
      "Structured, clear, and deeply rooted in scholarship. Finally a platform that doesn't compromise on quality.",
  },
];

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
            What Our Students Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, country, course, quote }, i) => (
            <figure
              key={name}
              className="glass animate-fade-up rounded-xl p-6"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="mb-3 flex items-center gap-1"
                role="img"
                aria-label="Rated 5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, j) => (
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
                  <p className="text-sm font-semibold">
                    {name}{" "}
                    <span className="text-muted-foreground">— {country}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{course}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
