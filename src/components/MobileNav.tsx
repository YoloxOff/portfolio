"use client";

import { useState } from "react";

import { ThemeToggle } from "./ThemeToggle";

export function MobileNav({
  navLinks,
  contactEmail,
}: {
  navLinks: { href: string; label: string }[];
  contactEmail?: string | null;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="flex h-9 w-9 items-center justify-center text-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          {open ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full border-t border-border bg-background px-6 py-6 shadow-lg">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium uppercase tracking-widest text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
            {contactEmail ? (
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-ink px-5 py-2 text-[11px] font-medium uppercase tracking-widest text-ink-foreground"
              >
                Me contacter
              </a>
            ) : null}
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </div>
  );
}
