import { applyMiddleware, compose, createStore } from "redux";
import  reducers  from "./reducers";
import thunk from "redux-thunk"

// console.log(reducers);
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers, composeEnhancers(applyMiddleware(thunk))
  );