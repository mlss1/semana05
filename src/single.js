import Proyectos from './data/proyectos.json';

const Single = () => {

    const currentRoute = window.location.pathname;
    const proyecto = Proyectos.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{proyecto.name}</h1>
        <hr></hr>
        <img src={proyecto.picture}></img>
        <p>{proyecto.description}</p>
    </>);
}

export default Single;