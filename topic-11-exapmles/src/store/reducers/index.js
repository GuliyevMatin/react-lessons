import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { productCardReducer } from "./productCard";
import {profileReducer} from "./profile"

const reducers = combineReducers({
  counterReducer,
  productCardReducer,
  profileReducer
})

export default reducers;