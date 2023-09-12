import statusFoto from '../assets/status-foto.svg'

export default function Status() {
    document.title = "Status";
    return (
      <main>
        <div className="titulo">
            <h1>Status</h1>
        </div>
        <div className="status-foto">
          <img src={statusFoto} alt="ilustração do status da solicitação de guincho (guincho a caminho)" />
        </div>
      </main>
    )
  }