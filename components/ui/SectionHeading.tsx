export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`mb-10 flex max-w-2xl flex-col gap-3 sm:mb-14 ${alignClasses}`}>
      <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-teal">
        <span aria-hidden className="h-1 w-1 rounded-full bg-brand-teal" />
        {eyebrow}
      </span>
      <h2 className="text-balance font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-balance text-base text-ink-dim">{description}</p>
      ) : null}
    </div>
  );
}
