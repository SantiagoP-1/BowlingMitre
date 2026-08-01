export function currentDayName() {
  return new Date().toLocaleDateString("es-AR", {
    weekday: "long",
    timeZone: "America/Argentina/Buenos_Aires",
  });
}
