export function Intro({
  kicker,
  heading,
  introText,
}: {
  kicker: string | null;
  heading: string;
  introText: string | null;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 pb-8 sm:pt-20">
      {kicker ? (
        <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
        {heading}
      </h1>
      {introText ? (
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
          {introText}
        </p>
      ) : null}
    </section>
  );
}
