import { Link } from "react-router-dom";

export default function Maps() {
    document.title = "Maps";
    return (
      <main>
        <div className="titulo">
            <h1>Maps</h1>
        </div>
        <div>
          <Link to="/maps/solicitacao">
            <button type="submit">Seguinte</button>
          </Link>
        </div>
      </main>
    )
  }