import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

const Aside = () => {
    return (
        <aside className="aside-container">
            <div className="search-container">
                <label htmlFor="searchInput" className="search-label">Buscar</label>
                <input type="text" id="searchInput" className="form-control search-input" placeholder="Buscar" />
                <button className="btn search-btn"><i className="fa fa-search"></i></button>
            </div>
            <br />
            <h3 className="text-center">Crea una nueva cuenta</h3>
            <form className="g-1 row">
                <div className="col-md-12">
                    <label htmlFor="inputNombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputNombre" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword" required />
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary" type="submit">Registrar</button>
                </div>
            </form>
            <p className="already-registered text-center">¿Ya tienes una cuenta? <a href="/login" className="login-link">Iniciar sesión</a></p>
        </aside>
    );
}

export default Aside;