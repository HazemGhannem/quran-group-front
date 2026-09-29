import Link from "next/link";
import TeamAvatar from "@/components/team/team-avatar";
import type { TeamMember } from "@/dummy-data/about-data";

interface RelatedTeamMembersProps {
  members: TeamMember[];
  currentMemberId: string;
}

export default function RelatedTeamMembers({
  members,
  currentMemberId,
}: RelatedTeamMembersProps) {
  const relatedMembers = members.filter(
    (member) => member.id !== currentMemberId
  );

  return (
    <section className="border-t border-border bg-gradient-subtle py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-display text-3xl font-semibold text-foreground">
          Meet Other Team Members
        </h2>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedMembers.map((member) => (
            <Link key={member.id} href={`/team/${member.id}`} className="group">
              <article className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-elegant">
                <TeamAvatar
                  member={member}
                  sizes="80px"
                  className="mx-auto mb-4 h-20 w-20 text-xl"
                />

                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {member.role}
                </p>

                <div className="mx-auto mt-4 h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
