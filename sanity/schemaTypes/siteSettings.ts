import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Réglages du site",
  type: "document",
  fields: [
    defineField({
      name: "logoText",
      title: "Logo (texte)",
      description:
        "Toujours affiché, à droite de l'image de logo si vous en ajoutez une.",
      type: "string",
      initialValue: "Ali",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logoImage",
      title: "Logo (image)",
      description:
        "Optionnel — s'affiche à gauche du logo texte. Laissez vide pour n'afficher que le texte.",
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
      description: "Optionnel — laissez vide pour ne pas afficher de bannière.",
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
      name: "workingStyleLabel",
      title: "Titre section « Ma façon de travailler »",
      type: "string",
      initialValue: "Ma façon de travailler",
    }),
    defineField({
      name: "workingStyleIntro",
      title: "Texte d'introduction (optionnel)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "workingSteps",
      title: "Étapes",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "step",
          fields: [
            defineField({
              name: "title",
              title: "Titre de l'étape",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        }),
      ],
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
      name: "showPhotosSection",
      title: "Afficher la section Photographie sportive",
      description:
        "Désactivez pour masquer la section et le lien de menu correspondant (utile en attendant d'avoir des photos à publier).",
      type: "boolean",
      initialValue: true,
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
