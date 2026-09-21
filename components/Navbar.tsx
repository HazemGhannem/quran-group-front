import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/navigation";
import MobileNav from "./Nav-mobile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" aria-label="The Quran Group home">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
              <Image
                src="/logo.svg"
                alt="The Quran Group"
                width={48}
                height={48}
                priority
              />
            </div>

            <div className="hidden sm:block">
              <div className="font-display text-lg font-semibold text-foreground">
                The Quran Group
              </div>

              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Sacred Knowledge
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors duration-200 hover:bg-accent hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors duration-200 hover:bg-accent hover:text-primary"
          >
            Sign in
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-opacity duration-200 hover:opacity-95"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
