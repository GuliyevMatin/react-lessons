import { Link } from "react-router-dom";
import {Navbar,Container,Nav} from "react-bootstrap"

function Header() {
  return (
    <>
     
     
      <Navbar bg="dark" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
           <Link to="/movies" className="nav-link text-white" >Movies</Link>
           <Link to="/series" className="nav-link text-white" >Series</Link>

    
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
