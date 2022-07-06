import { useDispatch, useSelector } from "react-redux";

function Basket() {
    const state = useSelector(state=>state)
    const productPriceResult = ()=> +(state.productCardReducer.product_price) * state.productCardReducer.product_count
    return (  
        <>
            <p>Product name -{state.productCardReducer.product_name}</p>
            <p>Product Count - {state.productCardReducer.product_count}</p>
            <p>Product Price -{productPriceResult()}</p>
        </>
    );
}

export default Basket;