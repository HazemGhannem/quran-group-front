import type { Metadata } from "next";
import { FEATURED_COURSES, FEATURED_SCHOLARS } from "@/lib/home/data";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import Hero from "@/components/home/HeroSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import WhyStudyWithUs from "@/components/home/WhyStudyWithUs";
import Scholars from "@/components/home/Scholars";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Sacred Knowledge Academy — Learn Quran, Tajweed & Fiqh Online",
  description:
    "Study Quran recitation, Tajweed, Arabic, and Fiqh with qualified scholars. Ijazah-certified courses, live weekly sessions, and lifetime access.",
};
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      <Hero />
      <FeaturedCourses courses={FEATURED_COURSES} />
      <WhyStudyWithUs />
      <Scholars scholars={FEATURED_SCHOLARS} />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
