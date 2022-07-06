import { PRODUCT_COUNT_INC, PRODUCT_COUNT_DEC } from "../types/productCard";

const initialState = {
  product: [
    {
     
      product_price: "11.49",
      product_count: 1,
      product_name: "Banana's",
    },
    {
     
      product_price: "15.49",
      product_count: 1,
      product_name: "Apple's",
    },
  ],
};

export const productCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_COUNT_INC:

        for (let i = 0; i < state.product.length; i++) {
            if (state.product[i].product_name === action.payload.product_name) {
                state.product[i] = action.payload
                break;
            }
           
        }
      return { ...state};

    case PRODUCT_COUNT_DEC:
      return { ...state, product_count: state.product_count - 1 };
    default:
      return state;
  }
};
