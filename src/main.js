import { Carousel, Container } from 'react-bootstrap';

const Main = () => {
  return (
    <main>
      <Container>
        <Carousel interval={2500} controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6fba5967789515.5b462a43c6a69.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a0854c67789515.5b462a43c7790.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/96f86a73927139.5c1a38982121b.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <br />
        <p>
          Este proyecto pretende explorar el "hogar" no sólo como un tipo de arquitectura, sino también como parte de nuestra vida cotidiana e identidad, que va más allá de cualquier ubicación física y refleja nuestra relación con nosotros mismos, con los demás y con el universo circundante.
        </p>
      </Container>
    </main>
  );
}

export default Main;