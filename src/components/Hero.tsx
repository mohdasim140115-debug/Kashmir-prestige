import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import type { HeroContent, TourPackage } from "@/lib/content";

export default function Hero({ hero, packages }: { hero: HeroContent; packages: TourPackage[] }) {
  return (
    <section className="bg-brand-900">
      <div className="relative w-full overflow-hidden bg-brand-950 sm:rounded-b-[2rem]">
        <Image
          src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=2400&q=90&auto=format&fit=crop"
          alt="Snow-capped mountains over a green meadow in Kashmir on a clear day"
          fill
          priority
          sizes="100vw"
          className="object-cover saturate-[1.08] contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/50 to-brand-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/10 to-transparent lg:hidden" />

        <div className="section-shell relative z-10 grid grid-cols-1 gap-6 py-6 sm:gap-8 sm:py-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-11">
          <div className="text-cream-50">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
              {hero.kicker}
            </p>

            <h1 className="mt-1.5 font-display text-3xl leading-[1.05] font-extrabold tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] sm:mt-2 sm:text-5xl lg:text-[3.1rem]">
              {hero.headingLine1}
              <span className="block text-gold-400">{hero.headingLine2}</span>
            </h1>

            <p className="mt-2.5 max-w-md text-sm leading-relaxed text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:mt-3.5 sm:text-base sm:text-cream-100/85 sm:drop-shadow-none">
              {hero.paragraph}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {hero.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full border border-white/25 bg-brand-950/50 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm"
                >
                  {kw}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-nowrap items-center gap-2 sm:mt-6 sm:gap-3">
              <a
                href="#packages"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gold-400 px-4 py-2.5 text-xs font-semibold text-brand-950 shadow-lg shadow-gold-400/30 transition-transform hover:scale-[1.02] hover:bg-gold-300 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
              >
                Explore Packages
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#gallery"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-cream-50/30 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white text-brand-950 sm:h-5 sm:w-5">
                  <svg width="8" height="8" viewBox="0 0 20 20" fill="currentColor" className="sm:h-[10px] sm:w-[10px]">
                    <path d="M8 5.5l7 4.5-7 4.5v-9z" />
                  </svg>
                </span>
                Watch Gallery
              </a>
            </div>

            <div className="mt-9 hidden items-center gap-3 sm:flex">
              <span className="font-display text-lg text-gold-200 italic">
                &ldquo;{hero.tagline}&rdquo;
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-cream-100/90 backdrop-blur">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                {hero.locationTag}
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-cream-50/97 p-4 shadow-2xl backdrop-blur sm:p-6">
            <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
              Plan Your Trip
            </span>
            <h2 className="mt-1.5 font-display text-lg font-semibold text-brand-900 sm:text-2xl">
              Get a Free Kashmir Quote
            </h2>
            <p className="mt-1 hidden text-xs text-brand-800/70 sm:block sm:text-sm">
              Fill this in and our travel experts will call you back with the
              best pricing.
            </p>
            <div className="mt-3 sm:mt-4">
              <EnquiryForm packages={packages} compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
