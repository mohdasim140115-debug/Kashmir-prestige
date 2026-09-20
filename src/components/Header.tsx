"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Business } from "@/lib/content";

const navLinks = [
  { href: "#packages", label: "Packages" },
  { href: "#destinations", label: "Destinations" },
  { href: "#inclusions", label: "Inclusions" },
  { href: "#why-us", label: "Why Us" },
  { href: "#enquiry", label: "Contact" },
];

export default function Header({ business }: { business: Business }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/10 bg-cream-50/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Kashmir Prestige logo"
            width={44}
            height={44}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-gold-300 sm:h-12 sm:w-12"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-brand-900 sm:text-xl">
              Kashmir Prestige
            </span>
            <span className="text-[11px] tracking-wide text-brand-600 uppercase sm:text-xs">
              Tour &amp; Travel Specialists
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-800 transition-colors hover:text-gold-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:+91${business.phone}`}
            className="rounded-full border border-brand-700/20 px-4 py-2 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-700/40 hover:bg-brand-50"
          >
            {business.phoneDisplay}
          </a>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-400 px-5 py-2 text-sm font-semibold text-brand-950 shadow-sm shadow-gold-400/40 transition-colors hover:bg-gold-300"
          >
            Get Free Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-900/15 text-brand-900 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-900/10 bg-cream-50 lg:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-800 hover:bg-brand-50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={`tel:+91${business.phone}`}
                className="rounded-full border border-brand-700/20 px-4 py-2.5 text-center text-sm font-semibold text-brand-800"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold-400 px-4 py-2.5 text-center text-sm font-semibold text-brand-950"
              >
                Get Free Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
