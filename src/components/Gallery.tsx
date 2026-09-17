import Image from "next/image";

const photos = [
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

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream-100 py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            Glimpses of Kashmir
          </h2>
          <p className="mt-4 text-brand-800/80">
            A look at the lakes, valleys and mountains our travellers get to
            experience on every Kashmir Prestige tour.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-2xl ${
                photo.tall ? "row-span-2" : ""
              }`}
            >
              <div className={`relative w-full ${photo.tall ? "h-full min-h-72" : "h-36 sm:h-44"}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
