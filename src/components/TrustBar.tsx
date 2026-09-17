const badges = [
  {
    title: "Handpicked Hotels",
    subtitle: "Comfort & luxury",
    icon: (
      <path d="M3 21V10l9-6 9 6v11M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "All Transfers Included",
    subtitle: "Hassle-free travel",
    icon: (
      <path d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13M4 13h16v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-5z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Local Sightseeing",
    subtitle: "Expert guides",
    icon: (
      <>
        <circle cx="9" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 12h1" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Best Price Guarantee",
    subtitle: "Value for money",
    icon: (
      <path d="M9 12l2 2 4-4M12 3l2.5 1.5L18 4l.5 3.5L21 10l-1.5 3 1.5 3-3 .5-.5 3.5-3.5-.5L12 21l-2.5-1.5L6 20l-.5-3.5L3 15l1.5-3L3 9l3-.5L6.5 5 10 5.5 12 3z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="border-b border-brand-900/10 bg-brand-900 py-6 text-cream-50">
      <div className="section-shell">
        <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-4">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  {badge.icon}
                </svg>
              </span>
              <span>
                <span className="block text-xs font-semibold text-white sm:text-sm">
                  {badge.title}
                </span>
                <span className="block text-[10px] text-cream-100/60 sm:text-[11px]">
                  {badge.subtitle}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
