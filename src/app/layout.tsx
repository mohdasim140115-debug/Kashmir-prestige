import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { EnquiryModalProvider } from "@/components/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.kashmirprestige.com";
const gtmId = "GTM-MS33PWJJ";

export async function generateMetadata(): Promise<Metadata> {
  const { business } = await getSiteContent();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default:
        "Kashmir Prestige | Best Kashmir Tour Packages from Srinagar, Jammu & Sopore",
      template: "%s | Kashmir Prestige",
    },
    description:
      "Book the best Kashmir tour packages with Kashmir Prestige, Sopore — 3N/4D to 7N/8D trips covering Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg & Verinag. Houseboat stay, unlimited buffet, premium transport & 24x7 support included.",
    keywords: [
      "kashmir tour packages",
      "kashmir trip",
      "kashmir holidays",
      "kashmir package",
      "kashmir trip package",
      "srinagar tour packages",
      "jammu kashmir tour package",
      "cheapest tour packages for kashmir",
      "kashmir travel packages",
      "kashmir tour packages for family",
      "kashmir tour packages for couple",
      "gulmarg tour packages",
      "best kashmir tour packages",
      "kashmir group tour packages",
      "kashmir honeymoon package",
    ],
    authors: [{ name: business.owner }],
    creator: business.name,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteUrl,
      siteName: business.name,
      title: "Kashmir Prestige | Best Kashmir Tour Packages",
      description:
        "3N/4D to 7N/8D Kashmir tour packages covering Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg & Verinag. Houseboat stay, unlimited buffet & premium transport included.",
      images: [
        {
          url: "/logo.jpeg",
          width: 800,
          height: 800,
          alt: business.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Kashmir Prestige | Best Kashmir Tour Packages",
      description:
        "3N/4D to 7N/8D Kashmir tour packages covering Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg & Verinag.",
      images: ["/logo.jpeg"],
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const content = await getSiteContent();
  const { business } = content;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: business.name,
    image: `${siteUrl}/logo.jpeg`,
    url: siteUrl,
    telephone: `+91${business.phone}`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bus Stand, Near Jewel Bakery",
      addressLocality: "Sopore",
      addressRegion: "Jammu and Kashmir",
      postalCode: "193201",
      addressCountry: "IN",
    },
    areaServed: content.destinations.map((d) => d.name),
    sameAs: [],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${display.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-cream-100 text-brand-950 antialiased">
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <EnquiryModalProvider>
          <Header business={business} />
          <main className="flex-1">{children}</main>
          <Footer business={business} destinations={content.destinations} packages={content.packages} />
          <FloatingButtons business={business} />
          <EnquiryModal packages={content.packages} />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
