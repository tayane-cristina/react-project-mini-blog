//CSS
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <h1 className='title'>Mini <span className='special-word'>Blog</span></h1>
            </NavLink>
            <ul className='nav-links'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Entrar</NavLink></li>
                <li><NavLink to="/register">Cadastar</NavLink></li>
                <li><NavLink to="/about">Sobre</NavLink></li>
            </ul>
        </nav>
    )

};
export default Navbar;