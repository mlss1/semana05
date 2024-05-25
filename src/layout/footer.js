import React from 'react';
import '../style.css';

const Footer = () => {
    return (
        <footer className="footer bg-body-tertiary">
             <div className="container">
                <div className="row py-4">
                    <div className="col-md-3">
                        <h5>C R E A T I V E</h5>
                        <p>Manténgase informado y suscríbase al boletín:</p>
                        <div className="newsletter-signup">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit"><i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sobre Nosotros</a></li>
                            <li><a href="#">Soluciones</a></li>
                            <li><a href="#">Terminos y Condiciones</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Documentation</h5>
                        <ul>
                            <li><a href="#">Centro de Ayudae</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Políticas de Privacidad</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Social</h5>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p>&copy; 2024 Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;