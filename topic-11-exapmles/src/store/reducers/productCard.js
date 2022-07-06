import {PRODUCT_COUNT_INC,PRODUCT_COUNT_DEC} from "../types/productCard"

const initialState = {
    product_price : "11.49",
    product_count : 1
}


export const productCardReducer = (state = initialState, action) =>{
    switch(action.type){
        case PRODUCT_COUNT_INC:
            return {...state,product_count: state.product_count + 1}
            case PRODUCT_COUNT_DEC:
                return {...state,product_count: state.product_count- 1}
            default:
                return state;
    }
}