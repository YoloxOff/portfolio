import Image from "next/image";

import { urlForImage } from "@/sanity/image";
import type { SportsPhoto } from "@/sanity/types";

export function PhotoGridSection({
  label,
  instagramHandle,
  instagramUrl,
  photos,
}: {
  label: string | null;
  instagramHandle: string | null;
  instagramUrl: string | null;
  photos: SportsPhoto[];
}) {
  if (photos.length === 0) return null;

  const [featured, ...rest] = photos;
  const smallPhotos = rest.slice(0, 4);

  return (
    <section id="photos" className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="font-serif text-2xl italic text-foreground">
          {label ?? "Photographie sportive"}
        </h2>
        {instagramHandle ? (
          <a
            href={instagramUrl ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
          >
            {instagramHandle} ↗
          </a>
        ) : null}
      </div>

      <div className="mt-10 flex flex-col gap-4 md:h-[32rem] md:flex-row">
        <div className="group relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-surface md:aspect-auto md:h-full md:flex-1">
          <Image
            src={urlForImage(featured.image)
              .width(900)
              .height(1000)
              .fit("crop")
              .url()}
            alt={featured.image.alt ?? featured.alt}
            fill
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {smallPhotos.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:h-full md:flex-1">
            {smallPhotos.map((photo) => (
              <div
                key={photo._id}
                className="group relative aspect-square overflow-hidden bg-surface md:aspect-auto md:h-full"
              >
                <Image
                  src={urlForImage(photo.image)
                    .width(500)
                    .height(500)
                    .fit("crop")
                    .url()}
                  alt={photo.image.alt ?? photo.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
