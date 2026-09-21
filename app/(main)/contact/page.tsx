import type { Metadata } from "next";
import ContactForm from "@/components/contact-us/contact-form";
import ContactHelp from "@/components/contact-us/contact-help";
import ContactHero from "@/components/contact-us/contact-hero";
import ContactInfo from "@/components/contact-us/contact-info";
import ContactSidePanel from "@/components/contact-us/contact-side-panel";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact" },
  description:
    "Get in touch with The Quran Group. Contact us for questions, support, courses, and general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <ContactHero />

      <ContactInfo />

      <section
        id="contact-form"
        className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"
      >
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <ContactSidePanel />
        </div>
      </section>

      <ContactHelp />
    </div>
  );
}
