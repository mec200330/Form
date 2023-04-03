import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import './SecondStep.css';

const options = [

  {id: 1, value:"fútbol", label: "Fútbol ⚽"},
  {id: 2, value:"PC", label: "PC 💻"},
  {id: 3, value:"Play", label: "Play 🎮"},
  {id: 4, value:"Música", label: "Música 🎶"},
  {id: 5, value:"Foto", label: "Fotografía 📸"},
  {id: 6, value:"Nadar", label: "Nadar 🏊‍♂️"},
  {id: 7, value:"Correr", label: "Correr 🏃‍♂️"},

]


const SecondStep = () => {
  const [selectOption, setSelectOption] = useState(null)
const hobbiesSer = JSON.stringify(selectOption)
localStorage.setItem('hobbies', hobbiesSer)

  const onChangeAdditionalHobbie =(e)=>{
    const sport = e.target.value;
   localStorage.setItem('adittionalHobbie', sport)

  }
  return (
    <div>
     <h2>Selecciona tu deporte favorito</h2>
     <h4>Hobbies</h4>
     <Container className='p-5 text-center'>
      <Row className='justify-content-md-center'>
        <Col lg='7'>
          <h5>Selecciona tus hobbies</h5>
          <Select
          defaultValue={selectOption}
          onChange={setSelectOption}
          options={options}
          isSearchable
          isMulti/>
        </Col>
        <Col lg='7' className='mt-4'>
          <h5>Quieres añadir otro hobbie??</h5>
          <Form.Control type='text' placeholder='Karate' onChange={(e)=> onChangeAdditionalHobbie(e)}/>
        </Col>
      </Row>
     </Container>
    </div>
  )
}

export default SecondStep
