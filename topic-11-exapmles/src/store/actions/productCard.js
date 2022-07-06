import { PRODUCT_COUNT_DEC, PRODUCT_COUNT_INC } from "../types/productCard";


export const setProductInc = ()=>({
    type : PRODUCT_COUNT_INC
})

export const setProductDec = ()=>({
    type:PRODUCT_COUNT_DEC
})