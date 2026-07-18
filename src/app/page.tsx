import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { Intro } from "@/components/Intro";
import { PhotoGridSection } from "@/components/PhotoGridSection";
import { WebProjectsSection } from "@/components/WebProjectsSection";
import { WorkingStyleSection } from "@/components/WorkingStyleSection";
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import {
  siteSettingsQuery,
  sportsPhotosQuery,
  webProjectsQuery,
} from "@/sanity/queries";
import type { SiteSettings, SportsPhoto, WebProject } from "@/sanity/types";

export const revalidate = 60;

async function getData() {
  if (!client) return { settings: null, webProjects: [], sportsPhotos: [] };

  const [settings, webProjects, sportsPhotos] = await Promise.all([
    client.fetch<SiteSettings>(siteSettingsQuery),
    client.fetch<WebProject[]>(webProjectsQuery),
    client.fetch<SportsPhoto[]>(sportsPhotosQuery),
  ]);

  return { settings, webProjects, sportsPhotos };
}

export async function generateMetadata(): Promise<Metadata> {
  if (!client) return {};

  const settings = await client.fetch<SiteSettings>(siteSettingsQuery);

  if (!settings) return {};

  const icon = settings.logoImage?.asset?._ref
    ? urlForImage(settings.logoImage).width(64).height(64).fit("max").url()
    : undefined;

  return {
    title: settings.seoTitle || settings.heading,
    description: settings.seoDescription || settings.introText || undefined,
    icons: icon ? { icon } : undefined,
  };
}

export default async function Home() {
  const { settings, webProjects, sportsPhotos } = await getData();
  const showPhotos = settings?.showPhotosSection !== false;

  if (!settings) {
    return (
      <main className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="font-serif text-2xl italic text-foreground">
          Contenu non configuré
        </h1>
        <p className="mt-4 text-sm text-muted">
          {client
            ? "Ajoutez les « Réglages du site » dans le studio Sanity (/studio) pour afficher la page."
            : "Configurez NEXT_PUBLIC_SANITY_PROJECT_ID dans .env.local puis ajoutez du contenu dans le studio Sanity (/studio)."}
        </p>
      </main>
    );
  }

  return (
    <>
      {settings.heroImage?.asset?._ref && (
        <HeroBanner image={settings.heroImage} />
      )}
      <Header
        logoText={settings.logoText}
        showLogoText={settings.showLogoText}
        logoImage={settings.logoImage}
        logoSize={settings.logoSize}
        logoPosition={settings.logoPosition}
        showPhotosLink={showPhotos}
      />
      <main className="flex-1">
        <Intro
          kicker={settings.kicker}
          heading={settings.heading}
          introText={settings.introText}
        />
        <WorkingStyleSection
          label={settings.workingStyleLabel}
          intro={settings.workingStyleIntro}
          steps={settings.workingSteps}
        />
        <WebProjectsSection
          label={settings.sitesLabel}
          note={settings.sitesNote}
          projects={webProjects}
        />
        {showPhotos && (
          <PhotoGridSection
            label={settings.photosLabel}
            instagramHandle={settings.instagramHandle}
            instagramUrl={settings.instagramUrl}
            photos={sportsPhotos}
          />
        )}
      </main>
      <Footer
        footerCta={settings.footerCta}
        contactEmail={settings.contactEmail}
        instagramUrl={settings.instagramUrl}
        linkedinUrl={settings.linkedinUrl}
      />
    </>
  );
}
