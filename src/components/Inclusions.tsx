import type { Inclusion } from "@/lib/content";

const defaultIcon = (
  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
);

const icons: Record<string, React.ReactNode> = {
  "Breakfast & Dinner": (
    <path d="M4 3v18M4 8h6M4 13h6M20 3c-2.5 0-4 2-4 5v6a2 2 0 002 2h0V3zM18 16v5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "Premium Transport": (
    <path d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13M4 13h16v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-5z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "Driver Allowances": (
    <path d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "All Toll & Parking": (
    <path d="M9 4v16M4 7h5m-5 5h5m-5 5h5m6-13h4a2 2 0 012 2v10a2 2 0 01-2 2h-4V4z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "Premium Rooms": (
    <path d="M3 21V9l9-6 9 6v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "Houseboat Stay": (
    <path d="M3 18l1.5-6h15L21 18M6 12V8h8l3 4M7 21c1-1 2-1 3 0s2 1 3 0 2-1 3 0 2 1 3 0" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "Doctor on Call": (
    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6M12 2a10 10 0 100 20 10 10 0 000-20z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "24x7 Support": (
    <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function Inclusions({ inclusions }: { inclusions: Inclusion[] }) {
  return (
    <section id="inclusions" className="bg-cream-50 py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
            What&apos;s Included
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            Every Kashmir Package Includes
          </h2>
          <p className="mt-4 text-brand-800/80">
            No hidden costs. Every Kashmir holiday package from Kashmir Prestige
            comes fully loaded so you can just relax and enjoy the valley.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {inclusions.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  {icons[item.title] ?? defaultIcon}
                </svg>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-brand-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-brand-800/75">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
