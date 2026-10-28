"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-900/10 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images.jpg"
            alt="Quran Academy Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block font-serif text-lg text-brand-900">{SITE.shortName}</span>
            <span className="block text-xs tracking-wide text-ink-600">Quran Academy</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 underline-offset-4 hover:text-brand-800 hover:underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="rounded-full bg-brand-800 px-4 py-2 text-sm font-semibold text-cream-50 hover:bg-brand-900"
          >
            Enrol Your Child
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-brand-800/20 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="text-brand-900">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-brand-900/10 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-base text-ink-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/register"
                className="block py-1 font-semibold text-brand-800"
                onClick={() => setOpen(false)}
              >
                Enrol Your Child
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}