"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-gold-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const perPage = 3;

  if (testimonials.length === 0) return null;

  const visible = Array.from({ length: Math.min(perPage, testimonials.length) }).map(
    (_, i) => testimonials[(start + i) % testimonials.length]
  );

  function prev() {
    setStart((s) => (s - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setStart((s) => (s + 1) % testimonials.length);
  }

  return (
    <section className="bg-brand-950 py-16 text-cream-50 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Travellers&apos; Reviews After Successful Tours 🙂
          </h2>

          {testimonials.length > perPage && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous reviews"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next reviews"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-sm font-semibold text-gold-300">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-cream-100/60">{t.role}</p>
                </div>
              </div>
              <div className="mt-3">
                <Stars rating={t.rating} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/80">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
