import { Briefcase } from "lucide-react";
import type { TeamMember } from "@/dummy-data/about-data";

interface TeamMemberExpertiseProps {
  member: TeamMember;
}

export default function TeamMemberExpertise({
  member,
}: TeamMemberExpertiseProps) {
  if (!member.expertise?.length) return null;

  return (
    <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
      <div className="mb-6 flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-primary" />

        <h2 className="font-display text-2xl font-semibold text-foreground">
          Areas of Expertise
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {member.expertise.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-border bg-card/50 px-4 py-3 transition-all duration-300 hover:border-primary hover:bg-card"
          >
            <p className="text-sm font-medium text-foreground">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
