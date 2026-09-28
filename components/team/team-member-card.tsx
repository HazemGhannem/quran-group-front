import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TeamAvatar from "@/components/team/team-avatar";
import { roleIcons, type TeamMember } from "@/dummy-data/about-data";

interface TeamMemberCardProps {
  member: TeamMember;
  index?: number;
}

export default function TeamMemberCard({
  member,
  index = 0,
}: TeamMemberCardProps) {
  const Icon = roleIcons[member.roleType];

  return (
    <Link href={`/team/${member.id}`} className="group">
      <article
        className="relative h-full overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-elegant"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

        {/* Avatar */}
        <TeamAvatar
          member={member}
          sizes="128px"
          className="z-10 mx-auto mb-6 h-32 w-32 text-3xl ring-2 ring-transparent ring-offset-4 ring-offset-background transition-all duration-300 group-hover:ring-gold/60 group-hover:ring-offset-card"
        />

        {/* Name */}
        <h3 className="font-display text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
          {member.name}
        </h3>

        {/* Role */}
        <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
          <Icon className="h-4 w-4" />
          <span>{member.role}</span>
        </div>

        {/* Bio */}
        <p className="mt-4 line-clamp-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
          {member.bio}
        </p>

        {/* Decorative line */}
        <div className="mx-auto mt-6 h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />

        {/* View Profile */}
        <div className="mt-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center text-sm font-semibold text-primary">
            View Profile
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
