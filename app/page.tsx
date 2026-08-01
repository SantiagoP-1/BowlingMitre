import { Header } from "@/components/layout/Header";
import { CategoryNav } from "@/components/layout/CategoryNav";
import { Carta } from "@/components/sections/Carta";
import { Horarios } from "@/components/sections/Horarios";
import { Eventos } from "@/components/sections/Eventos";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-brand-red focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-cream"
      >
        Saltar al contenido
      </a>
      <Header />
      <CategoryNav />
      <main id="main-content">
        <Carta />
        <Horarios />
        <Eventos />
      </main>
      <Footer />
    </>
  );
}
