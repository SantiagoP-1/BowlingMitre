/**
 * Carta digital — estructura editable sin tocar componentes.
 * Contenido real, provisto por el cliente (carta completa).
 *
 * Para cargar o actualizar productos, editar los arrays de `products`
 * de cada categoría: { name, price?, description?, group? }.
 * `price` es opcional — algunos ítems de la carta original no traían
 * precio confirmado; en ese caso se muestra "Consultar" en la carta.
 * `group` agrupa productos dentro de una misma categoría (p. ej. los
 * tragos se dividen en Clásicos / Gin / Whisky / Con energizante / Otros).
 */

export type Product = {
  name: string;
  price?: number;
  description?: string;
  group?: string;
};

export type MenuCategory = {
  slug: string;
  name: string;
  /** Aclaración general de la categoría (p. ej. "todas incluyen papas fritas"). */
  note?: string;
  products: Product[];
};

export const menu: MenuCategory[] = [
  {
    slug: "hamburguesas",
    name: "Hamburguesas",
    note: "Todas incluyen papas fritas.",
    products: [
      { name: "Sola", price: 12000 },
      { name: "Jamón y Queso", price: 14000 },
      { name: "Queso y Cebolla Caramelizada", price: 14000 },
      { name: "Jamón, Queso y Huevo", price: 14500 },
      { name: "Jamón, Queso, Lechuga y Tomate", price: 14500 },
      { name: "Completa", description: "Jamón, queso, lechuga, tomate y huevo a la plancha", price: 15000 },
      { name: "Súper Completa", description: "Jamón, queso, lechuga, tomate, cebolla caramelizada, morrón y huevo", price: 16000 },
      { name: "Francesa", description: "Roquefort, tybo, cebolla caramelizada y huevo", price: 16000 },
      { name: "XXL", description: "Doble medallón, jamón, queso, cebolla caramelizada, morrón, lechuga, tomate y huevo", price: 20000 },
      { name: "Burger Combo", description: "Hamburguesa con jamón y queso + papas fritas + bebida sin alcohol 500cc", price: 16000, group: "Combo" },
    ],
  },
  {
    slug: "pizzas-grandes",
    name: "Pizzas Grandes",
    products: [
      { name: "Muzzarella", price: 15000 },
      { name: "Cebolla", price: 16000 },
      { name: "Jamón", price: 17000 },
      { name: "Jamón y Morrón", price: 18000 },
      { name: "Jamón y Tomate", price: 17500 },
      { name: "Jamón y Tomate con Ajo", price: 18000 },
      { name: "Jamón y Papas Fritas", price: 20000 },
      { name: "Jamón, Papas Fritas y 4 Huevos", price: 22000 },
      { name: "Jamón y 4 Huevos tipo Pollet", price: 19000 },
      { name: "Jamón, Morrón y Huevo", price: 20000 },
      { name: "Cantimpalo", price: 19000 },
      { name: "Cantimpalo y Huevo", price: 20000 },
      { name: "Roquefort", price: 19500 },
      { name: "Cebolla y Roquefort", price: 20000 },
      { name: "Anchoas", price: 20000 },
      { name: "Cebolla y Anchoas", price: 21000 },
      { name: "Media y Media", description: "Mitad jamón y morrón / mitad jamón y tomate" },
    ],
  },
  {
    slug: "pizzas-chicas",
    name: "Pizzas Chicas",
    products: [
      { name: "Muzzarella", price: 9000 },
      { name: "Cebolla", price: 9500 },
      { name: "Jamón", price: 10000 },
      { name: "Jamón y Morrón", price: 11000 },
      { name: "Jamón y Tomate", price: 11000 },
      { name: "Jamón y Tomate con Ajo", price: 11000 },
      { name: "Jamón y Huevos tipo Pollet", price: 11000 },
      { name: "Jamón, Morrón y Huevo", price: 12000 },
      { name: "Cantimpalo", price: 11000 },
      { name: "Cantimpalo y Huevo", price: 13000 },
      { name: "Roquefort", price: 11500 },
      { name: "Cebolla y Roquefort", price: 12000 },
      { name: "Anchoas", price: 12000 },
      { name: "Cebolla y Anchoas", price: 13000 },
    ],
  },
  {
    slug: "milanesas",
    name: "Milanesas",
    note: "Disponibles en sándwich o al plato. Guarnición: papas fritas o ensalada de 2 ingredientes.",
    products: [
      { name: "Milanesa Sola", price: 14500 },
      { name: "Jamón y Queso", price: 15500 },
      { name: "Jamón, Queso, Lechuga y Tomate", price: 16000 },
      { name: "Jamón, Queso y Huevo", price: 16000 },
      { name: "Jamón, Queso, Lechuga, Tomate y Huevo", price: 17000 },
      { name: "Completa", description: "Jamón, queso, lechuga, tomate, morrón, cebolla y huevo" },
      { name: "Napolitana", price: 17500 },
      { name: "Con 2 Huevos a la Plancha", price: 16000 },
      { name: "Napolitana + 2 Huevos", price: 19000 },
    ],
  },
  {
    slug: "empanadas",
    name: "Empanadas",
    products: [
      { name: "Carne", price: 2000 },
      { name: "Jamón y Queso", price: 2000 },
    ],
  },
  {
    slug: "ensaladas",
    name: "Ensaladas",
    products: [
      { name: "Mixta", price: 5000 },
      { name: "Lechuga y Tomate", price: 5000 },
      { name: "Zanahoria y Huevo", price: 5000 },
    ],
  },
  {
    slug: "papas-fritas",
    name: "Papas Fritas",
    products: [
      { name: "Papas Fritas", description: "Para compartir", price: 7000 },
      { name: "Papas con 2 Huevos", price: 8000 },
      { name: "Dip de Verdeo", price: 1000 },
      { name: "Dip de Cheddar", price: 1000 },
    ],
  },
  {
    slug: "postres",
    name: "Postres",
    products: [
      { name: "Don Pedro", price: 8000 },
      { name: "Bombón Escocés", price: 3500 },
      { name: "Cassata", price: 3000 },
      { name: "Bombón Patagónico", description: "Frutos del bosque, corazón de frutos rojos, chocolate, crema y cereza", price: 6500 },
      { name: "Bombón Italiano", description: "Vainilla, Nutella, avellanas y chocolate", price: 6500 },
    ],
  },
  {
    slug: "cafeteria",
    name: "Cafetería",
    products: [
      { name: "Café Chico", price: 3000 },
      { name: "Café en Jarrito", price: 3500 },
      { name: "Café Doble", price: 4000 },
      { name: "Café con Leche", price: 4000 },
      { name: "Licuados", price: 5000 },
      { name: "Licuados con Leche", price: 5000 },
      { name: "Té", price: 3000 },
    ],
  },
  {
    slug: "confiteria",
    name: "Confitería",
    products: [
      { name: "Papas de Copetín", price: 3000 },
      { name: "Maní", price: 1000 },
      { name: "Tostado de Miga", price: 8000 },
    ],
  },
  {
    slug: "cervezas",
    name: "Cervezas",
    products: [
      { name: "Quilmes Clásica Lata", price: 7000 },
      { name: "Brahma Lata", price: 8000 },
      { name: "Andes Rubia Lata", price: 8000 },
      { name: "Stella Artois Lata", price: 11000 },
      { name: "Stella Artois 500cc", price: 6000 },
      { name: "Andes (IPA, Roja o Negra)", price: 9000 },
      { name: "Andes 500cc", price: 5000 },
      { name: "Quilmes 500cc (Clásica / IPA)", price: 5000 },
      { name: "Brahma 500cc", price: 5000 },
      { name: "Stella Sin Alcohol", price: 5000 },
      { name: "Quilmes Stout Lata", price: 8000 },
    ],
  },
  {
    slug: "vinos",
    name: "Vinos",
    products: [
      { name: "Santa Julia Malbec", price: 10000 },
      { name: "Novecento Malbec", price: 9000 },
      { name: "Benjamín Malbec", price: 12000 },
      { name: "Trumpeter Malbec", price: 18000 },
      { name: "Santa Julia Chenin", price: 16000 },
      { name: "Novecento Raíces White Blend", price: 8500 },
      { name: "Alambrado Malbec", price: 15000 },
    ],
  },
  {
    slug: "champagne-sidras",
    name: "Champagne / Sidras",
    products: [
      { name: "Sidra 1930 (Demi Sec / Rosé / Pera)", price: 10000 },
      { name: "Capriccio Fiore Dulce", price: 16000 },
      { name: "Federico de Alvear", price: 14000 },
    ],
  },
  {
    slug: "tragos",
    name: "Tragos",
    products: [
      { name: "Fernet Branca con Coca", price: 7000, group: "Clásicos" },
      { name: "Gancia", price: 7000, group: "Clásicos" },
      { name: "Cinzano", price: 7000, group: "Clásicos" },
      { name: "Campari", price: 7000, group: "Clásicos" },
      { name: "Cuba Libre", price: 7000, group: "Clásicos" },
      { name: "Whiscola", price: 7000, group: "Clásicos" },

      { name: "Gin Tonic Gordon's", price: 7000, group: "Gin" },
      { name: "Gin Tonic Aconcagua", price: 8000, group: "Gin" },
      { name: "Gin Bombay", price: 9000, group: "Gin" },
      { name: "Gin Merle (Pink / Orange)", price: 7000, group: "Gin" },

      { name: "Whisky Blanders", price: 6000, group: "Whisky" },
      { name: "Whisky J&B", price: 8000, group: "Whisky" },
      { name: "Johnnie Walker Red Label", price: 9000, group: "Whisky" },
      { name: "Johnnie Walker Black Label", price: 12000, group: "Whisky" },
      { name: "Jameson", price: 9000, group: "Whisky" },

      { name: "Smirnoff + Speed", price: 9000, group: "Con energizante" },
      { name: "Gordon's + Speed", price: 9000, group: "Con energizante" },
      { name: "Ron Havana + Speed", price: 10000, group: "Con energizante" },
      { name: "Whisky + Speed", price: 8000, group: "Con energizante" },

      { name: "Smirnoff con Naranja", price: 7000, group: "Otros" },
      { name: "Daiquiri", price: 9000, group: "Otros" },
      { name: "Baileys", price: 9000, group: "Otros" },
      { name: "Baileys con Helado", price: 10000, group: "Otros" },
      { name: "Don Pedro", price: 9000, group: "Otros" },
    ],
  },
  {
    slug: "bebidas-sin-alcohol",
    name: "Bebidas sin alcohol",
    products: [
      { name: "Pepsi", price: 3500 },
      { name: "Pepsi Black", price: 3500 },
      { name: "7Up", price: 3500 },
      { name: "7Up Free", price: 3500 },
      { name: "Mirinda", price: 3500 },
      { name: "Paso de los Toros Pomelo", price: 3500 },
      { name: "H2Oh!", price: 3500 },
      { name: "Agua sin Gas", price: 3500 },
      { name: "Agua con Gas", price: 3500 },
      { name: "Gatorade", price: 4000 },
      { name: "Speed", price: 3500 },
    ],
  },
];
