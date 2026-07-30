import { business } from "@/data/business";

/** Arma un link de wa.me con el mensaje precargado. */
export function buildWhatsAppLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${business.phone.whatsapp}?text=${text}`;
}

export const defaultWhatsAppMessage =
  "Hola! Quería hacer una consulta sobre Bowling Mitre.";
