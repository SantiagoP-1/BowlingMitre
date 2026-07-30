import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg transition-colors hover:bg-brand-red-deep sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11a15 15 0 0 1-1.64-.6 12.6 12.6 0 0 1-4.83-4.27c-.35-.48-.71-1.05-.94-1.66-.24-.61-.13-1.36.29-1.87.29-.35.65-.4.94-.4.19 0 .38.01.55.02.18.01.42-.07.66.5.24.58.82 2.01.9 2.16.08.15.13.33.02.53-.11.2-.16.32-.31.5-.15.18-.32.4-.46.54-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.66-.08.18-.2.77-.9.98-1.21.21-.31.42-.26.7-.16.29.11 1.83.87 2.14 1.03.31.16.52.24.6.37.08.14.08.79-.16 1.47Z" />
      </svg>
    </a>
  );
}
