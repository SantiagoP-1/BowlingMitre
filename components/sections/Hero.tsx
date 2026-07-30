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

      <div className="glow-orb -z-10 right-[10%] top-[8%] h-64 w-64 bg-brand-violet" />
      <div className="glow-orb -z-10 left-[4%] top-[32%] h-48 w-48 bg-brand-teal [animation-delay:-4s]" />
      <div className="glow-orb -z-10 bottom-[8%] right-[26%] h-56 w-56 bg-brand-red [animation-delay:-8s]" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-wood-deep/35 via-wood/15 to-transparent"
      />

      <Container className="relative py-24 sm:py-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-teal/40 bg-brand-teal/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-brand-teal">
          Balcarce, Buenos Aires
        </span>

        <h1 className="max-w-3xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl">
          Bowling,{" "}
          <span className="bg-linear-to-r from-brand-red to-brand-amber bg-clip-text text-transparent">
            pool
          </span>{" "}
          y gastronomía en un solo lugar
        </h1>

        <p className="mt-3 font-script text-3xl text-brand-teal [text-shadow:0_0_18px_rgba(47,217,203,0.55)] sm:text-4xl">
          Club Mitre
        </p>

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
