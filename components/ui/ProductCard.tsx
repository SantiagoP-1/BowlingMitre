import type { Product } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-4">
      <div>
        <h4 className="font-display text-base font-semibold">{product.name}</h4>
        {product.description ? (
          <p className="mt-0.5 text-sm text-ink-dim">{product.description}</p>
        ) : null}
      </div>
      <span className="shrink-0 font-mono text-sm tabular-nums text-brand-amber">
        {product.price != null ? formatPrice(product.price) : "Consultar"}
      </span>
    </div>
  );
}
