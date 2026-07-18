import Image from "next/image";

import { urlForImage } from "@/sanity/image";
import type { ImageWithAlt } from "@/sanity/types";

export function Intro({
  kicker,
  heading,
  introText,
  heroImage,
  logoText,
  contactEmail,
  contactPhone,
}: {
  kicker: string | null;
  heading: string;
  introText: string | null;
  heroImage: ImageWithAlt | null;
  logoText: string;
  contactEmail: string;
  contactPhone: string | null;
}) {
  const hasPortrait = Boolean(heroImage?.asset?._ref);

  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-24">
      <div
        className={`grid items-center gap-12 ${
          hasPortrait ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div>
          {kicker ? (
            <p className="inline-flex rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent">
              {kicker}
            </p>
          ) : null}
          <h1 className="mt-6 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            {heading}
          </h1>
          {introText ? (
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              {introText}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contactEmail}`}
              className="rounded-full bg-accent px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            >
              Écrire un e-mail
            </a>
            {contactPhone ? (
              <a
                href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                className="rounded-full border border-border px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {contactPhone}
              </a>
            ) : null}
          </div>
        </div>

        {hasPortrait && heroImage ? (
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
              <Image
                src={urlForImage(heroImage)
                  .width(700)
                  .height(875)
                  .fit("crop")
                  .url()}
                alt={heroImage.alt ?? logoText}
                fill
                priority
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-56 -translate-x-1/2 rounded-xl border border-border bg-background px-4 py-3 shadow-lg sm:left-6 sm:translate-x-0">
              <p className="font-serif text-base italic text-foreground">
                {logoText}
              </p>
              {kicker ? (
                <p className="mt-0.5 text-xs text-muted">{kicker}</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
