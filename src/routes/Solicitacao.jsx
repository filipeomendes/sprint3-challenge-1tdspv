import { Link } from "react-router-dom";

export default function Solicitacao() {
    document.title = "Solicitacao";
    return (
      <main>
        <section className="titulo">
            <h1>Solicitar Resgate do Veículo</h1>
        </section>
        <section className="teste-form">
          <form action="" id="form-solicitacao" className="formulario-solicitao">
            <div>
              <label htmlFor="modelo"></label>
              <input type="text" id="modelo" placeholder="*Modelo do veículo"/>
            </div>
            <div>
              <label htmlFor="carga"></label>
              <input type="text" id="carga" placeholder="*Peso da carga"/>
            </div>
            <div>
              <label htmlFor="situacao"></label>
              <input type="text" id="situacao" placeholder="*Situação do resgate"/>
            </div>
            <div>
              <label htmlFor="apolice"></label>
              <input type="text" id="apolice" placeholder="*Número da apolice"/>
            </div>
            <div>
              <label htmlFor="cep"></label>
              <input type="text" id="cep" placeholder="*CEP"/>
            </div>
            <div>
              <label htmlFor="comprimento"></label>
              <input type="text" id="comprimento" placeholder="*Comprimento do veículo"/>
            </div>
            <div>
              <label htmlFor="altura"></label>
              <input type="text" id="altura" placeholder="*Altura do veículo"/>
            </div>
            <div>
              <label htmlFor="peso"></label>
              <input type="text" id="peso" placeholder="*Peso do veículo"/>
            </div>
            <div>
              <label htmlFor="obs"></label>
              <input type="text" id="obs" placeholder="*Observações"/>
            </div>
            <div>
              <Link to="/maps">
                <button type="submite" className="botao-voltar">Voltar</button>
              </Link>
            </div>
            <div>
              <Link to="/status">
                <button type="submite" className="botao-seguinte">Solicitar</button>
              </Link>
            </div>
          </form>
        </section>
      </main>
    )
  }