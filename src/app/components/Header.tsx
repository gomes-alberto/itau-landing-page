export default function Header() {
    return (
        <header className="bg-amber-600 fixed w-full">
            
            <div className="max-w-5xl m-auto p-4 flex items-center justify-between">
                {/* Logo */}
                <div className="bg-blue-600 p-2 rounded">
                    <a href="#" className="font-medium text-white">itaú</a>
                </div>

                {/* menu de navegação */}
                <nav className="hidden md:block">
                    <ul className="flex items-center justify-center gap-4 cursor-pointer text-white">
                        <li><a href="#" title="para voce" className="hover:text-gray-700 transition duraction-500 ease-in-out">Para você</a></li>
                        <li><a href="#" title="para empresa" className="hover:text-gray-700 transition duraction-500 ease-in-out">Para empresa</a></li>
                        <li><a href="#" title="servicos" className="hover:text-gray-700 transition duraction-500 ease-in-out">Serviços</a></li>
                        <li><a href="#" title="ajuda" className="hover:text-gray-700 transition duraction-500 ease-in-out">Ajuda</a></li>
                    </ul>
                </nav>

                {/* input da pesquisa */}
                <div>
                    <input title="pesquisa" type="search" placeholder="Pesquisar..." 
                    className="
                    px-2
                    py-0
                    border
                    border-amber-500
                    rounded
                    text-white

                    focus:outline-none
                    focus:border-gray-50

                    transition
                    duraction-400
                    ease-in-out

                    hidden
                    md:block
                    "/>
                </div>

                {/* Botão de acessar conta */}
                <div>
                    <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-blue-700">Acessar conta</button>
                </div>
            </div>
            
        </header>
    )
}