import type { Image as SanityImage } from "sanity";

export type ImageWithAlt = SanityImage & { alt?: string };

export type SiteSettings = {
  logoText: string;
  heroImage: ImageWithAlt;
  kicker: string | null;
  heading: string;
  introText: string | null;
  sitesLabel: string | null;
  sitesNote: string | null;
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
