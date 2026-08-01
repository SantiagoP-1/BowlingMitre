import Image from "next/image";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/Icons";

export function Header() {
  return (
    <header className="relative isolate overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src="/images/banner.png"
          alt="Salón de Bowling Mitre"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-16 sm:py-20 md:py-24">
        <Image
          src="/images/logo1.png"
          alt="Bowling Mitre"
          width={783}
          height={758}
          className="h-32 w-auto sm:h-40"
          priority
        />

        <p className="max-w-md text-balance text-[15px] leading-relaxed text-cream/80 sm:text-base">
          {business.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button href={business.whatsapp.href} icon={<WhatsAppIcon />}>
            Escribinos
          </Button>
          <Button href={business.instagram.href} variant="outline" icon={<InstagramIcon />}>
            {business.instagram.display}
          </Button>
        </div>
      </div>
    </header>
  );
}
