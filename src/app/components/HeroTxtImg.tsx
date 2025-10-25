import Image from "next/image"
import heroImage from "@/../public/woman.png"

export default function HeroTxtImg() {
    return (
        <section className="max-w-5xl m-auto block space-y-reverse items-center h-full px-4 pt-20
        md:flex md:gap-6 md:justify-between">
            {/* Dizeres */}
            <div className="space-y-4 md:space-y-8 space-y-reverse ">
                <h1 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl">
                    Tenha seu <br /> banco na palma <br /> da mão.
                </h1>

                <p className="font-normal text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Abvident fugit, tempore enim delectus!
                </p>

                {/* Botão de acessar conta */}
                <div>
                    <button className="mt-6 mb-3 bg-blue-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-blue-700">Mais informações</button>
                </div>
            </div>

            {/* Imagem */}
            <div className="flex items-center justify-center">
                <Image src={heroImage} alt="Imagem" className="w-92 md:w-3xl lg:w-4xl" />
            </div>
        </section>
    )
}