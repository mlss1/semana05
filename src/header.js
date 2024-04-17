const Header = () => {
    return (
        <nav className="navbar bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand">C O N C R E A T I V E</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;
