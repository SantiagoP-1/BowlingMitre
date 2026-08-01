import { Header } from "@/components/layout/Header";
import { CategoryNav } from "@/components/layout/CategoryNav";
import { Carta } from "@/components/sections/Carta";
import { Horarios } from "@/components/sections/Horarios";
import { Eventos } from "@/components/sections/Eventos";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <CategoryNav />
      <main>
        <Carta />
        <Horarios />
        <Eventos />
      </main>
      <Footer />
    </>
  );
}
