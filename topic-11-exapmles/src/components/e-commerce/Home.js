import { Card,Button } from "react-bootstrap";
import { connect } from "react-redux";
import Banana from "../../Banana-PNG.png"
import { setProductDec, setProductInc } from "../../store/actions/productCard";

function Home(props) {
    console.log(props);
    const productPriceResult = ()=> +(props.price) * props.count
    return ( 
        <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Banana}/>
        <Card.Body>
          <Card.Title>Banana's</Card.Title>
          <Card.Text>
            {productPriceResult()} $
          </Card.Text>
          <div className="d-flex justify-content-center align-items-center">
          <Button disabled={props.count === 1 && true} className="mx-2" onClick={()=>props.setcountDecDispath()} variant="primary">-</Button>
          <h3>{props.count}</h3>
          <Button className="mx-2" onClick={()=>props.setCountIncDispath()} variant="primary">+</Button>
          </div>
        </Card.Body>
      </Card>
     );
}


const mapStateToProps = (state) => ({
    price : state.productCardReducer.product_price,
    count : state.productCardReducer.product_count
})

const mapDispatchToProps = (dispatch) => ({
    setCountIncDispath : ()=>dispatch(setProductInc()),
    setcountDecDispath : ()=>dispatch(setProductDec())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
