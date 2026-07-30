"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { ProductCard } from "@/components/ui/ProductCard";
import { menu } from "@/data/menu";

/** Agrupa los productos de una categoría respetando el orden de aparición de cada grupo. */
function groupProducts(products: (typeof menu)[number]["products"]) {
  const order: string[] = [];
  const groups = new Map<string, typeof products>();

  for (const product of products) {
    const key = product.group ?? "";
    if (!groups.has(key)) {
      order.push(key);
      groups.set(key, []);
    }
    groups.get(key)!.push(product);
  }

  return order.map((key) => ({ label: key, products: groups.get(key)! }));
}

export function Carta() {
  const [activeSlug, setActiveSlug] = useState(menu[0].slug);
  const activeCategory = menu.find((category) => category.slug === activeSlug) ?? menu[0];
  const groups = groupProducts(activeCategory.products);

  return (
    <section id="carta" className="py-20 sm:py-28">
      <Container maxW="max-w-7xl">
        <SectionHeading
          eyebrow="Carta"
          title="Para acompañar la partida"
          description={`Elegí una categoría — ${menu.length} en total, de la cerveza al postre.`}
        />

        <CategoryTabs categories={menu} activeSlug={activeSlug} onSelect={setActiveSlug} />

        {activeCategory.note ? (
          <p className="mt-6 text-sm text-ink-faint">{activeCategory.note}</p>
        ) : null}

        <div className="mt-8 flex flex-col gap-10">
          {activeCategory.products.length > 0 ? (
            groups.map((group) => (
              <div key={group.label || "default"}>
                {group.label ? (
                  <h3 className="mb-2 text-xs uppercase tracking-[0.2em] text-brand-teal">
                    {group.label}
                  </h3>
                ) : null}
                <div className="grid divide-y divide-line-soft sm:grid-cols-2 sm:gap-x-12 sm:divide-y-0">
                  {group.products.map((product) => (
                    <div key={product.name} className="border-line-soft sm:border-b">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="border-t border-line-soft py-10 text-center">
              <p className="font-display text-lg font-semibold">Próximamente</p>
              <p className="mt-2 text-sm text-ink-dim">
                Estamos cargando los productos de {activeCategory.name.toLowerCase()}.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
