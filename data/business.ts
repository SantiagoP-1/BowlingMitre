/**
 * Datos comerciales de Bowling Mitre.
 *
 * IMPORTANTE — corrección: la Fase 1 había tomado por error la dirección
 * de otro negocio con nombre parecido ("Av. Mitre 426, Quilmes"), hallado
 * en un directorio externo. El cliente compartió el pin real de Google
 * Maps de su local ("Pizzería Bowling / pool mitre"), que ubica el
 * negocio en Balcarce, no en Quilmes. La dirección de abajo sale de
 * geocodificar ese pin — confirmar el número de puerta exacto.
 *
 * `confirmed: false` = todavía no lo tipeó el cliente textualmente,
 * aunque la fuente (su propio pin de Maps / su propio Instagram) es
 * confiable.
 */

export const business = {
  name: "Bowling Mitre",
  shortName: "Bowling Mitre",

  address: {
    value: "Av. Gonzáles Cháves 315, Balcarce, Buenos Aires (B7620)",
    confirmed: false,
  },

  phone: {
    value: "+54 2262 46-7395",
    // Tomado directo de la bio de Instagram (@bowlingmitre).
    whatsapp: "542262467395",
    confirmed: true,
  },

  hours: {
    // Pendiente: no figura en Instagram ni en el sitio actual.
    value: null as string | null,
    confirmed: false,
  },

  social: {
    instagram: "https://www.instagram.com/bowlingmitre/",
    facebook: null as string | null,
  },

  /** Link para "Cómo llegar" — comparte el pin exacto del negocio. */
  mapsUrl: "https://maps.app.goo.gl/xhCPUtZ1qQn8R1Va6",

  /** Embed provisto por el cliente, ya apuntando al pin real del local. */
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331.1836261595492!2d-58.249937521402295!3d-37.842330935634976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959aaf8e5764b88b%3A0x539a0f31bc795f4!2sPizzer%C3%ADa%20Bowling%20%2F%20pool%20mitre!5e0!3m2!1ses-419!2sar!4v1785424102206!5m2!1ses-419!2sar",
} as const;
