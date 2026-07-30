import type { Product } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl border border-line-soft bg-surface p-5">
      <div className="mb-4 h-24 rounded-lg bg-linear-to-br from-wood-deep to-wood" />
      <h4 className="font-display text-lg font-bold">{product.name}</h4>
      {product.description ? (
        <p className="mt-1 text-sm text-ink-dim">{product.description}</p>
      ) : null}
      <p className="mt-3 font-mono text-base tabular-nums text-brand-amber">
        {product.price != null ? formatPrice(product.price) : "Consultar"}
      </p>
    </div>
  );
}
