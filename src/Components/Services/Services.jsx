import { Container, Row, Col } from "react-bootstrap";
import CardService from "./CardService/CardService";
import "./Services.css";
import image1 from '../../Assets/Img/iron man 2.jpg'
import image2 from '../../Assets/Img/Iron man.webp'
import image3 from '../../Assets/Img/los_vengadores.webp'

const Services = () => {

    const servicesArray=[
        {
            title: "React",
            subtitle: "Framework",
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
            title: "Bootstrap",
            subtitle: "Css Style",
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
            <h2 className="text-center"> Services</h2>
            <h4 className="pb-3 text-center">Algunos servicios que he realizado</h4>
            <Row xs={12} md={3} className='g-4 mt-4'>
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
