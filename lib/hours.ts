import type { DayHours } from "@/data/business";

const TIME_ZONE = "America/Argentina/Buenos_Aires";

function getBuenosAiresNow() {
  const parts = new Intl.DateTimeFormat("es-AR", {
    timeZone: TIME_ZONE,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  // hour can come through as "24" at midnight depending on the runtime, normalize to 0.
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0") % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");

  return { weekday, minutesOfDay: hour * 60 + minute };
}

function parseMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

/** Parses "19:00 – 03:00" into minutes-of-day, or null if unparseable/closed. */
function parseRange(hours: DayHours) {
  if (hours.closed) return null;
  const [openStr, closeStr] = hours.hours.split(/\s*[–-]\s*/);
  if (!openStr || !closeStr) return null;
  return { open: parseMinutes(openStr), close: parseMinutes(closeStr) };
}

/**
 * Which day's card should read as "today". A night that runs past midnight
 * (e.g. Viernes 19:00–03:00) still belongs to Viernes until it actually
 * closes, even though the calendar has already turned to Sábado.
 */
export function getActiveDay(hours: DayHours[]): string {
  const { weekday, minutesOfDay } = getBuenosAiresNow();
  const todayIndex = hours.findIndex(
    (h) => h.day.toLowerCase() === weekday.toLowerCase()
  );
  if (todayIndex === -1) return weekday;

  const yesterdayIndex = (todayIndex - 1 + hours.length) % hours.length;
  const yesterdayRange = parseRange(hours[yesterdayIndex]);

  if (
    yesterdayRange &&
    yesterdayRange.close < yesterdayRange.open &&
    minutesOfDay < yesterdayRange.close
  ) {
    return hours[yesterdayIndex].day;
  }

  return hours[todayIndex].day;
}
