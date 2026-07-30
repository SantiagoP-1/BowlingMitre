import type { Metadata } from "next";
import { Poppins, Manrope, JetBrains_Mono, Yellowtail } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const title = "Bowling Mitre — Bowling, pool y gastronomía en Quilmes";
const description =
  "Bowling, pool, metegol y gastronomía en un solo lugar. Reservá tu pista o consultá por cumpleaños y eventos directamente por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  themeColor: "#1B212C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${manrope.variable} ${jetbrainsMono.variable} ${yellowtail.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
