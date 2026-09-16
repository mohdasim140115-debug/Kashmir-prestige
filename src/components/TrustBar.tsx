const items = [
  "Unlimited Buffet — Breakfast & Dinner",
  "Premium Transport with Professional Driver",
  "1 Night Houseboat Stay + Shikara Ride",
  "Doctor on Call",
  "24x7 On-Field Support",
  "All Toll, Parking & GST Included",
];

export default function TrustBar() {
  return (
    <section className="border-b border-brand-900/10 bg-brand-900 py-3.5 text-cream-50">
      <div className="section-shell">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-[11px] font-medium tracking-wide text-cream-100/90 uppercase sm:text-xs">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i !== 0 && <span className="hidden h-1 w-1 rounded-full bg-gold-300/70 sm:inline-block" />}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
