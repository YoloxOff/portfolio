import type { Image as SanityImage } from "sanity";

export type ImageWithAlt = SanityImage & { alt?: string };

export type LogoImage = ImageWithAlt & {
  dimensions?: { width: number; height: number };
};

export type LogoSize = "small" | "medium" | "large";
export type LogoPosition = "left" | "center";

export type WorkingStep = {
  title: string;
  description: string | null;
};

export type SiteSettings = {
  logoText: string;
  logoImage: LogoImage | null;
  logoSize: LogoSize | null;
  logoPosition: LogoPosition | null;
  heroImage: ImageWithAlt | null;
  kicker: string | null;
  heading: string;
  introText: string | null;
  workingStyleLabel: string | null;
  workingStyleIntro: string | null;
  workingSteps: WorkingStep[] | null;
  sitesLabel: string | null;
  sitesNote: string | null;
  showPhotosSection: boolean | null;
  photosLabel: string | null;
  instagramHandle: string | null;
  instagramUrl: string | null;
  linkedinUrl: string | null;
  footerCta: string | null;
  contactEmail: string;
  seoTitle: string | null;
  seoDescription: string | null;
};

export type WebProject = {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: ImageWithAlt;
  url: string;
};

export type SportsPhoto = {
  _id: string;
  image: ImageWithAlt;
  alt: string;
};
