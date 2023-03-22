import './FirstStep.css'
import { Container, Row } from 'react-bootstrap'
const FirstStep = () => {
  return (
    <div>
      <h2>Escoja su fruta favorita</h2>
      <h4>Seleccione la frute y luego haga click en siguiente paso</h4>
      <Container className='p-5 text center'>
        <Row>
          <p>Esto es una fruta</p>
        </Row>
      </Container>
    </div>
  )
}

export default FirstStep
