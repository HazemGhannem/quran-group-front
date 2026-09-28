import { Quote } from "lucide-react";
import type { TeamMember } from "@/dummy-data/about-data";

interface TeamMemberAboutProps {
  member: TeamMember;
}

export default function TeamMemberAbout({ member }: TeamMemberAboutProps) {
  return (
    <>
      <div className="animate-fade-up">
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
          About {member.name.split(" ")[0]}
        </h2>

        <div className="prose prose-sm max-w-none space-y-4 leading-relaxed text-muted-foreground">
          {member.longBio.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-foreground/80">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {member.quote && (
        <div
          className="animate-fade-up space-y-4 rounded-2xl border-l-4 border-primary bg-card p-8"
          style={{ animationDelay: "100ms" }}
        >
          <div className="flex items-start gap-3">
            <Quote className="mt-1 h-6 w-6 shrink-0 text-gold-ink" />

            <div>
              <p className="font-serif text-lg italic text-foreground">
                {member.quote}
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                {member.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
