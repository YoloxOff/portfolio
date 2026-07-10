import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    logoText,
    heroImage,
    kicker,
    heading,
    introText,
    sitesLabel,
    sitesNote,
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
