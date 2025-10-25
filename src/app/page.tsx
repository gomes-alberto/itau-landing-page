import Image from "next/image";

// Importando os Componentes
import Hero from "./components/Hero";
import Gerencia from "./components/Gerencia";
// import Responsividade from "./components/Responsividade";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Gerencia></Gerencia>
      {/* <Responsividade></Responsividade> */}
    </div>
  );
}
