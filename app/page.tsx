import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { Hero } from "@/components/sections/Hero";
import { Experiencia } from "@/components/sections/Experiencia";
import { Cumpleanos } from "@/components/sections/Cumpleanos";
import { Carta } from "@/components/sections/Carta";
import { Ubicacion } from "@/components/sections/Ubicacion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiencia />
        <Cumpleanos />
        <Carta />
        <Ubicacion />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
