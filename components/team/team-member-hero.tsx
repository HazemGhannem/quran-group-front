import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/social";
import { roleIcons, type TeamMember } from "@/dummy-data/about-data";

interface TeamMemberHeroProps {
  member: TeamMember;
}

export default function TeamMemberHero({ member }: TeamMemberHeroProps) {
  const Icon = roleIcons[member.roleType];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>
        </div>
      </header>

      <section className="border-b border-border/60 bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl animate-fade-up">
            <div className="mb-8 flex justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-primary text-6xl font-semibold text-primary-foreground shadow-elegant">
                {member.initials}
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
                {member.name}
              </h1>

              <div className="flex items-center justify-center gap-2 text-lg font-medium text-primary">
                <Icon className="h-4 w-4" />
                <span>{member.role}</span>
              </div>

              <div className="flex justify-center gap-8 pt-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-foreground">
                    {member.achievements.length}
                  </div>
                  <div className="text-muted-foreground">Achievements</div>
                </div>

                <div className="text-center">
                  <div className="font-semibold text-foreground">
                    {member.expertise.length}
                  </div>
                  <div className="text-muted-foreground">Expertise Areas</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-4">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 transition-colors duration-200 group-hover:text-primary" />
                  </a>
                )}

                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="h-5 w-5 transition-colors duration-200 group-hover:text-primary" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
