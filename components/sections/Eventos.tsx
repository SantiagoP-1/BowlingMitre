import { business } from "@/data/business";
import { events } from "@/data/events";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";

const WHATSAPP_EVENTOS_HREF = `${business.whatsapp.href}?text=${encodeURIComponent(
  "Hola! Quiero consultar disponibilidad para un evento en Bowling Mitre."
)}`;

export function Eventos() {
  return (
    <section id="eventos" className="scroll-mt-14.5 border-b border-line bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-4xl text-brand-red sm:text-5xl">
            Eventos
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            Organizamos cumpleaños y eventos con pizza libre, bowling y pool
            incluidos.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">
          {events.map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-line bg-white p-6"
            >
              <p className="text-[15px] font-medium leading-snug text-ink">
                {item.name}
              </p>
              {item.description && (
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              )}
              <p className="mt-4 font-display text-2xl text-brand-red">
                {formatPrice(item.price)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={WHATSAPP_EVENTOS_HREF} icon={<WhatsAppIcon />}>
            Consultar disponibilidad para evento
          </Button>
        </div>
      </div>
    </section>
  );
}
