import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/data/experiences";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Fotos reales de ambiente. La de pool tiene clientes en cuadro, por eso
// se usa muy desenfocada — ambiente, no retrato. Se activan solas apenas
// existan los archivos.
const hasPistaPhoto = fs.existsSync(path.join(process.cwd(), "public/images/pista.png"));
const hasPoolPhoto = fs.existsSync(path.join(process.cwd(), "public/images/pool.png"));

const bowling = experiences.find((e) => e.slug === "bowling")!;
const pool = experiences.find((e) => e.slug === "pool-y-juegos")!;
const gastronomia = experiences.find((e) => e.slug === "gastronomia")!;

export function Experiencia() {
  return (
    <section id="experiencia" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="La experiencia"
          title="No es un restaurante. Es una noche entera."
          description="Tres formas de vivir Bowling Mitre — elegí una y arrancá."
        />

        <div className="flex flex-col gap-5 lg:flex-row">
          {/* Tile grande: bowling. Es el corazón del negocio, así que ocupa
              el doble de espacio que el resto en vez de competir en un
              grid de tres columnas iguales. */}
          <div className="relative flex h-80 flex-col justify-end overflow-hidden rounded-lg p-7 lg:h-140 lg:w-[58%] lg:p-9">
            {hasPistaPhoto ? (
              <Image
                src="/images/pista.png"
                alt="Pistas de bowling de Bowling Mitre"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-night-warm" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-night-deep via-night-deep/50 to-transparent" />

            <div className="relative">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-teal">{bowling.badge}</span>
              <h3 className="mt-2 font-display text-3xl font-bold lg:text-4xl">{bowling.name}</h3>
              <p className="mt-2 max-w-xs text-sm text-ink-dim">{bowling.tagline}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <span className="text-sm text-brand-amber">{bowling.priceLabel}</span>
                <Button
                  href={buildWhatsAppLink(bowling.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                >
                  {bowling.ctaLabel}
                </Button>
              </div>
            </div>
          </div>

          {/* Columna angosta: pool (con foto) + gastronomía (texto, sin
              foto) — dos bloques chicos que respiran distinto del tile
              grande de al lado. */}
          <div className="flex flex-col gap-5 lg:w-[42%]">
            <div className="relative flex h-64 flex-col justify-end overflow-hidden rounded-lg p-6 lg:h-67.5">
              {hasPoolPhoto ? (
                <Image
                  src="/images/pool.png"
                  alt=""
                  aria-hidden
                  fill
                  sizes="(min-width: 1024px) 24vw, 100vw"
                  className="object-cover object-bottom opacity-70 blur-sm"
                />
              ) : (
                <div className="absolute inset-0 bg-night-warm" />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/70 to-transparent" />

              <div className="relative">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-teal">{pool.badge}</span>
                <h3 className="mt-1 font-display text-xl font-bold">{pool.name}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="text-xs text-brand-amber">{pool.priceLabel}</span>
                  <Button
                    href={buildWhatsAppLink(pool.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                    size="md"
                  >
                    {pool.ctaLabel}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex h-64 flex-col justify-end border-t border-line-soft px-1 py-6 lg:h-67.5">
              <span className="text-xs uppercase tracking-[0.2em] text-ink-faint">
                {gastronomia.badge}
              </span>
              <h3 className="mt-1 font-display text-xl font-bold">{gastronomia.name}</h3>
              <p className="mt-1 text-sm text-ink-dim">{gastronomia.tagline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-xs text-brand-amber">{gastronomia.priceLabel}</span>
                <Button href="#carta" variant="ghost" size="md">
                  {gastronomia.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
