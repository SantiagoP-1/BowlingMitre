import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { business } from "@/data/business";
import { buildLocalBusinessJsonLd } from "@/lib/structuredData";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const title = `${business.name} — Carta`;

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title,
  description: business.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description: business.description,
    url: "/",
    siteName: business.name,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1774,
        height: 887,
        alt: business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: business.description,
    images: ["/images/banner.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1714",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
