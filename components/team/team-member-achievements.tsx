import { Award, Check } from "lucide-react";
import type { TeamMember } from "@/dummy-data/about-data";

interface TeamMemberAchievementsProps {
  member: TeamMember;
}

export default function TeamMemberAchievements({
  member,
}: TeamMemberAchievementsProps) {
  return (
    <>
      <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
        <div className="mb-6 flex items-center gap-2">
          <Award className="h-6 w-6 text-gold-ink" />

          <h2 className="font-display text-2xl font-semibold text-foreground">
            Key Achievements
          </h2>
        </div>

        <div className="space-y-3">
          {member.achievements.map((achievement) => (
            <div
              key={achievement}
              className="flex gap-4 rounded-lg border border-border bg-card/50 p-4 transition-all duration-300 hover:border-primary hover:bg-card"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4" />
              </div>

              <p className="flex-1 text-sm text-foreground">{achievement}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="animate-fade-up rounded-lg border border-border bg-card p-6 text-center"
        style={{ animationDelay: "250ms" }}
      >
        <p className="mb-1 text-sm text-muted-foreground">
          Joined The Quran Group
        </p>

        <p className="font-display text-lg font-semibold text-foreground">
          {new Date(member.joinedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </>
  );
}
