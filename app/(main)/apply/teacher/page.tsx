import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Apply as a Teacher",
  description:
    "Teach Quran, Tajweed, Arabic, or Fiqh with The Quran Group. Join a community of qualified scholars serving students worldwide.",
};

const REQUIREMENTS = [
  {
    icon: GraduationCap,
    title: "Qualified",
    desc: "Formal ijazah, a recognised degree, or equivalent scholarly training in your subject.",
  },
  {
    icon: BookOpen,
    title: "Experienced",
    desc: "Prior teaching experience, whether in a masjid, institute, or online setting.",
  },
  {
    icon: Users,
    title: "Committed",
    desc: "Able to hold regular weekly sessions and give students consistent feedback.",
  },
];

export default function ApplyTeacherPage() {
  return (
    <PageShell
      eyebrow="Teach with us"
      title="Apply as a Teacher"
      intro="Help students around the world build a lasting relationship with the Quran and the Islamic sciences."
    >
      <h2 className="font-display text-2xl font-semibold text-foreground">
        What we look for
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {REQUIREMENTS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-border p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
              <Icon className="h-5 w-5 text-gold-ink" aria-hidden="true" />
            </div>

            <h3 className="font-display text-lg font-semibold text-foreground">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-muted/20 p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-foreground">
          Ready to apply?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
          Send us a message with your background, the subjects you teach, and
          your availability. Our team reviews every application and will get
          back to you within a few days.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start your application
        </Link>
      </div>
    </PageShell>
  );
}
