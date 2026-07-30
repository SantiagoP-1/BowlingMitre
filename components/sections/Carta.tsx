"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
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
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div className="flex max-w-2xl flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-teal/40 bg-brand-teal/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-brand-teal">
              Carta interactiva
            </span>
            <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">
              Para acompañar la partida
            </h2>
            <p className="max-w-xl text-balance text-base text-ink-dim">
              Elegí una categoría. Los precios se actualizan directo desde nuestra carta.
            </p>
          </div>

          <div className="hidden shrink-0 flex-col items-end text-right lg:flex">
            <span className="font-display text-7xl font-extrabold leading-none text-line">
              {menu.length}
            </span>
            <span className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-faint">
              categorías,
              <br />
              un solo lugar
            </span>
          </div>
        </div>

        <CategoryTabs categories={menu} activeSlug={activeSlug} onSelect={setActiveSlug} />

        {activeCategory.note ? (
          <p className="mt-6 text-sm text-ink-faint">{activeCategory.note}</p>
        ) : null}

        <div className="mt-8 flex flex-col gap-10">
          {activeCategory.products.length > 0 ? (
            groups.map((group) => (
              <div key={group.label || "default"}>
                {group.label ? (
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-teal">
                    {group.label}
                  </h3>
                ) : null}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.products.map((product) => (
                    <ProductCard key={product.name} product={product} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-surface/50 p-10 text-center">
              <p className="font-display text-lg font-bold">Próximamente</p>
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
