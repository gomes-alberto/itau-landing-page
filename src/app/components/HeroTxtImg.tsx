import Image from "next/image"
import heroImage from "@/../public/woman.png"

export default function HeroTxtImg() {
    return (
        <section className="max-w-5xl m-auto flex items-center justify-between h-full px-4 pt-20 gap-6">
            {/* Dizeres */}
            <div className="space-y-8">
                <h1 className="text-white text-5xl font-bold">
                    Tenha seu <br /> banco na palma <br /> da mão.
                </h1>

                <p className="font-normal text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Abvident fugit, tempore enim delectus!
                </p>

                {/* Botão de acessar conta */}
                <div>
                    <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-blue-700">Mais informações</button>
                </div>

                {/* Secção para ver mais informações */}
                {/* <div className="text-white text-sm font-bold mt-8">
                    Ver mais informações ¬
                </div> */}
            </div>

            {/* Imagem */}
            <div>
                <Image src={heroImage} alt="Imagem" className="w-4xl" />
            </div>
        </section>
    )
}