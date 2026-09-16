import Image from "next/image";
import Link from "next/link";
import { business, destinations, packages } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-900 pt-16 text-cream-100">
      <div className="section-shell grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Kashmir Prestige logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-gold-300"
            />
            <span className="font-display text-lg font-semibold text-white">
              Kashmir Prestige
            </span>
          </Link>
          <p className="mt-4 text-sm text-cream-100/70">
            Kashmir tour &amp; travel specialists based in Sopore, crafting family,
            group, couple and customised Kashmir holiday packages.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-gold-300 uppercase">
            Packages
          </h3>
          <ul className="mt-4 space-y-2.5">
            {packages.slice(0, 5).map((pkg) => (
              <li key={pkg.slug}>
                <a href="#packages" className="text-sm text-cream-100/75 hover:text-gold-200">
                  {pkg.name} ({pkg.duration})
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-gold-300 uppercase">
            Destinations
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {destinations.map((d) => (
              <li key={d.slug}>
                <a href="#destinations" className="text-sm text-cream-100/75 hover:text-gold-200">
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-gold-300 uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream-100/75">
            <li>{business.address}</li>
            <li>
              <a href={`tel:+91${business.phone}`} className="hover:text-gold-200">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-gold-200">
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-200"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="section-shell flex flex-col items-center justify-between gap-3 text-xs text-cream-100/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Kashmir Prestige. All rights reserved.
          </p>
          <p>Owned &amp; operated by {business.owner}</p>
        </div>
      </div>
    </footer>
  );
}
