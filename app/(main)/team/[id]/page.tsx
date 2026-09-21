import { notFound } from "next/navigation";
import { getTeamMemberById, TEAM } from "@/dummy-data/about-data";
import TeamMemberHero from "@/components/team/team-member-hero";
import TeamMemberAbout from "@/components/team/team-member-about";
import TeamMemberExpertise from "@/components/team/team-member-expertise";
import TeamMemberAchievements from "@/components/team/team-member-achievements";
import RelatedTeamMembers from "@/components/team/related-team-members";
import TeamMemberCta from "@/components/team/team-member-cta";
import { Metadata } from "next";

export function generateStaticParams() {
  return TEAM.map((member) => ({ id: member.id }));
}

interface TeamMemberPageProps {
  params: Promise<{ id: string }>;
}
export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { id } = await params;
  const member = getTeamMemberById(id);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: member.name,
    description: member.bio,
  };
}
export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { id } = await params;

  const member = getTeamMemberById(id);

  if (!member) {
    notFound();
  }

  return (
    <div className="bg-background">
      <TeamMemberHero member={member} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-16">
            <TeamMemberAbout member={member} />
            <TeamMemberExpertise member={member} />
            <TeamMemberAchievements member={member} />
          </div>
        </div>
      </section>

      <RelatedTeamMembers members={TEAM} currentMemberId={member.id} />

      <TeamMemberCta member={member} />
    </div>
  );
}
