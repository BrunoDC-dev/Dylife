import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Contacto, Inicio, Metodologias, Programa } from "../pages";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="inicio" element={<Inicio />} />
                <Route path="metodologias" element={<Metodologias />} />
                <Route path="programa" element={<Programa />} />
                <Route path="contacto" element={<Contacto />} />

                <Route path="/*" element={<Navigate to='inicio' replace />} />
            </Routes>
        </BrowserRouter>
    )
}
