export function Footer({
  logoText,
  instagramUrl,
  linkedinUrl,
}: {
  logoText: string;
  instagramUrl: string | null;
  linkedinUrl: string | null;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {logoText}
        </p>
        {instagramUrl || linkedinUrl ? (
          <ul className="flex items-center gap-6">
            {instagramUrl ? (
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
                >
                  Instagram ↗
                </a>
              </li>
            ) : null}
            {linkedinUrl ? (
              <li>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline decoration-transparent underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  LinkedIn ↗
                </a>
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}
