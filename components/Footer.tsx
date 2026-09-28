import Link from "next/link";
import Image from "next/image";
import CookieSettingsLink from "@/components/analytics/CookieSettingsLink";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/icons/social";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export default function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="h-12 w-12 shrink-0">
                <Image
                  src="/logo.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="h-full w-full"
                  style={{
                    filter:
                      "drop-shadow(0 0 1.5px white) drop-shadow(0 0 1.5px white) drop-shadow(0 0 1.5px white)",
                  }}
                />
              </div>

              <div>
                <div className="font-display text-lg font-semibold leading-tight">
                  The Quran Group
                </div>

                <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50">
                  Sacred Knowledge
                </div>
              </div>
            </Link>

            <p className="text-sm text-primary-foreground/60 max-w-sm leading-relaxed mb-6">
              Quality Islamic education accessible to everyone, everywhere,
              taught by qualified scholars committed to the tradition.
            </p>

            <div className="flex items-center gap-2">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61586010052765",
                  Icon: FacebookIcon,
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/thequrangroup/",
                  Icon: InstagramIcon,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/thequrangroup/",
                  Icon: LinkedInIcon,
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@TheQuranGroup",
                  Icon: YouTubeIcon,
                },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 rounded-lg border border-primary-foreground/20 hover:bg-white/10 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Learn */}
          <div>
            <h2 className="font-display text-base font-semibold mb-4 text-primary-foreground">
              Learn
            </h2>

            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Browse Courses", href: "/courses" },
                { label: "Create Account", href: "/register" },
                { label: "Beginner Courses", href: "/courses?level=Beginner" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Teach */}
          <div>
            <h2 className="font-display text-base font-semibold mb-4 text-primary-foreground">
              Teach
            </h2>

            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Apply as Teacher", href: "/apply/teacher" },
                { label: "Teacher Login", href: "/login" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-display text-base font-semibold mb-4 text-primary-foreground">
              Company
            </h2>

            <nav className="flex flex-col gap-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-display text-base font-semibold mb-4 text-primary-foreground">
              Stay close
            </h2>

            <p className="text-sm text-primary-foreground/60 mb-3">
              Get updates on new courses and scholars.
            </p>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 h-9 rounded-md border border-primary-foreground/20 bg-white/10 px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-gold"
              />

              <Button variant="secondary" size="sm">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-primary-foreground/50">
            <p>
              &copy; {new Date().getFullYear()} The Quran Group CIC · Company
              Number: 17039732
            </p>

            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/privacy"
                className="hover:text-primary-foreground transition-colors"
              >
                Privacy
              </Link>

              <span>·</span>

              <Link
                href="/terms"
                className="hover:text-primary-foreground transition-colors"
              >
                Terms
              </Link>

              <span>&middot;</span>

              <CookieSettingsLink />
            </div>
          </div>

          <span className="font-arabic text-base text-primary-foreground/50">
            بسم الله الرحمن الرحيم
          </span>
        </div>
      </div>
    </footer>
  );
}
