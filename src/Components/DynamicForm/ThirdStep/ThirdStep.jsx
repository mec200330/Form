import { Container, FloatingLabel, Form, Row, Col } from 'react-bootstrap'
import './ThirdStep.css'

const ThirdStep = () => {
  return (
    <div>
     <h2>Tercer paso</h2>
     <h4>Quieres añadir un comentario??</h4>
     <Container className='p-5 text-center'>
      <Row className='justify-content-md-center'>
        <Col lg="10">
        <FloatingLabel controlId='floatingTextarea' label="Comentarios" className='mb-3'>
          <Form.Control as="textarea" placeholder='Enviar y Comentar' onChange={(e) => console.log(e.target.value)}/>
        </FloatingLabel>
        </Col>
      </Row>
      <div className='send-form'>
        <p className='result p-3' onClick={()=>console.log("Ver Resultado")}>
          Ver Resultado 📃
        </p>
      </div>
     </Container>
    </div>
  )
}

export default ThirdStep
