import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basic from './Basic';
import Residencial from './pages/Residencial';
import Comercial from './pages/Comercial';
import Oficina from './pages/Oficina';
import Restauracion from './pages/Restauracion';
import NotFound from './pages/NotFound'; // Una página para rutas no encontradas

const Rout = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Basic />}>
                    <Route index element={<Home />} />
                    <Route path="residencial" element={<Residencial />} />
                    <Route path="comercial" element={<Comercial />} />
                    <Route path="oficina" element={<Oficina />} />
                    <Route path="restauracion" element={<Restauracion />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Rout;
