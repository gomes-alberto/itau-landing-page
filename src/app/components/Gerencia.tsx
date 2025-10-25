import Image from "next/image"
import gerenciaImage from "@/../public/phone.png"

export default function Gerencia() {
    return (
        <section className="bg-gray-50">
            
            <div className="max-w-5xl m-auto px-4 py-10 flex items-center justify-between gap-6">
                <div>
                    <Image src={gerenciaImage} alt="gerncia" className="w-3xl" />
                </div>

                {/* Dizees da gerencia */}
                <div className="space-y-8 text-right">
                    <h3 className="text-amber-600">Serviços Emcontrados</h3>
                    <h2 className="text-gray-900 text-4xl font-bold">Gerencie suas finanças <br /> sem sair de casa.</h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. laborum dolor, sapiente sunt, iusto accusantium consequatur. 
                    </p>

                    <div className="text-lg font-semibold space-y-4">

                        <div className="inline-flex items-center justify-center gap-2 pb-6 border-b-1 border-gray-200">
                            <div className="bg-amber-600 w-3 h-3 border border-amber-600 rounded-2xl"></div>
                            <h4>Acompanha a sua conta, Lorem ipsum dolor sit amet</h4>
                        </div>

                        <div className="inline-flex items-center justify-center gap-2 pb-6 border-b-1 border-gray-200">
                            <div className="bg-amber-600 w-3 h-3 border border-amber-600 rounded-2xl"></div>
                            <h4>Seviços com Competência lorem ipsum dolor sit amet ipsum</h4>
                        </div>

                        <div className="inline-flex items-center justify-center gap-2 pb-6 border-b-1 border-gray-200">
                            <div className="bg-amber-600 w-3 h-3 border border-amber-600 rounded-2xl"></div>
                            <h4>Acompanhamento de qualidade da conta, Lorem sit</h4>
                        </div>

                        <div className="inline-flex items-center justify-center gap-2 pb-6 border-b-1 border-gray-200">
                            <div className="bg-amber-600 w-3 h-3 border border-amber-600 rounded-2xl"></div>
                            <h4>Serviço personalizado a sua conta, Lorem ipsum dolor amet</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
          
        </section>
    )
}