import React from "react";
import { Button, Card } from "react-bootstrap";
const Carte = ({prod}) => {
const handleClick = () => alert(`Vous venez de cliquer sur ${prod.btncontent}`);
  return (
    <div>
      
     <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.titre}</Card.Title>
          <Card.Text>{prod.description}</Card.Text>
          <Button variant={prod.couleur} onClick={handleClick}>{prod.btncontent}</Button>
        </Card.Body>
      </Card> 
    </div>
  );
};


export default Carte;
