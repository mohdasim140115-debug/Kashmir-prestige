import Image from "next/image";
import { business } from "@/lib/data";

const stats = [
  { value: "7", label: "Destinations" },
  { value: "6", label: "Tour Packages" },
  { value: "1N", label: "Houseboat Stay" },
  { value: "24x7", label: "Support" },
];

const trendingKeywords = [
  "Kashmir Trip",
  "Kashmir Holidays",
  "Srinagar Tour Packages",
  "Family & Couple Packages",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-cream-50">
      <span className="pointer-events-none absolute top-1/2 left-[47%] hidden h-20 w-20 -translate-y-1/2 rounded-full border border-gold-300/20 lg:block" />

      <div className="section-shell relative z-10 grid grid-cols-1 gap-8 py-10 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-14">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-gold-400/10 px-3.5 py-1 text-[11px] font-semibold tracking-wide text-gold-200 uppercase">
            Best Kashmir Tour Packages 2026
          </span>

          <h1 className="mt-4 font-display text-4xl leading-[1.02] font-extrabold tracking-tight text-white uppercase sm:text-5xl">
            Kashmir Tour
            <span className="block text-gold-400">Packages</span>
          </h1>

          <p className="mt-3.5 max-w-md text-sm leading-relaxed text-cream-100/80">
            Book the best Kashmir tour packages &amp; Kashmir holiday packages
            with Kashmir Prestige — affordable Jammu Kashmir tour packages for
            family, couple &amp; group trips across Srinagar, Gulmarg, Pahalgam,
            Sonamarg, Doodhpathri, Yusmarg &amp; Verinag.
          </p>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {trendingKeywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-cream-100/75"
              >
                {kw}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded-full bg-gold-400 px-7 py-3 text-sm font-bold tracking-wide text-brand-950 uppercase shadow-lg shadow-gold-400/30 transition-transform hover:scale-[1.02] hover:bg-gold-300"
            >
              View Packages
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get Free Quote
            </a>
          </div>

          <dl className="mt-6 grid grid-cols-4 gap-4 border-t border-white/10 pt-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-lg font-bold text-gold-300 sm:text-xl">
                  {stat.value}
                </dd>
                <div className="mt-0.5 text-[10px] text-cream-100/65 sm:text-[11px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto h-56 w-full max-w-md sm:h-72 lg:mx-0 lg:h-[380px] lg:max-w-none">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] lg:rounded-l-[140px] lg:rounded-r-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1627894485200-b92fb4353967?w=1600&q=80&auto=format&fit=crop"
              alt="Traveller in a green Kashmir meadow with snow-capped mountains"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
          </div>

          <span className="absolute top-5 right-5 hidden h-12 w-12 rounded-full border-2 border-gold-300/50 lg:block" />

          <div className="absolute bottom-4 left-4 max-w-[190px] rounded-2xl bg-brand-950/70 px-3.5 py-2.5 text-[11px] leading-snug text-cream-50/90 backdrop-blur">
            Best Kashmir tour packages — 3N/4D to 7N/8D, houseboat stay included.
          </div>
        </div>
      </div>
    </section>
  );
}
