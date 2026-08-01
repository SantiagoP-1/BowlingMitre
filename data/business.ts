export type DayHours = {
  day: string;
  hours: string;
  closed?: boolean;
};

export const business = {
  name: "Bowling Mitre",
  shortName: "Bowling Mitre",
  tagline: "Bowling, pool y pizzería en Balcarce",
  description:
    "4 canchas de bowling, 7 mesas de pool, metegol y tejo. Pizzas, hamburguesas, cervezas y tragos para pasarla bien con amigos.",
  address: "González Cháves 315, Balcarce",
  mapsUrl:
    "https://www.google.com/maps/place/Pizzer%C3%ADa+Bowling+%2F+pool+mitre/@-37.8422926,-58.2498599,17z",
  whatsapp: {
    display: "+54 2262 46-7395",
    href: "https://wa.me/542262467395",
  },
  instagram: {
    display: "@bowlingmitre",
    href: "https://www.instagram.com/bowlingmitre",
  },
  facebook: {
    display: "Facebook",
    href: "https://www.facebook.com/gimnasia.bowling",
  },
  hours: [
    { day: "Lunes", hours: "19:00 – 02:00" },
    { day: "Martes", hours: "Cerrado", closed: true },
    { day: "Miércoles", hours: "19:00 – 01:30" },
    { day: "Jueves", hours: "19:00 – 02:00" },
    { day: "Viernes", hours: "19:00 – 03:00" },
    { day: "Sábado", hours: "19:00 – 03:30" },
    { day: "Domingo", hours: "19:00 – 02:30" },
  ] satisfies DayHours[],
};
