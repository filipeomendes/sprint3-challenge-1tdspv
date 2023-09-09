import { Link } from "react-router-dom"
import logotipo1 from '../assets/logotipo1.svg'

export default function Cabecalho(){
    return(
        <header>
            <div className="Logo porto">
                <img src={logotipo1} alt="Logotipo Porto Seguro-SOS" />
            </div>
            <div className="Menu">
                <nav>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/maps">Solicitação</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </nav>
            </div>
        </header>
    )
}