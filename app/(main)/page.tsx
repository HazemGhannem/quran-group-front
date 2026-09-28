import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import Hero from "@/components/home/HeroSection";
import WhyStudyWithUs from "@/components/home/WhyStudyWithUs";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Learn Quran, Tajweed & Fiqh Online",
  description:
    "Learn the Quran with qualified huffaz. Always free, with classes that fit your schedule and teachers you can ask directly.",
};
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      <Hero />
      <WhyStudyWithUs />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
