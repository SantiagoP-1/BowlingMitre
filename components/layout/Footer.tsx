import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-line-soft py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">Bowling Mitre</p>
          <p className="mt-1 font-script text-2xl text-brand-teal">Club Mitre</p>
          <p className="mt-3 max-w-xs text-sm text-ink-dim">{business.address.value}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-ink-dim">
          <a
            href={buildWhatsAppLink("Hola! Quiero hacer una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-teal"
          >
            Escribinos por WhatsApp
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-teal"
          >
            Cómo llegar
          </a>
          <a
            href={business.social.instagram ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-teal"
          >
            Instagram
          </a>
        </div>
      </Container>

      <Container className="mt-10 border-t border-line-soft pt-6">
        <p className="text-xs text-ink-faint">© {new Date().getFullYear()} Bowling Mitre</p>
      </Container>
    </footer>
  );
}
