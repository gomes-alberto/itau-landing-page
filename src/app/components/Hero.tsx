// Importando Imagens
import Image from "next/image"

// Importando Componentes
import Header from "./Header"
import HeroTxtImg from "./HeroTxtImg"

export default function Hero() {
    return (
        <main>
            <section className="heroSection">
                {/* Chamando o Componente */}
                <Header></Header>
                <HeroTxtImg></HeroTxtImg>
            </section>
        </main>
    )
}