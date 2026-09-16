"use client";

import Image from "next/image";
import { packages } from "@/lib/data";
import { useEnquiryModal } from "@/components/EnquiryModalContext";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN").format(price);
}

export default function Packages() {
  const { openModal } = useEnquiryModal();

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
            <article
              key={pkg.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-brand-900/10 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-900/10"
            >
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
                  <span className="absolute top-4 left-4 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold tracking-wide text-brand-950 uppercase shadow">
                    {pkg.badge}
                  </span>
                )}
                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-brand-900">
                  {pkg.duration}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-brand-900">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-xs font-medium tracking-wide text-gold-600 uppercase">
                  {pkg.keyword}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {pkg.places.map((place) => (
                    <span
                      key={place}
                      className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                    >
                      {place}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 flex-1 space-y-2 text-sm text-brand-800/80">
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

                <div className="mt-6 flex items-center justify-between border-t border-brand-900/10 pt-4">
                  <span>
                    <span className="block text-[11px] text-brand-800/60">
                      Starting from
                    </span>
                    <span className="text-lg font-bold text-brand-900">
                      ₹{formatPrice(pkg.price)}
                      <span className="ml-1 text-xs font-medium text-brand-800/60">
                        /person
                      </span>
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => openModal(pkg.name)}
                    className="rounded-full bg-brand-800 px-4 py-2 text-xs font-semibold text-cream-50 transition-colors hover:bg-brand-700"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
