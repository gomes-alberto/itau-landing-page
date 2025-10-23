export default function Header() {
    return (
        <header className="max-w-5xl m-auto p-10 flex items-center justify-between">
            {/* Logo */}
            <div>
                <a href="#" className="font-bold text-2xl text-amber-300">LOGO</a>
            </div>

            {/* menu de navegação */}
            <nav>
                <ul className="flex items-center justify-center gap-4 cursor-pointer">
                    <li><a href="#" title="para voce"></a>Para você</li>
                    <li><a href="#" title="para empresa"></a>Para empresa</li>
                    <li><a href="#" title="servicos"></a>Serviços</li>
                    <li><a href="#" title="ajuda"></a>Ajuda</li>
                </ul>
            </nav>

            {/* input da pesquisa */}
            <div>
                <input title="pesquisa" type="text" placeholder="Buscar..." 
                className="
                text-black

                "/>
            </div>

            {/* Botão de acessar conta */}
            <div>
                <button className="bg-amber-300 px-6 py-2 rounded-lg cursor-pointer text-white font-medium">Acessar conta</button>
            </div>
        </header>
    )
}