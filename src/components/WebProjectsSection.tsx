import Image from "next/image";

import { urlForImage } from "@/sanity/image";
import type { WebProject } from "@/sanity/types";

export function WebProjectsSection({
  label,
  note,
  projects,
}: {
  label: string | null;
  note: string | null;
  projects: WebProject[];
}) {
  if (projects.length === 0) return null;

  return (
    <section id="sites" className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="font-serif text-2xl italic text-foreground">
          {label ?? "Sites web"}
        </h2>
        {note ? (
          <p className="hidden text-xs text-muted sm:block">{note}</p>
        ) : null}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project._id}>
            <article>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden bg-surface"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={urlForImage(project.image)
                      .width(900)
                      .height(675)
                      .fit("crop")
                      .url()}
                    alt={project.image.alt ?? project.title}
                    fill
                    loading="lazy"
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </a>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-accent">
                {project.category}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Voir le site
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
