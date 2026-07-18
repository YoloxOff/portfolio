import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/image";
import type { LogoImage, LogoPosition, LogoSize } from "@/sanity/types";

const NAV_LINKS = [
  { href: "#sites", label: "Sites" },
  { href: "#photos", label: "Photos" },
  { href: "#contact", label: "Contact" },
];

const LOGO_HEIGHT: Record<LogoSize, number> = {
  small: 24,
  medium: 32,
  large: 48,
};

const LOGO_TEXT_CLASSES: Record<LogoSize, string> = {
  small: "text-base",
  medium: "text-lg",
  large: "text-2xl",
};

export function Header({
  logoText,
  logoImage,
  logoSize = "medium",
  logoPosition = "left",
  showPhotosLink = true,
}: {
  logoText: string;
  logoImage?: LogoImage | null;
  logoSize?: LogoSize | null;
  logoPosition?: LogoPosition | null;
  showPhotosLink?: boolean;
}) {
  const size = logoSize ?? "medium";
  const position = logoPosition ?? "left";
  const height = LOGO_HEIGHT[size];
  const navLinks = showPhotosLink
    ? NAV_LINKS
    : NAV_LINKS.filter((link) => link.href !== "#photos");
  const dimensions = logoImage?.asset?.metadata?.dimensions;
  const aspectRatio = dimensions ? dimensions.width / dimensions.height : 3;

  const logo = logoImage?.asset?._ref ? (
    <Image
      src={urlForImage(logoImage).height(height * 2).fit("max").url()}
      alt={logoImage.alt || logoText}
      width={Math.round(height * aspectRatio)}
      height={height}
      style={{ height, width: "auto" }}
      className="object-contain"
    />
  ) : (
    <span
      className={`font-serif italic tracking-tight text-foreground ${LOGO_TEXT_CLASSES[size]}`}
    >
      {logoText}
    </span>
  );

  return (
    <header className="border-b border-border">
      <div
        className={`mx-auto flex max-w-5xl px-6 py-6 ${
          position === "center"
            ? "flex-col items-center gap-4"
            : "items-center justify-between"
        }`}
      >
        <Link href="/">{logo}</Link>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[11px] font-medium uppercase tracking-widest text-foreground"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
