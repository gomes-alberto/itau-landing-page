import Image from "next/image";

// Importando os Componentes
import Hero from "./components/Hero";
import Servico from "./components/Servico";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Servico></Servico>
    </div>
  );
}
