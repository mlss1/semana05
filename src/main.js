import Carousel from 'react-bootstrap/Carousel';

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const gatos = [
  {
      name: "Diseño 1",
      description: "Descripcion Diseño 1"
  },
  {
      name: "Diseño 2",
      description: "Descripcion Diseño 2"
  },
  {
      name: "Diseño 3",
      description: "Descripcion Diseño 3"
  },
];

const Main = () => {
  return <main>
      <Carousel>
          {
              gatos.map(it => {
                  return (<Carousel.Item>
                      <img className='w-100 dark-image' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/6fba5967789515.5b462a43c6a69.jpg'></img>
                      <Carousel.Caption>
                          <h3>{it.name}</h3>
                          <p>{it.description}</p>
                      </Carousel.Caption>
                  </Carousel.Item>);
              })
          }
      </Carousel>
  </main>;
}

export default Main;