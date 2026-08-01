import { menu } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export function Carta() {
  return (
    <section aria-label="Carta" className="mx-auto max-w-5xl">
      {menu.map((category, index) => {
        const number = String(index + 1).padStart(2, "0");
        const tinted = index % 2 === 1;

        return (
          <div
            key={category.id}
            id={category.id}
            className={`scroll-mt-[58px] border-b border-line ${
              tinted ? "bg-cream-soft" : ""
            }`}
          >
            <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
              <div className="grid gap-6 md:grid-cols-[13rem_1fr] md:gap-14">
                <div className="md:sticky md:top-16 md:self-start">
                  <span className="font-display text-6xl leading-none text-brand-red/20 sm:text-7xl">
                    {number}
                  </span>
                  {category.note && (
                    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-brand-orange">
                      {category.note}
                    </p>
                  )}
                  <h2 className="mt-1.5 font-display text-3xl text-brand-red sm:text-4xl">
                    {category.title}
                  </h2>
                  <div className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-brand-red to-brand-orange" />
                </div>

                <ul className="grid content-start gap-x-14 gap-y-6 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <p className="text-[15px] font-medium leading-snug text-ink">
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="mt-1 text-[13px] leading-snug text-ink-muted">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <p className="shrink-0 tabular-nums text-[15px] font-medium text-brand-red">
                        {formatPrice(item.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
