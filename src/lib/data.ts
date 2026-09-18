export const business = {
  name: "Kashmir Prestige",
  owner: "Muneeb Basir",
  phone: "6006231508",
  phoneDisplay: "+91 60062 31508",
  whatsapp: "https://wa.me/916006231508",
  email: "enquiry.kashmirprestige@gmail.com",
  address: "Bus Stand, Near Jewel Bakery, Sopore, Jammu & Kashmir 193201",
  addressShort: "Sopore, Jammu & Kashmir",
};

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "srinagar",
    name: "Srinagar",
    tagline: "City of Lakes & Houseboats",
    description:
      "Glide on a Shikara across Dal Lake, stay overnight in a traditional houseboat and wander the Mughal gardens of the Kashmir capital.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "gulmarg",
    name: "Gulmarg",
    tagline: "Meadow of Flowers",
    description:
      "Ride the Gulmarg Gondola to Apharwat Peak, one of the highest cable cars in the world, through snow-capped pine forests.",
    image:
      "https://images.unsplash.com/photo-1552098933-a5ceb0e5dd91?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "sonamarg",
    name: "Sonamarg",
    tagline: "Meadow of Gold",
    description:
      "Trek through glacier valleys and pine-covered mountains on the gateway route to Ladakh, framed by the Sindh river.",
    image:
      "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "pahalgam",
    name: "Pahalgam",
    tagline: "Valley of Shepherds",
    description:
      "Walk beside the Lidder river through Betaab Valley and Aru, surrounded by pine forests and snow-dusted peaks.",
    image:
      "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "doodhpathri",
    name: "Doodhpathri",
    tagline: "Valley of Milk",
    description:
      "Discover a lesser-crowded alpine meadow with milky-white streams cutting through rolling green hills and cloud-wrapped peaks.",
    image:
      "https://images.unsplash.com/photo-1627894485200-b92fb4353967?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "yusmarg",
    name: "Yusmarg",
    tagline: "Meadow of Jesus",
    description:
      "A quiet, offbeat meadow ringed by pine forests and snow peaks, perfect for pony rides and peaceful picnics away from the crowds.",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "verinag",
    name: "Verinag",
    tagline: "Source of the River Jhelum",
    description:
      "Visit the octagonal Mughal-era spring built by Emperor Jahangir, the original source of the mighty Jhelum river.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80&auto=format&fit=crop",
  },
];

export type TourPackage = {
  slug: string;
  name: string;
  keyword: string;
  duration: string;
  nights: number;
  days: number;
  badge?: string;
  places: string[];
  highlights: string[];
  image: string;
  price: number;
};

export const packages: TourPackage[] = [
  {
    slug: "kashmir-tour-package-3n-4d",
    name: "Kashmir Tour Package",
    keyword: "3 Nights 4 Days",
    duration: "3N / 4D",
    nights: 3,
    days: 4,
    badge: "Quick Getaway",
    places: ["Srinagar", "Gulmarg", "Pahalgam"],
    highlights: ["Shikara ride on Dal Lake", "Gondola ride in Gulmarg", "Betaab Valley visit"],
    image:
      "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=1200&q=80&auto=format&fit=crop",
    price: 9999,
  },
  {
    slug: "kashmir-holiday-package-4n-5d",
    name: "Kashmir Holiday Package",
    keyword: "4 Nights 5 Days",
    duration: "4N / 5D",
    nights: 4,
    days: 5,
    badge: "Family Favourite",
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    highlights: ["1 night houseboat stay", "Sonamarg glacier valley", "Local Kashmiri Wazwan"],
    image:
      "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?w=1200&q=80&auto=format&fit=crop",
    price: 11999,
  },
  {
    slug: "luxury-kashmir-tour-packages-4n-5d",
    name: "Luxury Kashmir Tour Packages",
    keyword: "Honeymoon Special",
    duration: "4N / 5D",
    nights: 4,
    days: 5,
    badge: "Trending",
    places: ["Srinagar", "Gulmarg", "Pahalgam"],
    highlights: ["Stay at Kolahoi Green, Gulmarg", "Private Shikara ride", "Premium couple rooms"],
    image: "/7d4020a9-7de7-46e9-8a07-3c2bdb938360.webp",
    price: 29999,
  },
  {
    slug: "best-kashmir-tour-package-5n-6d",
    name: "Best Kashmir Tour Package",
    keyword: "5 Nights 6 Days",
    duration: "5N / 6D",
    nights: 5,
    days: 6,
    badge: "Most Popular",
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg", "Doodhpathri"],
    highlights: ["Doodhpathri meadows", "Full Mughal garden tour", "1 night houseboat stay"],
    image:
      "https://images.unsplash.com/photo-1627894485200-b92fb4353967?w=1200&q=80&auto=format&fit=crop",
    price: 13999,
  },
  {
    slug: "kashmir-family-tour-package-6n-7d",
    name: "Kashmir Family Tour Package",
    keyword: "6 Nights 7 Days",
    duration: "6N / 7D",
    nights: 6,
    days: 7,
    badge: "Complete Circuit",
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg", "Yusmarg"],
    highlights: ["Offbeat Yusmarg meadow", "Kid-friendly itinerary", "Centrally heated premium hotels"],
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80&auto=format&fit=crop",
    price: 15999,
  },
  {
    slug: "complete-kashmir-trip-package-7n-8d",
    name: "Complete Kashmir Trip Package",
    keyword: "7 Nights 8 Days",
    duration: "7N / 8D",
    nights: 7,
    days: 8,
    badge: "Explorer",
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg", "Doodhpathri", "Yusmarg", "Verinag"],
    highlights: ["All 7 destinations covered", "Verinag Mughal spring", "Most in-depth itinerary"],
    image:
      "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?w=1200&q=80&auto=format&fit=crop",
    price: 17999,
  },
];

export const inclusions = [
  { title: "Breakfast & Dinner", detail: "Unlimited buffet meals every day" },
  { title: "Premium Transport", detail: "Top model vehicle with a professional company driver" },
  { title: "Driver Allowances", detail: "Included, no hidden costs on the road" },
  { title: "All Toll & Parking", detail: "Toll taxes, parking charges & GST included" },
  { title: "Premium Rooms", detail: "Centrally heated & cooled premium hotel rooms" },
  { title: "Houseboat Stay", detail: "1 night in a houseboat with a 1-hour Shikara ride" },
  { title: "Doctor on Call", detail: "Medical assistance available anytime on trip" },
  { title: "24x7 Support", detail: "On-field and on-call support throughout your trip" },
];

export const pickupPoints = [
  "Srinagar Airport, Railway Station or Bus Stand",
  "Jammu Airport, Railway Station or Bus Stand",
  "Katra Railway Station or Bus Stand",
  "Udhampur Railway Station",
];

export const services = [
  "Family Tour Packages",
  "Group Tour Packages",
  "Couple Tour Packages",
  "Customised Kashmir Tour Packages",
];

export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  quote: string;
  photo?: string;
};

// Add real traveller reviews here as they come in — name, role/trip,
// rating (1-5) and the quote. The section only renders once this has
// at least one real entry.
export const testimonials: Testimonial[] = [];
