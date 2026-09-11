import { Link } from 'react-router-dom'
import { Home, Info, Mail, Handshake } from 'lucide-react'

const NavBar = () => {
    return (
        <nav className="bg-rose-300 shadow-md">
            <div className="max-w-4xl max-auto px-4">
                <span className="text-2xl text-white font-bold">Projeto</span>
            </div>
            <div className="flex space-x-4 items-center">
                <Link to="/" className="flex items-center px-3 py-3 font-medium text-amber-100 hover:text-rose-500"> <Home /> Home</Link>
                <Link to="/sobre" className="flex items-center px-3 py-3 font-medium text-amber-100 hover:text-rose-500"> <Info />Sobre</Link>
                <Link to="/produtos" className="flex items-center px-3 py-3 font-medium text-amber-100 hover:text-rose-500"><Handshake />Produtos</Link>
                <Link to="/contato" className="flex items-center px-3 py-3 font-medium text-amber-100 hover:text-rose-500"><Mail />Contato</Link>
            </div>

        </nav>
    )
}



export default NavBar
