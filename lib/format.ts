const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export function formatPrice(price: number | null): string {
  if (price === null) return "Consultar";
  return priceFormatter.format(price);
}
