import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Proyectos from './data/proyectos.json'

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);



const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                Proyectos.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button className="btn btn-primary" >Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
        <div className="carousel-description">
            <p>Aquí conocerás las mejores técnicas de decoración para tus ambientes, preservar y actualizar tu mobiliario y actualizar para darle los toques de modernidad que tanto necesitas.
            </p>
        </div>
    </main >;
}

export default Main;