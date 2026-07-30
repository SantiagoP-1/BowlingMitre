/**
 * Los tres pilares de la sección "Experiencia": juegos, no gastronomía.
 * Precios de la auditoría del sitio actual; cantidad de pistas/mesas
 * confirmada por el propio Instagram del negocio (@bowlingmitre).
 */

export type Experience = {
  slug: "bowling" | "pool-y-juegos" | "gastronomia";
  badge: string;
  name: string;
  tagline: string;
  priceLabel: string;
  ctaLabel: string;
  whatsappMessage: string;
};

export const experiences: Experience[] = [
  {
    slug: "bowling",
    badge: "Bowling",
    name: "4 pistas de bowling",
    tagline: "Grupos, amigos y cumpleaños. Para mayores de 10 años.",
    priceLabel: "desde $8.000",
    ctaLabel: "Reservar pista",
    whatsappMessage:
      "Hola! Quiero reservar una pista de bowling en Bowling Mitre.",
  },
  {
    slug: "pool-y-juegos",
    badge: "Pool & Juegos",
    name: "7 mesas de pool, metegol y tejo",
    tagline: "La esquina de la juntada con amigos.",
    priceLabel: "$18.000/hora",
    ctaLabel: "Reservar mesa",
    whatsappMessage: "Hola! Quiero reservar una mesa de pool en Bowling Mitre.",
  },
  {
    slug: "gastronomia",
    badge: "Gastronomía",
    name: "Pizzas, hamburguesas y más",
    tagline: "El complemento perfecto de la noche de juego.",
    priceLabel: "pizzas desde $9.000",
    ctaLabel: "Ver la carta",
    whatsappMessage: "Hola! Quería consultar por la carta de Bowling Mitre.",
  },
];

/** Precios individuales de juegos, tal como figuran hoy en el catálogo. */
export const gamePrices = [
  { name: "Línea Bowling (mayores de 10 años)", price: 8000 },
  { name: "Pool — por hora", price: 18000 },
  { name: "Pool — por ficha", price: 6000 },
  { name: "Metegol — ficha", price: 1000 },
  { name: "Tejo — ficha", price: 3000 },
] as const;
