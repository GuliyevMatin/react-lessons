import { Navbar,Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

function Header(props) {
    return ( 
        <Navbar bg="danger" variant="dark">
    <Container>
    <Navbar.Brand href="#">E-Commerse</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/" className="text-white nav-link">Home</Link>
      <Link to="/basket" className="text-white nav-link">Basket</Link>
      <p className="text-white bg-warning px-3 h5">{props.count}</p>
    </Nav>
    </Container>
  </Navbar>
     );
}

const mapStateToProps = (state) => ({
  count : state.productCardReducer.product_count
})

export default connect(mapStateToProps)(Header) ;
