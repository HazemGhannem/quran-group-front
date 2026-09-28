import { Clock, Mail } from "lucide-react";

export default function ContactSidePanel() {
  return (
    <div className="relative overflow-hidden bg-primary p-8 text-primary-foreground sm:p-10 lg:p-12">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/10" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-gold/[0.06]" />

      <div className="relative flex h-full flex-col">
        <span className="text-sm font-semibold uppercase tracking-wider text-gold">
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
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
              <Mail className="h-5 w-5" />
            </div>

            <div>
              <p className="font-medium">Email</p>

              <a
                href="mailto:info@thequrangroup.com"
                className="mt-1 block text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                info@thequrangroup.com
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
              <Clock className="h-5 w-5" />
            </div>

            <div>
              <p className="font-medium">Support hours</p>

              <p className="mt-1 text-sm text-primary-foreground/70">
                We will try our best to get back to you within a couple of days.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
