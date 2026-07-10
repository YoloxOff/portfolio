import Link from "next/link";

const NAV_LINKS = [
  { href: "#sites", label: "Sites" },
  { href: "#photos", label: "Photos" },
  { href: "#contact", label: "Contact" },
];

export function Header({ logoText }: { logoText: string }) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-lg italic tracking-tight text-foreground"
        >
          {logoText}
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-6 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[11px] font-medium uppercase tracking-widest text-foreground"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
