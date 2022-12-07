import { NavLink } from "react-router-dom"

export const Links = () => {
    return (
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
    )
}