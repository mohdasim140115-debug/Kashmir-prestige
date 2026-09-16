import EnquiryForm from "@/components/EnquiryForm";
import { business } from "@/lib/data";

export default function EnquirySection() {
  return (
    <section id="enquiry" className="bg-brand-950 py-20 text-cream-50 sm:py-28">
      <div className="section-shell grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold tracking-widest text-gold-300 uppercase">
            Plan Your Trip
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Get a Free Kashmir Tour Quote
          </h2>
          <p className="mt-4 text-cream-100/75">
            Share your travel dates and group size — our team in Sopore will call
            you back with a customised Kashmir tour package and pricing.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`tel:+91${business.phone}`} className="flex items-center gap-3 text-cream-100">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block text-xs text-cream-100/60">Call us</span>
                <span className="font-semibold">{business.phoneDisplay}</span>
              </span>
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-cream-100">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" opacity="0" />
                  <path d="M4 6h16v12H4z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block text-xs text-cream-100/60">Email us</span>
                <span className="font-semibold">{business.email}</span>
              </span>
            </a>
            <div className="flex items-start gap-3 text-cream-100">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block text-xs text-cream-100/60">Visit us</span>
                <span className="font-medium">{business.address}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-cream-50 p-6 shadow-2xl sm:p-8 lg:col-span-3">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
