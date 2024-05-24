const Footer = () => {
    return (
        <footer data-bs-theme="white" className="bd-footer py-4 py-md-5 bg-body-tertiary">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <a href="terminos-de-uso.html">Términos de Uso</a>
                    </div>
                    <div className="col-md-4">
                        <a href="terminos-de-uso.html">Políticas de Cookies</a>
                    </div>
                    <div className="col-md-4">
                        <a href="politica-de-privacidad.html">Política de Privacidad</a>
                    </div>
                </div>
                <p className="mt-3">&copy; 2024 Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;