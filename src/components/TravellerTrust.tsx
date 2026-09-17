"use client";

import { useRef } from "react";

const promises = [
  {
    title: "Locally Planned, Not Outsourced",
    detail:
      "Every itinerary is built by our own team based in Sopore, using roads, hotels and weather we actually know — not read off a script by a call centre in another city.",
  },
  {
    title: "Transparent Pricing, Always",
    detail:
      "Toll, parking and GST are already folded into your quote before you ever ask. What we tell you on the call is exactly what you pay at checkout — no surprise add-ons.",
  },
  {
    title: "Support That Doesn't Disappear",
    detail:
      "Our number stays reachable before you book, all through your trip and even after you're back home — 24x7, not just during office hours.",
  },
  {
    title: "Every Trip, Fully Customised",
    detail:
      "Family holiday, group tour, couple getaway or a solo escape — your itinerary is built around your pace and budget, not squeezed into a fixed template.",
  },
  {
    title: "Comfort From the First Pickup",
    detail:
      "Land in Srinagar, Jammu, Katra or Udhampur and we're already handling the transfer, hotel check-in and the small logistics so your trip feels effortless from minute one.",
  },
  {
    title: "A Team That Knows the Valley",
    detail:
      "Kashmir's weather and roads change fast between seasons. Being based right here means your route is planned around real conditions, not guesswork from a spreadsheet.",
  },
];

export default function TravellerTrust() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="bg-brand-950 py-14 text-cream-50 sm:py-16">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-gold-300 uppercase">
              Our Promise
            </span>
            <h2 className="mt-2.5 font-display text-2xl font-semibold text-white sm:text-3xl">
              Why Travellers Trust Kashmir Prestige
            </h2>
            <p className="mt-3 text-sm text-cream-100/70 sm:text-base">
              We&apos;re a small, local Kashmir-based team — here&apos;s what
              that actually means for your trip.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount(-1)}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(1)}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {promises.map((item) => (
            <div
              key={item.title}
              className="relative w-[82%] shrink-0 snap-start rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:w-[46%] lg:w-[31%]"
            >
              <svg
                width="30"
                height="24"
                viewBox="0 0 32 24"
                fill="currentColor"
                className="text-gold-400/40"
              >
                <path d="M0 24V14.4C0 9.87 1.15 6.24 3.44 3.52 5.76 0.77 8.85 -0.5 12.72 0.18v4.3c-2.13-0.16-3.79 0.43-4.98 1.77C6.55 7.6 5.9 9.28 5.87 11.3H12.72V24H0ZM19.28 24V14.4c0-4.53 1.15-8.16 3.44-10.88C25.04 0.77 28.13 -0.5 32 0.18v4.3c-2.13-0.16-3.79 0.43-4.98 1.77-1.19 1.35-1.84 3.03-1.87 5.05H32V24H19.28Z" />
              </svg>
              <h3 className="mt-2 font-display text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-cream-100/75">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
