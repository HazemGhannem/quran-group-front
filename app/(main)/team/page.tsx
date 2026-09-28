import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TEAM } from "@/dummy-data/about-data";
import TeamMemberCard from "@/components/team/team-member-card";

export const metadata = {
  title: "Our Team",
  alternates: { canonical: "/team" },
  description:
    "Meet the dedicated individuals working to serve the Quran and our community.",
};

export default function TeamPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="border-b border-border/60 bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center animate-fade-up">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
              Our Team
            </p>

            <h1 className="font-display text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl">
              Meet the People Behind the Mission
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Dedicated individuals from diverse backgrounds working together to
              serve the Quran and our global community. Each brings unique
              expertise and a shared commitment to Islamic education.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Join Our Mission
            </h2>

            <p className="mb-8 leading-relaxed text-muted-foreground">
              We&apos;re always looking for passionate individuals who want to make a
              difference in Islamic education. Whether you&apos;re a developer,
              educator, designer, or simply someone with a heart for serving the
              community, we&apos;d love to hear from you.
            </p>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition-all hover:opacity-95 hover:shadow-elegant"
            >
              Get started
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
