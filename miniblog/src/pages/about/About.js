//CSS
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='div-about'>
            <h2>Sobre o Mini <span className='special-word'>Blog</span></h2>
            <p>Este mini blog foi desenvolvido com React no frontend e firebase no backend</p>
            <p>Este mini blog te permite<Link className='special-link' to="/register">criar um cadastro</Link> e ter a sua própria página onde você podera criar 
            e compartilhar post sobre suas experiências de vida, seus pensamentos, seus hobbies e tudo mais pelo que você se interessar! Faça o seu 
            <Link className='special-link' to="/login">login</Link>  e comece 
            já a aproveitar e compartilhar os seus interesses por ai!</p>

            <Link className='special-link' to='/'>Página inicial</Link>
        </div>
    )
}
export default About; 