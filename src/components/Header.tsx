import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/image";
import type { LogoImage, LogoPosition, LogoSize } from "@/sanity/types";

import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#sites", label: "Sites" },
  { href: "#photos", label: "Photographie" },
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
  showLogoText = true,
  logoImage,
  logoSize = "medium",
  logoPosition = "left",
  showPhotosLink = true,
  contactEmail,
}: {
  logoText: string;
  showLogoText?: boolean | null;
  logoImage?: LogoImage | null;
  logoSize?: LogoSize | null;
  logoPosition?: LogoPosition | null;
  showPhotosLink?: boolean;
  contactEmail?: string | null;
}) {
  const size = logoSize ?? "medium";
  const position = logoPosition ?? "left";
  const height = LOGO_HEIGHT[size];
  const navLinks = showPhotosLink
    ? NAV_LINKS
    : NAV_LINKS.filter((link) => link.href !== "#photos");
  const dimensions = logoImage?.dimensions;
  const aspectRatio = dimensions ? dimensions.width / dimensions.height : 3;

  const logo = (
    <span className="flex items-center gap-3">
      {logoImage?.asset?._ref ? (
        <Image
          src={urlForImage(logoImage).height(height * 2).fit("max").url()}
          alt={logoImage.alt || logoText}
          width={Math.round(height * aspectRatio)}
          height={height}
          style={{ height, width: "auto" }}
          className="object-contain dark:invert dark:hue-rotate-180"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex shrink-0 items-center justify-center rounded-lg bg-ink font-serif italic text-ink-foreground"
          style={{ height, width: height, fontSize: height * 0.5 }}
        >
          {logoText.charAt(0).toUpperCase()}
        </span>
      )}
      {showLogoText !== false && (
        <span
          className={`font-serif italic tracking-tight text-foreground ${LOGO_TEXT_CLASSES[size]}`}
        >
          {logoText}
        </span>
      )}
    </span>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150">
      <div
        className={`mx-auto flex max-w-5xl px-6 py-6 ${
          position === "center"
            ? "flex-col items-center gap-4"
            : "items-center justify-between"
        }`}
      >
        <Link href="/">{logo}</Link>
        <div className="flex items-center gap-6 sm:gap-8">
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
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {contactEmail ? (
              <a
                href="#contact"
                className="rounded-full bg-ink px-5 py-2 text-[11px] font-medium uppercase tracking-widest text-ink-foreground transition-colors hover:bg-accent"
              >
                Me contacter
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
