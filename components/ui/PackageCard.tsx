import type { Package } from "@/data/packages";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-line-soft bg-surface p-6">
      <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-brand-violet/35 blur-3xl" />

      <span className="relative font-mono text-xs uppercase tracking-widest text-ink-faint">
        {pkg.category}
      </span>
      <h3 className="relative font-display text-2xl font-extrabold">{pkg.name}</h3>
      <p className="relative font-mono text-sm text-brand-teal">
        desde {formatPrice(pkg.priceFrom)} · {pkg.priceNote}
      </p>

      <ul className="relative flex flex-col gap-2">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-dim">
            <span aria-hidden className="mt-0.5 text-emerald-400">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppLink(pkg.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-2 rounded-full bg-brand-red px-4 py-3 text-center font-mono text-xs uppercase tracking-wide text-white transition hover:brightness-110"
      >
        Consultar este paquete
      </a>
    </div>
  );
}
