import Image from "next/image";
import { Card, Button } from "react-bootstrap";
function Cards({ item }) {
  return (
    <Card style={{ width: "18rem",marginRight:"15px",background:"red" }}>
      <Image width={200} height={200} src={item.Poster} />
      <Card.Body>
        <Card.Title>{item.Title}</Card.Title>
        <Card.Text>{item.Year}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
