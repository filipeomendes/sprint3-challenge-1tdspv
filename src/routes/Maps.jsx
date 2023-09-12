import { Link } from "react-router-dom";
import mapa from '../assets/mapa.svg'

export default function Maps() {
    document.title = "Maps";
    return (
      <main className="main-mapa">
        <div className="img-mapa">
          <img src={mapa} alt="imagem ilustrativa mapa" />
            <div className="botao">
              <Link to="/maps/solicitacao">
                <button type="submit">Seguinte</button>
              </Link>
            </div>
        </div>
      </main>
    )
  }