import { Link } from "react-router-dom"
import logotipo1 from '../assets/logotipo1.svg'
import user from '../assets/usuario.svg'
import './Cabecalho.css'

export default function Cabecalho(){
    return(
        <header>
            <div className="Logo porto">
                <Link to='/maps'><img src={logotipo1} alt="Logotipo Porto Seguro-SOS" /></Link>
            </div>
            <div className="menu">
                <nav>
                    <Link to="/maps">Solicitação</Link>
                    <span> | </span>
                    <Link to="/sobre">Sobre</Link>
                    <span> | </span>
                    <Link to="/contato">Contato</Link>
                </nav>
                <img src={user} alt="" />
            </div>
        </header>
    )
}