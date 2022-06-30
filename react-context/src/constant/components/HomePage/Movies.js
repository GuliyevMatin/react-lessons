import { Card, Button } from "react-bootstrap";
import { useHomeProvider } from "../../../providers/HomeStoreState";
import { motion } from "framer-motion";
function Movies() {
  const { movies } = useHomeProvider();
  console.log(movies.Search);
  return (
    <div className="moviesDiv">
      {movies.Search?.map((item, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.Poster} />
          <Card.Body>
            <Card.Title>{item.Title}</Card.Title>
            <Card.Text>{item.Year}</Card.Text>
            <motion.button
            className="btn btn-primary"
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variant="primary"
            >
              Go
            </motion.button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Movies;
