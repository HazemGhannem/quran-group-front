import type { LucideIcon } from "lucide-react";
import { Award, Clock, Globe, Shield } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Authentic Curriculum",
    desc: "Courses built on classical texts with chains of transmission (sanad) back to the Prophet.",
  },
  {
    icon: Award,
    title: "Ijazah Certification",
    desc: "Earn authenticated certificates upon completion, recognized by traditional institutions.",
  },
  {
    icon: Globe,
    title: "Live Sessions",
    desc: "Weekly live sessions with scholars for questions, review, and community learning.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    desc: "Study at your own pace with lifetime access to all course materials and recordings.",
  },
];

export default function WhyStudyWithUs() {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="bg-gradient-to-b from-background to-muted/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="font-label mb-2 text-xs font-semibold uppercase tracking-widest text-gold-ink">
            Why us
          </p>
          <h2
            id="why-us-heading"
            className="font-display text-4xl font-semibold"
          >
            Why Study With Us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="glass animate-fade-up rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                <Icon className="h-5 w-5 text-gold-ink" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
