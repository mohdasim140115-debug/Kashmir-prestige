import type { Metadata } from "next";
import Link from "next/link";
import { getSiteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your Kashmir tour enquiry has been received.",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage() {
  const { business } = await getSiteContent();

  return (
    <section className="flex min-h-[70vh] items-center bg-cream-100 py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-lg rounded-3xl border border-brand-900/10 bg-white px-8 py-12 text-center shadow-sm">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>

          <h1 className="mt-6 font-display text-3xl font-semibold text-brand-900">
            Thank You!
          </h1>
          <p className="mt-3 text-brand-800/80">
            Your enquiry has been received. Our team at Kashmir Prestige will
            get back to you shortly with your itinerary and pricing.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-brand-950 shadow-lg shadow-gold-400/30 transition-transform hover:scale-[1.02] hover:bg-gold-300"
            >
              Back to Home
            </Link>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-900/15 px-7 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
