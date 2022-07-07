import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <h1>TodoApp</h1>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/add-todo">Add Todo</Link>
        
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
