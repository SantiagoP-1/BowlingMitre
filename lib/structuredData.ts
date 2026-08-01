import { business } from "@/data/business";

const DAY_URL: Record<string, string> = {
  lunes: "https://schema.org/Monday",
  martes: "https://schema.org/Tuesday",
  miércoles: "https://schema.org/Wednesday",
  jueves: "https://schema.org/Thursday",
  viernes: "https://schema.org/Friday",
  sábado: "https://schema.org/Saturday",
  domingo: "https://schema.org/Sunday",
};

function toOpeningHoursSpecification() {
  return business.hours
    .filter((h) => !h.closed)
    .map((h) => {
      const [opens, closes] = h.hours.split(/\s*[–-]\s*/);
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_URL[h.day.toLowerCase()],
        opens,
        closes,
      };
    });
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["BowlingAlley", "Restaurant", "BarOrPub"],
    name: business.name,
    description: business.description,
    url: business.siteUrl,
    telephone: business.whatsapp.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: "Balcarce",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.mapsUrl,
    openingHoursSpecification: toOpeningHoursSpecification(),
    sameAs: [business.instagram.href, business.facebook.href],
  };
}
