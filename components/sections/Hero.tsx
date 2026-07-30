import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Se activa automáticamente apenas exista public/images/pista.png —
// mientras tanto usa el fondo nocturno recreado en CSS.
const heroPhotoPath = "public/images/pista.png";
const hasHeroPhoto = fs.existsSync(path.join(process.cwd(), heroPhotoPath));

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      {hasHeroPhoto ? (
        <>
          <Image
            src="/images/pista.png"
            alt="Pistas de bowling de Bowling Mitre"
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover"
          />
          <div className="absolute inset-0 -z-20 bg-linear-to-t from-night-deep via-night/80 to-night/40" />
        </>
      ) : (
        <div className="absolute inset-0 -z-20 bg-linear-to-b from-night-deep via-night to-night-warm" />
      )}

      {/* Detalle de estudio: etiqueta rotada al borde — no agrega contenido,
          solo redistribuye lo que ya dice el badge de ubicación. */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-paper/35 lg:block"
      >
        Bowling Mitre — Balcarce
      </span>

      <a
        href="#experiencia"
        aria-label="Ver más, ir a la siguiente sección"
        className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="h-10 w-px bg-linear-to-b from-transparent via-paper/40 to-transparent transition-colors group-hover:via-brand-teal" />
      </a>

      <Container className="relative py-24 sm:py-28">
        <span className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-dim">
          Balcarce · Buenos Aires
        </span>

        <h1 className="max-w-3xl text-balance font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">
          Bowling, <span className="text-brand-amber">pool</span> y gastronomía en un solo lugar
        </h1>

        <p className="mt-3 font-script text-3xl text-brand-teal sm:text-4xl">Club Mitre</p>

        <p className="mt-5 max-w-xl text-balance text-lg text-ink-dim">
          4 pistas de bowling, 7 mesas de pool, metegol, tejo y una carta
          pensada para compartir. Reservá tu lugar o consultá por tu
          cumpleaños directo por WhatsApp.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Button
            href={buildWhatsAppLink("Hola! Quiero reservar en Bowling Mitre.")}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Reservar por WhatsApp
          </Button>
          <Button href="#carta" variant="ghost" size="lg">
            Ver la carta
          </Button>
        </div>
      </Container>
    </section>
  );
}
