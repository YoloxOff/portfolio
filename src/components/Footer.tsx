export function Footer({
  footerCta,
  contactEmail,
  contactPhone,
  instagramUrl,
  linkedinUrl,
}: {
  footerCta: string | null;
  contactEmail: string;
  contactPhone: string | null;
  instagramUrl: string | null;
  linkedinUrl: string | null;
}) {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div id="contact">
          {footerCta ? (
            <p className="font-serif text-lg italic text-foreground">
              {footerCta}
            </p>
          ) : null}
          <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {contactEmail}
            </a>
            {contactPhone ? (
              <a
                href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {contactPhone}
              </a>
            ) : null}
          </div>
        </div>

        {instagramUrl || linkedinUrl ? (
          <ul className="flex items-center gap-6">
            {instagramUrl ? (
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center text-foreground transition-colors hover:text-accent"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>
            ) : null}
            {linkedinUrl ? (
              <li>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}
