import { NavLink } from 'react-router-dom'

import logo from '../assets/logo-dyylife.png'
import '../styles/nav.css'

export const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <NavLink to='/inicio'>INICIO</NavLink>
                    </li>
                    <li>
                        <NavLink to='/metodologias'>METODOLOGIAS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/programa'>PROGRAMA</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto'>CONTACTO</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}