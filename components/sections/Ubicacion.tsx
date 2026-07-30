import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { business } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Ubicacion() {
  return (
    <section id="ubicacion" className="border-t border-line-soft py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Ubicación" title="Encontranos en Balcarce" />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-line-soft bg-surface p-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">Dirección</p>
              <p className="mt-2 text-lg">{business.address.value}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                href={buildWhatsAppLink("Hola! Quería consultar por Bowling Mitre.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar por WhatsApp
              </Button>
              <Button href={business.mapsUrl} target="_blank" rel="noopener noreferrer" variant="ghost">
                Cómo llegar
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line-soft">
            <iframe
              title="Ubicación de Bowling Mitre en el mapa"
              src={business.mapsEmbedUrl}
              className="h-72 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
