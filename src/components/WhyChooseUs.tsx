import { pickupPoints, services } from "@/lib/data";

const reasons = [
  {
    title: "Locally Based in Kashmir",
    detail: "Operating out of Sopore, we know the valley's roads, weather and hotels first-hand.",
  },
  {
    title: "Customised Itineraries",
    detail: "Family, group, couple or fully customised — every plan is tailored to you.",
  },
  {
    title: "Transparent Pricing",
    detail: "No hidden charges — toll, parking and GST are always included in your package.",
  },
  {
    title: "24x7 On-Field Support",
    detail: "Our team stays reachable on call and on-field for your entire trip.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-cream-100 py-20 sm:py-28">
      <div className="section-shell grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
            Why Kashmir Prestige
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            Trusted Kashmir Tour &amp; Travel Specialists
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm text-brand-800/75">{reason.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-brand-900/10 bg-white p-7">
            <h3 className="font-display text-lg font-semibold text-brand-900">
              Our Services
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm text-brand-800/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-brand-900/10 bg-brand-900 p-7 text-cream-50">
            <h3 className="font-display text-lg font-semibold text-white">
              Pickup Points
            </h3>
            <ul className="mt-4 space-y-3">
              {pickupPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-cream-100/85">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
