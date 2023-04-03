import "./FirstStep.css";
import { Container, Row } from "react-bootstrap";
import CardFruit from "./CardFruit";
import { useState } from "react";

export const fruits =[
{
  id: 1,
  icon: "🍎",
  name: "Manzana",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
},
{
  id: 2,
  icon: "🍉",
  name: "Sandia",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
},
{
  id: 3,
  icon: "🍓",
  name: "Fresa",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
},
]


const FirstStep = () => {
  const [selectedCard, setSelectecCard] = useState(null)
const clickCard = (fruit) =>{
setSelectecCard(fruit.id); 
localStorage.setItem('fruitName', fruit.name)
localStorage.setItem('iconfruit', fruit.icon)
}


  return (
    <div>
      <h2>Escoja su fruta favorita</h2>
      <h4>Seleccione la frute y luego haga click en siguiente paso</h4>
      <Container className="p-5 text center">
        <Row>
          {fruits.map((fruit, index)=>(
            <CardFruit fruit={fruit} key={index} clickCard={clickCard} selectedCard={selectedCard}/>
          ))}
          
        </Row>
      </Container>
    </div>
  );
};

export default FirstStep;
