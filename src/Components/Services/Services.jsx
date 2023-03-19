import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services = () => {

    const servicesArray=[
        {
            title: "Wordpress Course",
            subtitle: "Subtitulo",
            image:"",
            footer: "Footer",
            link:"#!"
        },
        {
            title: "Wordpress Course",
            subtitle: "Subtitulo",
            image:"",
            footer: "Footer",
            link:"#!"
        },
        {
            title: "Wordpress Course",
            subtitle: "Subtitulo",
            image:"",
            footer: "Footer",
            link:"#!"
        },
        {
            title: "Wordpress Course",
            subtitle: "Subtitulo",
            image:"",
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
