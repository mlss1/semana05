const Header = () => {
    return (
        <nav className="navbar bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand">C O N C R E A T I V E</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-dark" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;