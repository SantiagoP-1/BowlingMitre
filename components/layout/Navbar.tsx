import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#cumpleanos", label: "Cumpleaños" },
  { href: "#carta", label: "Carta" },
  { href: "#ubicacion", label: "Ubicación" },
];

// Se activa automáticamente apenas exista el archivo real en
// public/images/logo-horizontal.png — mientras tanto usa el wordmark de respaldo.
const hasRealLogo = fs.existsSync(path.join(process.cwd(), "public/images/logo-horizontal.png"));

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-night-deep/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2">
          {hasRealLogo ? (
            <Image
              src="/images/logo-horizontal.png"
              alt="Bowling Mitre"
              width={170}
              height={63}
              priority
              className="h-8 w-auto sm:h-9"
            />
          ) : (
            <span className="flex items-center gap-2 font-display text-sm font-extrabold tracking-wide">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full bg-brand-red shadow-[0_0_12px_2px_rgba(227,28,35,0.7)]"
              />
              BOWLING MITRE
            </span>
          )}
        </a>

        <nav aria-label="Secciones" className="hidden gap-6 font-mono text-xs uppercase tracking-wide text-ink-dim md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-brand-teal">
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={buildWhatsAppLink("Hola! Quiero reservar en Bowling Mitre.")} target="_blank" rel="noopener noreferrer" size="md">
          Reservar
        </Button>
      </Container>
    </header>
  );
}
