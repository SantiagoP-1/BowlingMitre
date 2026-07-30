import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/data/experiences";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const glowByIndex = ["bg-brand-red", "bg-brand-teal", "bg-brand-amber"];

// Foto real de ambiente (sala de pool). Tiene clientes en cuadro, por eso
// se usa muy desenfocada y con overlay oscuro fuerte — ambiente, no
// retrato. Se activa sola apenas exista public/images/pool.png.
const hasPoolPhoto = fs.existsSync(path.join(process.cwd(), "public/images/pool.png"));

export function Experiencia() {
  return (
    <section id="experiencia" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="La experiencia"
          title="No es un restaurante. Es una noche entera."
          description="Tres formas de vivir Bowling Mitre — elegí una y arrancá."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => {
            const showPoolPhoto = hasPoolPhoto && experience.slug === "pool-y-juegos";

            return (
              <div
                key={experience.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line-soft bg-surface p-6"
              >
                {showPoolPhoto ? (
                  <>
                    <Image
                      src="/images/pool.png"
                      alt=""
                      aria-hidden
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-bottom opacity-40 blur-md scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/90 to-surface/70" />
                  </>
                ) : (
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-50 ${glowByIndex[index]}`}
                  />
                )}

                <div className="relative">
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                    {experience.badge}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold">{experience.name}</h3>
                  <p className="mt-2 text-sm text-ink-dim">{experience.tagline}</p>
                  <p className="mt-4 font-mono text-sm text-brand-amber">{experience.priceLabel}</p>
                </div>

                <Button
                  href={
                    experience.slug === "gastronomia"
                      ? "#carta"
                      : buildWhatsAppLink(experience.whatsappMessage)
                  }
                  target={experience.slug === "gastronomia" ? undefined : "_blank"}
                  rel={experience.slug === "gastronomia" ? undefined : "noopener noreferrer"}
                  variant="ghost"
                  className="relative mt-6 self-start"
                >
                  {experience.ctaLabel}
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
