import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { movieGetApi } from '../../../../api/movies';
import {MYFavoriteBorderIcon} from "./movies.styled"

function MoviesComponent() {

  useEffect(() => {
    movieGetApi.then((res) => {
      console.log(res);
    }) 
  })
    return (  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" />
        <MYFavoriteBorderIcon></MYFavoriteBorderIcon>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}

export default MoviesComponent;