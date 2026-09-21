import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Quran Group collects, uses, and protects your personal information.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we collect, use, and protect your information."
    >
      <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-foreground">
          This policy is being prepared
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
          Our full privacy policy is currently being reviewed before
          publication. In the meantime, if you have any question about what
          data we hold or how it is used, please get in touch and we will
          answer directly.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Contact us
        </Link>
      </div>
    </PageShell>
  );
}
