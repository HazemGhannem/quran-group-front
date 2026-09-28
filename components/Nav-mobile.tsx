"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/navigation";

export default function MobileNav() {
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Menu closes automatically when the route changes.
  const isOpen = openedAt === pathname;

  const closeMenu = () => setOpenedAt(null);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const firstFocusable = menuRef.current.querySelector<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );

    firstFocusable?.focus();
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenedAt((prev) => (prev === pathname ? null : pathname))}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-accent lg:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <nav
          ref={menuRef}
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-16 border-t border-border bg-background lg:hidden"
        >
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "bg-accent text-primary"
                    : "text-foreground hover:bg-accent"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-lg border border-border px-3 py-2 text-center text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Sign in
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
                className="rounded-lg bg-gradient-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-95"
              >
                Get started
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
