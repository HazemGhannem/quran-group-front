import Link from "next/link";
import { Clock, Mail, MessageCircle } from "lucide-react";
const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general questions and support",
    value: "info@thequrangroup.com",
    href: "mailto:info@thequrangroup.com",
  },
  {
    icon: MessageCircle,
    title: "Course Support",
    description: "Need help with your learning journey?",
    value: "We're here to help",
    href: "#contact-form",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We will try our best to get back to you",
    value: "Within a couple of days",
  },
];
export default function ContactInfo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {contactInfo.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold-ink transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-medium text-primary">
                {item.value}
              </p>
            </div>
          );
          if (item.href) {
            return (
              <Link key={item.title} href={item.href}>
                {content}
              </Link>
            );
          }
          return <div key={item.title}>{content}</div>;
        })}
      </div>
    </section>
  );
}
