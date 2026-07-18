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
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="border-b border-border pb-4">
        <h2 className="font-serif text-2xl italic text-foreground">
          {label ?? "Ma façon de travailler"}
        </h2>
        {intro ? (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
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
            <h3 className="mt-3 text-base font-semibold text-foreground">
              {step.title}
            </h3>
            {step.description ? (
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
