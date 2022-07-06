import { Card,Button } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import Banana from "../../Banana-PNG.png"
import { setProductDec, setProductInc } from "../../store/actions/productCard";

function Home(props) {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(state);
 
    const productPriceResult = ()=> +(state.productCardReducer.product.product_price) * state.productCardReducer.product.product_count
    return ( 
       <div className="d-flex flex-wrap">
        {state.productCardReducer.product.map((item,index)=>(
           <Card key={index} className="m-3" style={{ width: '18rem' }}>
           <Card.Img variant="top" src={Banana}/>
           <Card.Body>
             <Card.Title>{item.product_name}</Card.Title>
             <Card.Text>
               {item.product_price} $
             </Card.Text>
             <div className="d-flex justify-content-center align-items-center">
             <Button disabled={item.product_count === 1 && true} className="mx-2" onClick={()=>dispatch(setProductDec())} variant="primary">-</Button>
             <h3>{item.product_count}</h3>
             <Button className="mx-2" onClick={()=>dispatch(setProductInc(item.product_name,item.product_count + 1,item.product_price))} variant="primary">+</Button>
             </div>
             <Button className="d-block mt-3 mx-auto" onClick={()=>dispatch(setProductInc())} variant="primary">Add</Button>
           </Card.Body>
         </Card>
        ))}
       </div>
     );
}


// const mapStateToProps = (state) => ({
//     price : state.productCardReducer.product_price,
//     count : state.productCardReducer.product_count
// })

// const mapDispatchToProps = (dispatch) => ({
//     setCountIncDispath : ()=>dispatch(setProductInc()),
//     setcountDecDispath : ()=>dispatch(setProductDec())
// })

export default Home
