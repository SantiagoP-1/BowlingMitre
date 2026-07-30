import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/data/experiences";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Fotos reales de ambiente. La de pool tiene clientes en cuadro, por eso
// se usa muy desenfocada y con overlay oscuro fuerte — ambiente, no
// retrato. Se activan solas apenas existan los archivos.
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
          <div className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl border border-line-soft p-7 lg:h-140 lg:w-[58%] lg:p-9">
            {hasPistaPhoto ? (
              <Image
                src="/images/pista.png"
                alt="Pistas de bowling de Bowling Mitre"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-night-warm to-night-deep" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-night-deep via-night-deep/60 to-transparent" />

            <span
              aria-hidden
              className="pointer-events-none absolute right-4 top-2 select-none font-display text-[9rem] font-extrabold leading-none text-paper/10 lg:text-[13rem]"
            >
              4
            </span>

            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-teal">
                {bowling.badge}
              </span>
              <h3 className="mt-2 font-display text-3xl font-extrabold lg:text-4xl">{bowling.name}</h3>
              <p className="mt-2 max-w-xs text-sm text-ink-dim">{bowling.tagline}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <span className="font-mono text-sm text-brand-amber">{bowling.priceLabel}</span>
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

          {/* Columna angosta: pool (con foto) + gastronomía (sin foto,
              acento de madera) — dos tiles chicos que respiran distinto
              del tile grande de al lado. */}
          <div className="flex flex-col gap-5 lg:w-[42%]">
            <div className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl border border-line-soft p-6 lg:h-67.5">
              {hasPoolPhoto ? (
                <Image
                  src="/images/pool.png"
                  alt=""
                  aria-hidden
                  fill
                  sizes="(min-width: 1024px) 24vw, 100vw"
                  className="object-cover object-bottom opacity-45 blur-sm"
                />
              ) : (
                <div className="absolute inset-0 bg-linear-to-br from-night-warm to-night-deep" />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/85 to-surface/40" />

              <span
                aria-hidden
                className="pointer-events-none absolute right-3 top-0 select-none font-display text-[6.5rem] font-extrabold leading-none text-paper/10"
              >
                7
              </span>

              <div className="relative">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-teal">
                  {pool.badge}
                </span>
                <h3 className="mt-1 font-display text-xl font-extrabold">{pool.name}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-brand-amber">{pool.priceLabel}</span>
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

            <div className="relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl border border-line-soft bg-surface p-6 lg:h-67.5">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-brand-amber opacity-20 blur-3xl"
              />
              <div className="relative">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                  {gastronomia.badge}
                </span>
                <h3 className="mt-1 font-display text-xl font-extrabold">{gastronomia.name}</h3>
                <p className="mt-1 text-sm text-ink-dim">{gastronomia.tagline}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-brand-amber">{gastronomia.priceLabel}</span>
                  <Button href="#carta" variant="ghost" size="md">
                    {gastronomia.ctaLabel}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
