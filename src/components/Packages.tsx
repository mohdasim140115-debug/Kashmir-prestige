"use client";

import { useState } from "react";
import Image from "next/image";
import type { Business, TourPackage } from "@/lib/content";
import { useEnquiryModal } from "@/components/EnquiryModalContext";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN").format(price);
}

function whatsappLink(business: Business, packageName: string, duration: string) {
  const message = `Hi Kashmir Prestige, I'm interested in the ${packageName} (${duration}). Please share the itinerary and pricing.`;
  return `${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

function PackageCard({ pkg, business }: { pkg: TourPackage; business: Business }) {
  const { openModal } = useEnquiryModal();
  const [expanded, setExpanded] = useState(false);

  const description = `${pkg.keyword} of curated travel covering ${pkg.places
    .slice(0, 2)
    .join(" and ")} and more — with premium stays and a private houseboat night included.`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-brand-900/10 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-900/10">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.name} ${pkg.duration} covering ${pkg.places.join(", ")}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
        {pkg.badge && (
          <span className="absolute top-4 left-4 rounded-md bg-gold-400 px-3 py-1 text-[11px] font-bold tracking-wide text-brand-950 uppercase shadow">
            {pkg.badge}
          </span>
        )}
        <span className="absolute bottom-4 left-4 rounded-md bg-white/95 px-3 py-1 text-sm font-bold text-brand-900">
          {pkg.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-brand-900">
          {pkg.name}
        </h3>
        <p className="mt-1 text-xs font-semibold tracking-wide text-gold-600 uppercase">
          {pkg.places.join(" · ")}
        </p>

        <p className={`mt-3 text-sm leading-relaxed text-brand-800/75 ${expanded ? "" : "line-clamp-2"}`}>
          {description}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 self-start text-xs font-semibold text-gold-600 hover:text-gold-700"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>

        {expanded && (
          <ul className="mt-3 space-y-2 text-sm text-brand-800/80">
            {pkg.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex-1" />

        <div className="mt-2 border-t border-brand-900/10 pt-4">
          <span className="block text-[11px] text-brand-800/60">
            Starting from
          </span>
          <span className="text-2xl font-bold text-brand-900">
            ₹{formatPrice(pkg.price)}
            <span className="ml-1 text-xs font-medium text-brand-800/60">
              /person
            </span>
          </span>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <a
              href={`tel:+91${business.phone}`}
              className="flex items-center justify-center gap-1.5 rounded-md bg-brand-800 px-2 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Call
            </a>
            <a
              href={whatsappLink(business, pkg.name, pkg.duration)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-md bg-[#25D366] px-2 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1ebc59]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 004.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2zm0 18.11h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.22 8.22 0 01-1.26-4.4c0-4.54 3.7-8.24 8.26-8.24a8.2 8.2 0 015.84 2.42 8.19 8.19 0 012.42 5.83c0 4.54-3.7 8.27-8.26 8.27zm4.52-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
              </svg>
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => openModal(pkg.name)}
              className="flex items-center justify-center gap-1.5 rounded-md bg-gold-400 px-2 py-2.5 text-xs font-semibold text-brand-950 shadow-sm transition-colors hover:bg-gold-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6M4 6l8 7 8-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Enquire
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Packages({
  packages,
  business,
}: {
  packages: TourPackage[];
  business: Business;
}) {
  return (
    <section id="packages" className="bg-cream-100 py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
            Kashmir Tour Packages
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            Choose Your Kashmir Trip Package
          </h2>
          <p className="mt-4 text-brand-800/80">
            From a quick 3 Nights 4 Days Kashmir tour to a complete 7 Nights 8 Days
            Kashmir trip package — every plan includes unlimited buffet, premium
            transport and a houseboat stay on Dal Lake.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
}
