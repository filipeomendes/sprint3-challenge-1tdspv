import { Link } from "react-router-dom"

export default function Error() {
    document.title = "Error 404";
    return (
      <main>
        <div>
            <h1>ERROR 404 - PÁGINA NÃO EXISTENTE!</h1>
            <h2>Clique <Link to="/">AQUI</Link> para voltar ao início. </h2>
        </div>
      </main>
    )
  }