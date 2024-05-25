import React from 'react';
import { StrictMode } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import '../style.css';

const Basic = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <StrictMode>
            <Header />
            <div className="container">
                <div className="row py-5">
                    <Outlet />
                </div>
            </div>
            <div className="product-categories-section">
                <h3>CATEGORÍAS DE PROYECTOS</h3>
                <div className="categories-grid">
                    <div className="category-item" onClick={() => handleNavigation('/residencial')}>
                        <img src="https://media.admagazine.com/photos/618a80aca8ad6c5249a75e29/master/w_1600%2Cc_limit/42868.jpg" alt="Residencial" />
                        <p>Residencial</p>
                    </div>
                    <div className="category-item" onClick={() => handleNavigation('/comercial')}>
                        <img src="https://cdn-3.expansion.mx/dims4/default/8c05b2f/2147483647/strip/true/crop/659x462+0+0/resize/1200x841!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F78%2F78152e5a8b3f40733d527dbb234debcf%2Fcentro-comercial-san-fernando20150309120635.jpg" alt="Comercial" />
                        <p>Comercial</p>
                    </div>
                    <div className="category-item" onClick={() => handleNavigation('/oficina')}>
                        <img src="https://media.licdn.com/dms/image/C4D1BAQF682l-EO4rhw/company-background_10000/0/1648661803251/arquitectura_360_studio_cover?e=2147483647&v=beta&t=W0DOc_srKTZ1HX4r0bwdYOlN_tJ6iGBbW-fZOmMGQIo" alt="Oficina" />
                        <p>Oficina</p>
                    </div>
                    <div className="category-item" onClick={() => handleNavigation('/restauracion')}>
                        <img src="https://www.estudiovilablanch.com/sites/default/files/styles/vilablanch_wide/public/imagenes/vilablanch_reforma_casa_priorat_24.jpg?itok=kVvz0t4_" alt="Restauración" />
                        <p>Restauración</p>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </StrictMode>
    );
}

export default Basic;
