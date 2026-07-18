import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    logoText,
    logoImage{
      ...,
      asset->{ metadata{ dimensions{ width, height } } }
    },
    logoSize,
    logoPosition,
    heroImage,
    kicker,
    heading,
    introText,
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
