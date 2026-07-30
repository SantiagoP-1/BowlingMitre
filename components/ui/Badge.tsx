import type { ReactNode } from "react";

const tones = {
  red: "bg-brand-red/15 text-red-300 border-brand-red/40",
  teal: "bg-brand-teal/10 text-teal-200 border-brand-teal/40",
  amber: "bg-brand-amber/15 text-amber-200 border-brand-amber/40",
  violet: "bg-brand-violet/15 text-violet-200 border-brand-violet/40",
} as const;

export function Badge({
  tone = "red",
  children,
}: {
  tone?: keyof typeof tones;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-3 py-1 font-mono text-xs uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
