import { PRODUCT_COUNT_DEC, PRODUCT_COUNT_INC } from "../types/productCard";

export const setProductInc = (product_name, product_count, product_price) => ({
  type: PRODUCT_COUNT_INC,
  payload: {
    product_name,
    product_count,
    product_price,
  },
});

export const setProductDec = () => ({
  type: PRODUCT_COUNT_DEC,
});
