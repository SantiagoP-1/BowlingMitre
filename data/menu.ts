export type MenuItem = {
  name: string;
  description?: string;
  price: number | null;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "juegos",
    title: "Juegos",
    note: "Bowling · Pool · Metegol · Tejo",
    items: [
      { name: "Línea bowling", description: "Para mayores de 10 años", price: 8000 },
      { name: "Pool, la hora", price: 18000 },
      { name: "Pool, ficha", price: 6000 },
      { name: "Metegol, ficha", price: 1000 },
      { name: "Tejo, ficha", price: 3000 },
    ],
  },
  {
    id: "confiteria",
    title: "Confitería",
    items: [
      { name: "Papas de copetín", price: 3000 },
      { name: "Maní, paquete", price: 1000 },
      { name: "Tostado de miga", price: 8000 },
      { name: "Medialunas", price: null },
      { name: "Picada", price: null },
      { name: "Pebete J y Q, tostado", price: null },
    ],
  },
  {
    id: "cafeteria",
    title: "Cafetería",
    items: [
      { name: "Café chico", price: 3000 },
      { name: "Café en jarrito", price: 3500 },
      { name: "Café en jarrito, con crema", price: null },
      { name: "Café doble", price: 4000 },
      { name: "Café con leche", price: 4000 },
      { name: "Capuchino", price: null },
      { name: "Submarino", price: null },
      { name: "Licuado", price: 5000 },
      { name: "Licuado con leche", price: 5000 },
      {
        name: "Té",
        description: "Clásico, rosa mosqueta y manzanilla, menta peperina, frutas tropicales",
        price: 3000,
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas sin alcohol",
    items: [
      {
        name: "Gaseosas y jugos",
        description: "Línea Coca-Cola, H2Oh! sin gas, naranja, pomelo, manzana, limonada",
        price: 3500,
      },
      { name: "Exprimido", price: null },
      { name: "Agua sin gas", price: 3500 },
      { name: "Agua con gas", price: 3500 },
      { name: "Gatorade", price: 4000 },
      { name: "Speed", price: 3500 },
    ],
  },
  {
    id: "cervezas",
    title: "Cervezas",
    items: [
      { name: "Quilmes clásica, litro", price: 7000 },
      { name: "Quilmes stout, litro", price: 8000 },
      { name: "Quilmes, 500cc", description: "Clásica o IPA", price: 5000 },
      { name: "Brahma, litro", price: 8000 },
      { name: "Brahma, 500cc", price: 5000 },
      { name: "Andes rubia, litro", price: 8000 },
      { name: "Andes variedad, litro", description: "IPA, roja o negra", price: 9000 },
      { name: "Andes, 500cc", price: 5000 },
      { name: "Stella Artois, litro", price: 11000 },
      { name: "Stella Artois, 500cc", price: 6000 },
      { name: "Stella Artois sin alcohol", price: 5000 },
    ],
  },
  {
    id: "vinos",
    title: "Vinos",
    items: [
      { name: "Santa Julia, malbec", price: 10000 },
      { name: "Santa Julia, chenin", price: 16000 },
      { name: "Novecento, malbec", price: 9000 },
      { name: "Novecento raíces, white blend", price: 8500 },
      { name: "Benjamín, malbec", price: 12000 },
      { name: "Trumpeter, malbec", price: 18000 },
      { name: "Alambrado, malbec", price: 15000 },
    ],
  },
  {
    id: "champagne",
    title: "Champagne y sidras",
    items: [
      { name: "Sidra 1930, 750cc", description: "Demi sec, rosé o pera", price: 10000 },
      { name: "Capriccio Fiore", description: "Dulce", price: 16000 },
      { name: "Federico de Alvear", price: 14000 },
    ],
  },
  {
    id: "empanadas",
    title: "Empanadas",
    items: [
      { name: "Empanada de carne", price: 2000 },
      { name: "Empanada de jamón y queso", price: 2000 },
    ],
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    items: [
      { name: "Mixta", price: 5000 },
      { name: "Lechuga y tomate", price: 5000 },
      { name: "Zanahoria y huevo", price: 5000 },
    ],
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    note: "Con fritas",
    items: [
      { name: "Sola", price: 12000 },
      { name: "Jamón y queso", price: 14000 },
      { name: "Queso y cebolla caramelizada", price: 14000 },
      { name: "Jamón, queso y huevo", price: 14500 },
      { name: "Jamón, queso, lechuga y tomate", price: 14500 },
      {
        name: "Completa",
        description: "Jamón, queso, lechuga, tomate y huevo a la plancha",
        price: 15000,
      },
      {
        name: "Super completa",
        description:
          "Jamón, queso, lechuga, tomate, cebolla caramelizada, morrón y huevo a la plancha",
        price: 16000,
      },
      {
        name: "Francesa",
        description: "Roquefort, tybo, cebolla caramelizada y huevo a la plancha",
        price: 16000,
      },
      {
        name: "XXL",
        description:
          "Doble medallón de carne, jamón, queso, cebolla caramelizada, morrón, lechuga, tomate y huevo a la plancha",
        price: 20000,
      },
      {
        name: "Burger combo",
        description: "Jamón, queso, fritas y bebida sin alcohol 500cc",
        price: 16000,
      },
    ],
  },
  {
    id: "pizzas-grandes",
    title: "Pizzas grandes",
    items: [
      { name: "Muzzarella", price: 15000 },
      { name: "Cebolla", price: 16000 },
      { name: "Jamón", price: 17000 },
      { name: "Jamón y morrón", price: 18000 },
      { name: "Jamón y tomate", price: 17500 },
      { name: "Jamón, tomate y ajo", price: 18000 },
      { name: "Jamón y papas fritas", price: 20000 },
      { name: "Jamón, papas fritas y 4 huevos", price: 22000 },
      { name: "Jamón y 4 huevos", description: "Tipo pollet", price: 19000 },
      { name: "Jamón, morrón y huevo", price: 20000 },
      { name: "Cebolla y roquefort", price: 20000 },
      { name: "Roquefort", price: 19500 },
      { name: "Cantimpalo y huevo", price: 20000 },
      { name: "Cantimpalo", price: 19000 },
      { name: "Cebolla y anchoas", price: 21000 },
      { name: "Anchoas", price: 20000 },
      {
        name: "Media y media",
        description: "Mitad jamón y morrón, mitad jamón y tomate",
        price: 18000,
      },
    ],
  },
  {
    id: "pizzas-chicas",
    title: "Pizzas chicas",
    items: [
      { name: "Muzzarella", price: 9000 },
      { name: "Cebolla", price: 9500 },
      { name: "Jamón", price: 10000 },
      { name: "Jamón y morrón", price: 11000 },
      { name: "Jamón y tomate", price: 11000 },
      { name: "Jamón, tomate y ajo", price: 11000 },
      { name: "Jamón y huevos", description: "Tipo pollet", price: 11000 },
      { name: "Jamón, morrón y huevo", price: 12000 },
      { name: "Cebolla y roquefort", price: 12000 },
      { name: "Roquefort", price: 11500 },
      { name: "Cantimpalo y huevo", price: 13000 },
      { name: "Cantimpalo", price: 11000 },
      { name: "Cebolla y anchoas", price: 13000 },
      { name: "Anchoas", price: 12000 },
    ],
  },
  {
    id: "milanesas",
    title: "Milanesas",
    note: "En sándwich o al plato, con guarnición de fritas o ensalada de 2 ingredientes",
    items: [
      { name: "Sola", price: 14500 },
      { name: "Con jamón y queso", price: 15500 },
      { name: "Con jamón, queso, lechuga y tomate", price: 16000 },
      { name: "Con jamón, queso y huevo a la plancha", price: 16000 },
      {
        name: "Con jamón, queso, lechuga, tomate y huevo a la plancha",
        price: 17000,
      },
      {
        name: "Con jamón, queso, lechuga, tomate, morrón, cebolla y huevo a la plancha",
        price: 18000,
      },
      { name: "Con 2 huevos a la plancha", price: 16000 },
      { name: "Napolitana", price: 17500 },
      { name: "Napolitana con 2 huevos a la plancha", price: 19000 },
    ],
  },
  {
    id: "papas",
    title: "Papas fritas",
    items: [
      { name: "Papas fritas", description: "Para compartir", price: 7000 },
      { name: "Con 2 huevos a la plancha", price: 8000 },
      { name: "Dip de verdeo", description: "Para acompañar cualquier plato", price: 1000 },
      { name: "Dip de chédar", description: "Ideal con papas o hamburguesa", price: 1000 },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    items: [
      { name: "Don Pedro", price: 8000 },
      { name: "Bombón escocés", price: 3500 },
      { name: "Cassata", price: 3000 },
      { name: "Bombón suizo", price: null },
      {
        name: "Cyrano bombón patagónico",
        description:
          "Helado de frutos del bosque con corazón de frutos rojos, bañado en chocolate, crema y cereza",
        price: 6500,
      },
      {
        name: "Cyrano bombón italiano",
        description:
          "Helado de vainilla con corazón de nutella y avellanas, bañado en chocolate y decorado con chocolate blanco",
        price: 6500,
      },
    ],
  },
  {
    id: "tragos",
    title: "Tragos",
    items: [
      { name: "Fernet Branca con Coca", price: 7000 },
      { name: "Gancia", price: 7000 },
      {
        name: "Cinzano",
        description: "Vermouth y soda, o vermouth y pomelo",
        price: 7000,
      },
      { name: "Campari", price: 7000 },
      { name: "Medio y medio", description: "J&B o Red Label", price: 5000 },
      { name: "Gin tonic Gordon's", price: 7000 },
      { name: "Gin tonic Aconcagua", price: 8000 },
      { name: "Gin Bombay", price: 9000 },
      { name: "Gin Merle", description: "I'm Pink o I'm Orange", price: 7000 },
      { name: "Whisky Blenders", price: 6000 },
      { name: "Whisky JB", price: 8000 },
      { name: "Whisky Jameson", price: 9000 },
      { name: "Whisky Johnnie Walker, Red Label", price: 9000 },
      { name: "Whisky Johnnie Walker, Black Label", price: 12000 },
      { name: "Whiscola", price: 7000 },
      { name: "Whisky con Speed", price: 8000 },
      { name: "Cuba libre", price: 7000 },
      { name: "Baileys", price: 9000 },
      { name: "Baileys con helado", description: "Crema americana y chocolate líquido", price: 10000 },
      { name: "Smirnoff con Speed", price: 9000 },
      { name: "Smirnoff con naranja", price: 7000 },
      { name: "Gin Gordon's con Speed", price: 9000 },
      { name: "Ron Havana con Speed", price: 10000 },
      { name: "Daiquiri", description: "Frutilla, banana o tropical", price: 9000 },
      { name: "Don Pedro", price: 9000 },
    ],
  },
];
