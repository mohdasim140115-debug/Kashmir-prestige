import { cache } from "react";
import { Redis } from "@upstash/redis";
import {
  business as defaultBusiness,
  destinations as defaultDestinations,
  packages as defaultPackages,
  inclusions as defaultInclusions,
  pickupPoints as defaultPickupPoints,
  services as defaultServices,
  testimonials as defaultTestimonials,
  type Destination,
  type TourPackage,
  type Testimonial,
} from "@/lib/data";

export type Business = typeof defaultBusiness;

export type HeroContent = {
  kicker: string;
  headingLine1: string;
  headingLine2: string;
  paragraph: string;
  tagline: string;
  locationTag: string;
  keywords: string[];
};

export type Inclusion = { title: string; detail: string };
export type PromiseItem = { title: string; detail: string };
export type GalleryPhoto = { src: string; alt: string; tall?: boolean };

export type SiteContent = {
  business: Business;
  hero: HeroContent;
  packages: TourPackage[];
  destinations: Destination[];
  gallery: GalleryPhoto[];
  inclusions: Inclusion[];
  pickupPoints: string[];
  services: string[];
  promises: PromiseItem[];
  testimonials: Testimonial[];
};

export type { Destination, TourPackage, Testimonial };

const defaultHero: HeroContent = {
  kicker: "Heaven on Earth Awaits",
  headingLine1: "Discover Your",
  headingLine2: "Dream Kashmir",
  paragraph:
    "Book the best Kashmir tour packages & Kashmir holiday packages with Kashmir Prestige — perfect Kashmir trip plans for families, couples and groups across Srinagar, Gulmarg and Pahalgam.",
  tagline: "Have a trip, it's a memory for life.",
  locationTag: "Kashmir Valley",
  keywords: [
    "Kashmir Tour Packages",
    "Kashmir Trip",
    "Kashmir Holidays",
    "Srinagar Tour Packages",
  ],
};

const defaultGallery: GalleryPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1000&q=80&auto=format&fit=crop",
    alt: "Houseboats on Dal Lake, Srinagar",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=800&q=80&auto=format&fit=crop",
    alt: "Shikara boats on Dal Lake, Srinagar",
  },
  {
    src: "https://images.unsplash.com/photo-1552098933-a5ceb0e5dd91?w=800&q=80&auto=format&fit=crop",
    alt: "Snow-capped mountains in Gulmarg",
  },
  {
    src: "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?w=1000&q=80&auto=format&fit=crop",
    alt: "Betaab Valley, Pahalgam",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1627894485200-b92fb4353967?w=800&q=80&auto=format&fit=crop",
    alt: "Green meadow with snow peaks, Doodhpathri",
  },
  {
    src: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=800&q=80&auto=format&fit=crop",
    alt: "Pine forest and snow valley, Sonamarg",
  },
  {
    src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80&auto=format&fit=crop",
    alt: "Horse grazing in Yusmarg meadow",
  },
];

const defaultPromises: PromiseItem[] = [
  {
    title: "Locally Planned, Not Outsourced",
    detail:
      "Every itinerary is built by our own team based in Sopore, using roads, hotels and weather we actually know — not read off a script by a call centre in another city.",
  },
  {
    title: "Transparent Pricing, Always",
    detail:
      "Toll, parking and GST are already folded into your quote before you ever ask. What we tell you on the call is exactly what you pay at checkout — no surprise add-ons.",
  },
  {
    title: "Support That Doesn't Disappear",
    detail:
      "Our number stays reachable before you book, all through your trip and even after you're back home — 24x7, not just during office hours.",
  },
  {
    title: "Every Trip, Fully Customised",
    detail:
      "Family holiday, group tour, couple getaway or a solo escape — your itinerary is built around your pace and budget, not squeezed into a fixed template.",
  },
  {
    title: "Comfort From the First Pickup",
    detail:
      "Land in Srinagar, Jammu, Katra or Udhampur and we're already handling the transfer, hotel check-in and the small logistics so your trip feels effortless from minute one.",
  },
  {
    title: "A Team That Knows the Valley",
    detail:
      "Kashmir's weather and roads change fast between seasons. Being based right here means your route is planned around real conditions, not guesswork from a spreadsheet.",
  },
];

export const defaultContent: SiteContent = {
  business: defaultBusiness,
  hero: defaultHero,
  packages: defaultPackages,
  destinations: defaultDestinations,
  gallery: defaultGallery,
  inclusions: defaultInclusions,
  pickupPoints: defaultPickupPoints,
  services: defaultServices,
  promises: defaultPromises,
  testimonials: defaultTestimonials,
};

const CONTENT_KEY = "kashmir-prestige:site-content";

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  const redis = getRedis();
  if (!redis) return defaultContent;

  try {
    const stored = await redis.get<Partial<SiteContent>>(CONTENT_KEY);
    if (!stored) {
      await redis.set(CONTENT_KEY, defaultContent);
      return defaultContent;
    }
    return { ...defaultContent, ...stored };
  } catch (err) {
    console.error("Failed to read site content from Redis:", err);
    return defaultContent;
  }
});

export async function saveSiteContent(content: SiteContent): Promise<void> {
  const redis = getRedis();
  if (!redis) {
    throw new Error(
      "Database not configured. Add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to .env.local."
    );
  }
  await redis.set(CONTENT_KEY, content);
}
