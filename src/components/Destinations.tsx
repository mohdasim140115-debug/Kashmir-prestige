import Image from "next/image";
import { destinations } from "@/lib/data";

export default function Destinations() {
  return (
    <section id="destinations" className="bg-brand-950 py-20 text-cream-50 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-gold-300 uppercase">
            Places We Cover
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            7 Must-Visit Kashmir Destinations
          </h2>
          <p className="mt-4 text-cream-100/75">
            Every Kashmir tour package can be customised across these destinations —
            from the lakes of Srinagar to the offbeat meadows of Yusmarg.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {destinations.map((dest, i) => (
            <div
              key={dest.slug}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`relative w-full ${i === 0 ? "h-full min-h-72" : "h-40 sm:h-48"}`}>
                <Image
                  src={dest.image}
                  alt={`${dest.name} — ${dest.tagline}, Kashmir`}
                  fill
                  sizes={i === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className={`font-display font-semibold text-white ${i === 0 ? "text-2xl" : "text-base"}`}>
                    {dest.name}
                  </h3>
                  <p className={`mt-0.5 text-gold-200 ${i === 0 ? "text-sm" : "text-[11px]"}`}>
                    {dest.tagline}
                  </p>
                  {i === 0 && (
                    <p className="mt-2 max-w-md text-sm text-cream-100/85">
                      {dest.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
