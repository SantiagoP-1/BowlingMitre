import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/ui/PackageCard";
import { packages } from "@/data/packages";

export function Cumpleanos() {
  return (
    <section id="cumpleanos" className="border-t border-line-soft bg-night-warm py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cumpleaños y eventos"
          title="Cumpleaños que se recuerdan, no solo se festejan"
          description="Pizza libre, bowling y pool en un solo paquete. Elegí el que más te cierra y consultalo directo por WhatsApp."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>

        <p className="mt-8 max-w-xl text-sm text-ink-faint">
          Los turnos de fin de semana se completan con anticipación —
          escribinos con la fecha que tenés pensada y confirmamos disponibilidad.
        </p>
      </Container>
    </section>
  );
}
