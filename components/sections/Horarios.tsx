import { business } from "@/data/business";
import { currentDayName } from "@/lib/hours";

export function Horarios() {
  const today = currentDayName();

  return (
    <section id="horarios" className="scroll-mt-[58px] border-b border-line bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-orange">
            Cuándo encontrarnos
          </p>
          <h2 className="mt-2 font-display text-4xl text-brand-red sm:text-5xl">
            Horarios
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            Abiertos todos los días excepto los martes.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7">
          {business.hours.map((h) => {
            const isToday = h.day.toLowerCase() === today.toLowerCase();
            return (
              <div
                key={h.day}
                className={`rounded-lg border px-3 py-5 text-center ${
                  isToday
                    ? "border-brand-red bg-brand-red"
                    : "border-line bg-white"
                }`}
              >
                <p
                  className={`text-[11px] font-medium uppercase tracking-wide ${
                    isToday ? "text-cream/75" : "text-ink-muted"
                  }`}
                >
                  {h.day}
                </p>
                <p
                  className={`mt-2 font-display text-lg tabular-nums leading-tight ${
                    isToday
                      ? "text-cream"
                      : h.closed
                        ? "text-ink-muted"
                        : "text-ink"
                  }`}
                >
                  {h.hours}
                </p>
                {isToday && (
                  <p className="mt-1.5 text-[10px] font-medium uppercase tracking-wide text-cream/75">
                    Hoy
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
