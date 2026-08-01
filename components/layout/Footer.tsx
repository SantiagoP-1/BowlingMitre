import Image from "next/image";
import { business } from "@/data/business";
import { WhatsAppIcon, InstagramIcon, FacebookIcon, PinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-icon.png"
                alt=""
                width={521}
                height={366}
                className="h-9 w-auto"
              />
              <h3 className="font-display text-xl">Bowling Mitre</h3>
            </div>
            <p className="mt-3 max-w-xs text-[13px] italic leading-relaxed text-cream/60">
              &ldquo;Más que un bowling, somos un lugar de encuentro. En
              Bowling Mitre creemos en compartir momentos inolvidables con
              familia y amigos, creando recuerdos que perduran. Gracias a
              Balcarce por recibirnos y permitirnos ser parte de su
              historia.&rdquo;
            </p>
          </div>

          <div>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-sm text-cream/75 transition-colors hover:text-cream"
            >
              <PinIcon />
              <span>{business.address}</span>
            </a>
            <div className="mt-3 overflow-hidden rounded-lg border border-cream/10">
              <iframe
                src="https://www.google.com/maps?q=-37.8422926,-58.2498599&z=16&output=embed"
                width="100%"
                height="170"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Bowling Mitre en el mapa"
                className="block border-0"
              />
            </div>
          </div>

          <div className="sm:justify-self-end">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-cream/60">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={business.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-cream/75 transition-colors hover:text-cream"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={business.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-cream/75 transition-colors hover:text-cream"
                >
                  <InstagramIcon /> {business.instagram.display}
                </a>
              </li>
              <li>
                <a
                  href={business.facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-cream/75 transition-colors hover:text-cream"
                >
                  <FacebookIcon /> {business.facebook.display}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-5 text-xs text-cream/55">
        © {new Date().getFullYear()} Bowling Mitre — González Cháves 315, Balcarce
      </div>
    </footer>
  );
}
