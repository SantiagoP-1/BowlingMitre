# Bowling Mitre — Carta digital

Carta digital de **Bowling Mitre** (Balcarce): bowling, pool, pizzería y bar, en un sitio de una sola página pensado para consultarse rápido desde el celular en el momento de pedir.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) (`eslint-config-next`)

Sin base de datos ni backend: todo el contenido (carta, horarios, datos del negocio) vive en archivos TypeScript dentro de `data/`.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # levantar el build de producción
npm run lint    # chequear el código con ESLint
```

## Editar el contenido

Todo el texto del sitio sale de `data/`, no hace falta tocar componentes para actualizar precios o información.

| Archivo | Qué contiene |
| --- | --- |
| `data/menu.ts` | La carta: categorías e ítems (nombre, descripción opcional, precio). Un precio `null` se muestra como "Consultar". |
| `data/events.ts` | Los paquetes de cumpleaños y eventos que se muestran en la sección "Eventos". |
| `data/business.ts` | Nombre, dirección, horarios, WhatsApp, Instagram, Facebook y el link de Google Maps. |

Para agregar o sacar una categoría de la carta, se edita el array `menu` en `data/menu.ts` — la numeración y la navegación superior se actualizan solas.

## Imágenes

Van en `public/images/`:

| Archivo | Uso |
| --- | --- |
| `logo1.png` | Logo completo (isotipo + nombre), usado en el header. |
| `logo-icon.png` | Recorte del isotipo solo, usado en el footer. |
| `banner.png` | Foto de fondo del header. |

## Estructura

```
app/                   Layout, página principal y estilos globales
components/
  layout/               Header, navegación de categorías, footer
  sections/             Carta, Horarios, Eventos
  ui/                   Botón, íconos
data/                   Contenido del sitio (carta, eventos, datos del negocio)
lib/                    Helpers (formato de precios, día actual, scroll-spy)
public/images/          Logo y fotos
```

## Diseño

Tipografía Fraunces (títulos) + Inter (texto). Paleta cálida basada en el rojo y naranja del logo sobre fondos crema — sin gradientes, sombras ni efectos que no aporten a leer la carta rápido.
