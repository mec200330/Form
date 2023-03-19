import './Introduction.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
const Introduction = () => {
  return (
    <div className='introduction p-3 p-lg-5 mt-5'>
        <Container fluid>
<Row className='justify-content-md-center'>
    <Col xs={12} md={8}>
<h1 className='pl-2 text-center'>
    Formulario Dinámico
</h1>
<h4 className='text-center pt-3'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, molestiae delectus ut eligendi ipsam accusamus.
</h4>
<div className='d-flex container-actions mt-5'>
    <div className='container-buttons'>
        <Button className='p-3' onClick={()=> console.log("click button")}>Get in Touch</Button>
        <Button className='p-3'>Get in Touch</Button>
    </div>
    <div className='btn-start-create'>
        <a href='#dynamic-form'>Start to create ➡️</a>
    </div>
</div>
    </Col>
</Row>

        </Container>
      
    </div>
  )
}

export default Introduction

