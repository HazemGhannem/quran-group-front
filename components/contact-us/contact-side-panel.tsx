import Link from "next/link";
import { ArrowRight, Clock, Mail } from "lucide-react";

export default function ContactSidePanel() {
  return (
    <div className="relative overflow-hidden bg-primary p-8 text-primary-foreground sm:p-10 lg:p-12">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5" />

      <div className="relative flex h-full flex-col">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
          The Quran Group
        </span>

        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Your journey of knowledge starts with a conversation.
        </h2>

        <p className="mt-5 leading-7 text-primary-foreground/75">
          Have questions about our Quran, Tajweed, Fiqh, or Arabic courses? Our
          team is ready to guide you and help you find the right learning path.
        </p>

        <div className="mt-10 space-y-5">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <Mail className="h-5 w-5" />
            </div>

            <div>
              <p className="font-medium">Email</p>

              <a
                href="mailto:contact@thequrangroup.space"
                className="mt-1 block text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                contact@thequrangroup.space
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <Clock className="h-5 w-5" />
            </div>

            <div>
              <p className="font-medium">Support hours</p>

              <p className="mt-1 text-sm text-primary-foreground/70">
                We aim to respond within 24 to 48 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm leading-6 text-primary-foreground/75">
              Looking for a course instead?
            </p>

            <Link
              href="/courses"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            >
              Explore our courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
