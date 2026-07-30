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
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-dim">
              Cumpleaños y eventos
            </span>

            <h2 className="mt-4 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Cumpleaños que se <span className="text-brand-violet">recuerdan</span>, no solo se
              festejan
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
              <div className="relative mt-10 hidden h-40 w-56 overflow-hidden rounded-lg lg:-mr-16 lg:block xl:h-48 xl:w-64">
                <Image
                  src="/images/pool.png"
                  alt=""
                  aria-hidden
                  fill
                  sizes="256px"
                  className="scale-125 object-cover object-left blur-[2px]"
                />
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
                  <span className="text-xs uppercase tracking-[0.2em] text-ink-faint">
                    {pkg.category} · {pkg.priceNote}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold">{pkg.name}</h3>
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
