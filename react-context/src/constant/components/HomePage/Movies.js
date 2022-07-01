import { Card, Button } from "react-bootstrap";
import { useHomeProvider } from "../../../providers/HomeStoreState";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Movies() {
  const { movies } = useHomeProvider();
  return (
    <div className="moviesDiv">
      {movies.Search?.map((item, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Link className="nav-link" to={`/movie/${item.Title}`}>
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
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default Movies;
