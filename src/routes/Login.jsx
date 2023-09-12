import fotoGuincho from '../assets/guincho.svg'
import { Link } from 'react-router-dom';

export default function Login() {
    document.title = "Login";
    return (
      <main className='login'>
        <section className="texto-login">
          <div className="subtitulo-login">
            <h2>Solicite o resgate do seu veículo</h2>
          </div>
          <form action="" id="form-login" className="form">
            <div className="form-control">
              <label htmlFor="login">Login</label>
              <input type="text" id="login" placeholder="sprint3@challenge.com"/>
              <span id="login-error"> </span>
            </div>
            <div className="form-control">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="sprint3"/>
              <span id="login-error"> </span>
            </div>
            <div className='botao'>
                <Link to='/maps'><button type='submit'>Entrar</button></Link>
            </div>
            <div className='paragrafo-login'>
              <p>Esqueceu a senha?</p>
            </div>
          </form>
        </section>
        <section className='foto-guincho'>
          <div className='div-foto-guincho'>
            <img src={fotoGuincho} alt="Imagem ilustrando um guincho da porto seguro saindo da tela de um celular" />
          </div>
        </section>
      </main>
    )
  }