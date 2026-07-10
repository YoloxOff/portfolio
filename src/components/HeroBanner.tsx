import Image from "next/image";

import { urlForImage } from "@/sanity/image";
import type { ImageWithAlt } from "@/sanity/types";

export function HeroBanner({ image }: { image: ImageWithAlt }) {
  const src = urlForImage(image).width(1600).height(900).fit("crop").url();

  return (
    <div className="relative h-[42vh] min-h-[280px] w-full sm:h-[50vh] md:h-[58vh]">
      <Image
        src={src}
        alt={image.alt ?? ""}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
