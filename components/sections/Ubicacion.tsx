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
      </Container>

      {/* Único quiebre de ancho de la página: el mapa sangra hasta el
          borde del viewport en vez de vivir contenido en una tarjeta más. */}
      <div className="relative h-72 w-full sm:h-96 lg:h-120">
        <iframe
          title="Ubicación de Bowling Mitre en el mapa"
          src={business.mapsEmbedUrl}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <Container>
        <div className="flex flex-col gap-6 border-b border-line-soft pb-10 pt-10 sm:flex-row sm:items-center sm:justify-between">
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
      </Container>
    </section>
  );
}
