import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { packages } from "@/data/packages";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Recorte muy cerrado y desenfocado de la foto de pool, solo como textura
// cálida junto al título — no un retrato. Se activa sola si existe el archivo.
const hasPoolPhoto = fs.existsSync(path.join(process.cwd(), "public/images/pool.png"));

export function Cumpleanos() {
  return (
    <section id="cumpleanos" className="border-t border-line-soft bg-night-warm py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Columna editorial: título expresivo + imagen que invade el
              borde de la columna de al lado. */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-violet/40 bg-brand-violet/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-violet-200">
              Cumpleaños y eventos
            </span>

            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
              Cumpleaños que se{" "}
              <span className="bg-linear-to-r from-brand-violet to-brand-teal bg-clip-text text-transparent">
                recuerdan
              </span>
              , no solo se festejan
            </h2>

            <p className="mt-5 max-w-sm text-balance text-ink-dim">
              Pizza libre, bowling y pool en un solo paquete. Elegí el que más
              te cierra y consultalo directo por WhatsApp.
            </p>

            <p className="mt-6 max-w-sm text-sm text-ink-faint">
              Los turnos de fin de semana se completan con anticipación —
              escribinos con la fecha que tenés pensada y confirmamos
              disponibilidad.
            </p>

            {hasPoolPhoto ? (
              <div className="relative mt-10 hidden h-40 w-56 overflow-hidden rounded-2xl border border-line-soft lg:-mr-16 lg:block xl:h-48 xl:w-64">
                <Image
                  src="/images/pool.png"
                  alt=""
                  aria-hidden
                  fill
                  sizes="256px"
                  className="scale-125 object-cover object-left blur-[2px]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-night-warm/80 via-transparent to-brand-violet/20" />
              </div>
            ) : null}
          </div>

          {/* Lista editorial en vez de tarjetas: el precio funciona como el
              elemento tipográfico grande de cada fila. */}
          <div className="divide-y divide-line-soft border-t border-line-soft">
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
                className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8"
              >
                <div className="font-mono text-4xl font-bold tabular-nums text-brand-amber sm:text-5xl">
                  {formatPrice(pkg.priceFrom)}
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                    {pkg.category} · {pkg.priceNote}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-extrabold">{pkg.name}</h3>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-sm text-ink-dim">
                        <span aria-hidden className="text-emerald-400">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href={buildWhatsAppLink(pkg.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  className="justify-self-start sm:justify-self-end"
                >
                  Consultar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
