import logoFacebook from '../assets/facebook.png'
import logoGithub from '../assets/github.png'
import logoInstagram from '../assets/instagram.png'

export default function Rodape(){

    return(
        <footer>
            <section className="conteudo-rodape">
                <div className="redes-sociais-logos">
                    <nav className="redes-sociais-nav">
                        <a href="https://github.com/filipeomendes/sprint3-challenge-1tdspv" target='blank'><img src={logoGithub} alt="Logo preto do Github" /></a>
                        <a href="https://www.instagram.com/complex.wrld/" target='blank'><img src={logoInstagram} alt="Logo preto do Instagram" /></a>
                        <a href="https://www.facebook.com" target='blank'> <img src={logoFacebook} alt="Logo preto do Facebook" /></a>
                    </nav>
                </div>
                <div className='copyright'>
                    <p className='texto-footer'>Todos os direitos reservados ©2023 - Complex</p>
                </div>
            </section>
        </footer>
    )
}