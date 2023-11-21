//CSS
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useAuthenticator } from '../../hooks/useAuthenticator';
import { useAuthValue } from '../context/AuthContext';

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthenticator();

    return (
        <nav className="navbar">
            <NavLink to="/">
                <h1 className='title'>Mini <span className='special-word'>Blog</span></h1>
            </NavLink>
            <ul className='nav-links'>
                <li><NavLink className="nav-btn" to="/">Home</NavLink></li>
                <li><NavLink className="nav-btn" to="/about">Sobre</NavLink></li>
                {!user && 
                <>
                    <li><NavLink className="nav-btn" to="/login">Entrar</NavLink></li>
                    <li><NavLink className="nav-btn" to="/register">Cadastar</NavLink></li>
                </>}
                {user && <>
                    <li>
                        <NavLink className="nav-btn" to="/createpost">Novo Post</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-btn" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={logout}>Sair</button>
                    </li>
                </>}
            </ul>
        </nav>
    )
};
export default Navbar;