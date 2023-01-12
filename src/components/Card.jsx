import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MyCard({ id, name, img }) {
  const [stock,setStock]= useState(0)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <div>
          <Button variant="primary" disabled={stock===0} onClick={()=>setStock(stock-1)}>-</Button>
          
          <Form.Label>{stock}</Form.Label>
      
          <Button variant="primary" disabled={stock===5} onClick={()=>setStock(stock+1)}>+</Button>
        </div>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
