import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Metodologias } from "../pages/Metodologias";
import { Programa } from "../pages/Programa";
import { Contacto } from "../pages/Contacto";
import { Inicio } from "../pages/Inicio";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink to='/inicio'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/metodologias'>Metodologias</NavLink>
                </li>
                <li>
                    <NavLink to='/programa'>Programa</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'>Contacto</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="inicio" element={<Inicio />} />
                <Route path="metodologias" element={<Metodologias />} />
                <Route path="programa" element={<Programa />} />
                <Route path="contacto" element={<Contacto />} />
            </Routes>
        </BrowserRouter>
    )
}
