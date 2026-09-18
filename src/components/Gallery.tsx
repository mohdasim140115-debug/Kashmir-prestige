import Image from "next/image";
import type { GalleryPhoto } from "@/lib/content";

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
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
