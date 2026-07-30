/**
 * Paquetes de cumpleaños y eventos.
 * Contenido e importes reales, provistos por el cliente.
 */

export type Package = {
  slug: string;
  category: string;
  name: string;
  priceFrom: number;
  priceNote: string;
  includes: string[];
  whatsappMessage: string;
};

export const packages: Package[] = [
  {
    slug: "cumple-pizza-libre",
    category: "Cumple infantil",
    name: "Pizza Libre",
    priceFrom: 18000,
    priceNote: "por chico · mínimo 10 chicos",
    includes: [
      "Pizza libre de muzzarella",
      "1 gaseosa por persona",
      "1 hora de bowling",
      "45 minutos de pool",
    ],
    whatsappMessage:
      "Hola! Quiero consultar por el paquete de cumpleaños Pizza Libre.",
  },
  {
    slug: "cumple-burger",
    category: "Cumple infantil",
    name: "Burger",
    priceFrom: 20000,
    priceNote: "por chico · mínimo 10 chicos",
    includes: [
      "Hamburguesa XL con jamón y queso",
      "Papas fritas",
      "Gaseosa 500cc",
      "1 hora de bowling",
      "45 minutos de pool",
    ],
    whatsappMessage:
      "Hola! Quiero consultar por el paquete de cumpleaños Burger.",
  },
  {
    slug: "pizza-libre-eventos",
    category: "Grupos y eventos",
    name: "Pizza libre",
    priceFrom: 14000,
    priceNote: "por persona · mínimo 12 personas, solo con reserva",
    includes: [
      "Todas las variedades de la carta, excepto las pizzas con papas fritas",
      "Ideal cumpleaños de adultos, despedidas, egresados",
    ],
    whatsappMessage: "Hola! Quiero consultar por el paquete de Pizza libre.",
  },
];
