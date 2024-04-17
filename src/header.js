const Header = () => {
    const headerStyles = {
        backgroundColor: 'red', // Color de fondo rojo
        padding: '20px 0', // Espaciado interno
        textAlign: 'center', // Alineación del texto al centro
        color: 'white' // Color del texto blanco
    };

    return (
        <header style={headerStyles}>
            <h1>CONCREATIVE</h1>
        </header>
    );
}

export default Header;