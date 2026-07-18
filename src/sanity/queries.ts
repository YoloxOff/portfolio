import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    logoText,
    showLogoText,
    logoImage{
      ...,
      "dimensions": asset->metadata.dimensions
    },
    logoSize,
    logoPosition,
    heroImage,
    kicker,
    heading,
    introText,
    workingStyleLabel,
    workingStyleIntro,
    workingSteps[]{
      title,
      description
    },
    sitesLabel,
    sitesNote,
    showPhotosSection,
    photosLabel,
    instagramHandle,
    instagramUrl,
    linkedinUrl,
    footerCta,
    contactEmail,
    seoTitle,
    seoDescription
  }
`);

export const webProjectsQuery = defineQuery(`
  *[_type == "webProject"] | order(order asc){
    _id,
    title,
    category,
    description,
    image,
    url
  }
`);

export const sportsPhotosQuery = defineQuery(`
  *[_type == "sportsPhoto"] | order(order asc){
    _id,
    image,
    alt
  }
`);
