export function ContactSection({
  footerCta,
  contactEmail,
  contactPhone,
}: {
  footerCta: string | null;
  contactEmail: string;
  contactPhone: string | null;
}) {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28"
    >
      <h2 className="font-serif text-3xl italic text-foreground sm:text-4xl">
        {footerCta ?? "Un projet en tête ? Contactez-moi."}
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${contactEmail}`}
          className="rounded-full bg-ink px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-ink-foreground transition-colors hover:bg-accent"
        >
          {contactEmail}
        </a>
        {contactPhone ? (
          <a
            href={`tel:${contactPhone.replace(/\s+/g, "")}`}
            className="rounded-full bg-accent px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          >
            {contactPhone}
          </a>
        ) : null}
      </div>
    </section>
  );
}
