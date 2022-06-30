import { Link } from "react-router-dom";
import {Navbar,Container,Nav} from "react-bootstrap"

function Header() {
  return (
    <>
     
     
      <Navbar bg="dark" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
           <Link to="/" className="nav-link text-white" >Home</Link>
    
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
