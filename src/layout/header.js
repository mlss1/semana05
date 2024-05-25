import { FaHome, FaUser, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <>
            <nav className="navbar" style={{ backgroundColor: 'rgb(29, 42, 58)' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="/" style={{ color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
                          C R E A T I V E
                    </a>
                    <div className="d-flex align-items-center">
                        <a className="nav-link me-3" href="/" style={{ color: 'rgb(176, 148, 117)' }}>
                            <FaHome style={{ marginRight: '5px' }} />
                            Home
                        </a>
                        <a className="nav-link me-3" href="/nosotros" style={{ color: 'white' }}>
                            <FaInfoCircle style={{ marginRight: '5px' }} />
                            Nosotros
                        </a>
                        <a className="nav-link me-3" href="/contacto" style={{ color: 'white' }}>
                            <FaEnvelope style={{ marginRight: '5px' }} />
                            Contactanos
                        </a>
                        <a className="nav-link me-3" href="/perfil" style={{ color: 'white' }}>
                            <FaUser style={{ marginRight: '5px' }} />
                            Inicia Sesion
                        </a>
                    </div>
                </div>
            </nav>
            <div style={{ height: '5px', backgroundColor: 'rgb(176, 148, 117)' }}></div>
        </>
    );
}

export default Header;