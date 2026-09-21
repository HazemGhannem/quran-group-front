import Link from "next/link";
import type { TeamMember } from "@/dummy-data/about-data";

interface TeamMemberCtaProps {
  member: TeamMember;
}

export default function TeamMemberCta({ member }: TeamMemberCtaProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Have a Question?
          </h2>

          <p className="mb-8 text-muted-foreground">
            Reach out to {member.name.split(" ")[0]} directly at
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="ml-1 font-medium text-primary transition-colors hover:text-primary/80"
              >
                {member.email}
              </a>
            )}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition-all hover:opacity-95 hover:shadow-elegant"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
