import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Réglages du site",
  type: "document",
  fields: [
    defineField({
      name: "logoText",
      title: "Logo (texte)",
      description:
        "Utilisé si aucune image de logo n'est renseignée, et comme texte alternatif sinon.",
      type: "string",
      initialValue: "Ali",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logoImage",
      title: "Logo (image)",
      description: "Optionnel — laissez vide pour afficher le logo texte.",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "logoSize",
      title: "Taille du logo",
      type: "string",
      options: {
        list: [
          { title: "Petit", value: "small" },
          { title: "Moyen", value: "medium" },
          { title: "Grand", value: "large" },
        ],
        layout: "radio",
      },
      initialValue: "medium",
    }),
    defineField({
      name: "logoPosition",
      title: "Position du logo",
      type: "string",
      options: {
        list: [
          { title: "Gauche (avec le menu à droite)", value: "left" },
          { title: "Centré (menu en dessous)", value: "center" },
        ],
        layout: "radio",
      },
      initialValue: "left",
    }),
    defineField({
      name: "heroImage",
      title: "Image bannière",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kicker",
      title: "Accroche courte (au-dessus du titre)",
      type: "string",
      initialValue: "Développeur web & photographe sport",
    }),
    defineField({
      name: "heading",
      title: "Titre principal",
      type: "text",
      rows: 2,
      initialValue: "Je conçois des sites sur mesure et je photographie le sport.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introText",
      title: "Paragraphe d'introduction",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sitesLabel",
      title: "Titre section « Sites web »",
      type: "string",
      initialValue: "Sites web",
    }),
    defineField({
      name: "sitesNote",
      title: "Note section « Sites web »",
      type: "string",
      initialValue: "Projets récents — d'autres à venir",
    }),
    defineField({
      name: "photosLabel",
      title: "Titre section « Photographie sportive »",
      type: "string",
      initialValue: "Photographie sportive",
    }),
    defineField({
      name: "instagramHandle",
      title: "Pseudo Instagram affiché",
      type: "string",
      initialValue: "@ali_photo",
    }),
    defineField({
      name: "instagramUrl",
      title: "Lien Instagram",
      type: "url",
    }),
    defineField({
      name: "linkedinUrl",
      title: "Lien LinkedIn",
      type: "url",
    }),
    defineField({
      name: "footerCta",
      title: "Phrase d'accroche du pied de page",
      type: "string",
      initialValue: "Un projet en tête ?",
    }),
    defineField({
      name: "contactEmail",
      title: "Email de contact",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "Titre SEO",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "Description SEO",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: { title: "logoText" },
    prepare: ({ title }) => ({ title: `Réglages du site — ${title ?? ""}` }),
  },
});
