import { Container, Row, Col } from "react-bootstrap";
import CardService from "./CardService/CardService";
import "./Services.css";
import image1 from '../../Assets/Img/html.jpg'
import image2 from '../../Assets/Img/JS.jpg'
import image3 from '../../Assets/Img/react.jpg'

const Services = () => {

    const servicesArray=[
        {
            title: "HTML",
            subtitle: "Maquetado",
            image: image1,
            footer: "Footer",
            link:"#!"
        },
        {
            title: "Java Script",
            subtitle: "Lenguaje",
            image: image2,
            footer: "Footer",
            link:"#!"
        },
        {
            title: "React",
            subtitle: "Framework",
            image: image3,
            footer: "Footer",
            link:"#!"
        }
    ]



  return (
    <div className="services p-4 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">Lenguajes que conozco</h2>
            <h4 className="pb-3 text-center">Esta pagina fue diseñada con: </h4>
            <Row xs={1} md={3} className='g-4 mt-4'>
              {servicesArray.map((service, index)=>(
                <CardService service={service} key={index}/>
              ))}
              
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
