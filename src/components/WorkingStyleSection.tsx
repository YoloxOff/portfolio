import type { WorkingStep } from "@/sanity/types";

export function WorkingStyleSection({
  label,
  intro,
  steps,
}: {
  label: string | null;
  intro: string | null;
  steps: WorkingStep[] | null;
}) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="bg-ink py-16 text-ink-foreground sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-2xl italic text-ink-foreground sm:text-3xl">
            {label ?? "Ma façon de travailler"}
          </h2>
          {intro ? (
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted sm:text-right">
              {intro}
            </p>
          ) : null}
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="font-serif text-3xl italic text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-ink-foreground">
                {step.title}
              </h3>
              {step.description ? (
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
