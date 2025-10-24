import Image from "next/image"
import gerenciaImage from "@/../public/phone.png"

export default function Gerencia() {
    return (
        <section className="bg-gray-50 max-w-5xl m-auto px-4 py-10 flex items-center justify-between gap-6">
            <div>
                <Image src={gerenciaImage} alt="gerncia" className="w-full" />
            </div>

            {/* Dizees da gerencia */}
            <div className="space-y-6 text-right">
                <h3 className="text-amber-600">Serviços Emcontrados</h3>
                <h2 className="text-gray-900 text-4xl font-bold">Gerencie suas finanças <br /> sem sair de casa </h2>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum dolor, sapiente sunt, iusto accusantium consequatur. 
                </p>

                <div className="text-lg font-semibold">
                    <div className="bg-gray-100 p-4 w-full"> 
                        <h4 className=""># Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                    </div>
                    <h4 className=""># Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                    <h4 className=""># Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                    <h4 className=""># Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                </div>
            </div>
        </section>
    )
}