import { Link } from "react-router-dom"
import logotipo1 from '../assets/logotipo1.svg'
import './Cabecalho.css'

export default function Cabecalho(){
    return(
        <header>
            <div className="Logo porto">
                <Link to='/home'><img src={logotipo1} alt="Logotipo Porto Seguro-SOS" /></Link>
            </div>
            <div className="menu">
                <nav>
                    <Link to="/home">Home</Link>
                    <span> | </span>
                    <Link to="/maps">Solicitação</Link>
                    <span> | </span>
                    <Link to="/contato">Contato</Link>
                </nav>
            </div>
        </header>
    )
}