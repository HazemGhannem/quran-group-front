import Link from "next/link";
import { ArrowRight } from "lucide-react";

const helpLinks = [
  {
    href: "/courses",
    title: "Explore courses",
    description: "Find a course that matches your goals.",
  },
  {
    href: "/about",
    title: "Learn about us",
    description: "Discover our mission and approach.",
  },
];

export default function ContactHelp() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Before you contact us
          </span>

          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
            Looking for something specific?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            You may find what you need directly on our website.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {helpLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div>
                <h3 className="font-medium text-foreground">{link.title}</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>

              <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
