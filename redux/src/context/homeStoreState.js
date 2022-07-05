
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const homeProvider = createContext({});
const initialState = {
  count: 0,
  movies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGEHOMECOUNT":
      return { ...state, count: action.payload };

    case "SET_MOVIES":
      return { ...state, movies: action.payload };

    default:
        return state
 
  }
};

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios("http://www.omdbapi.com/?apikey=11de7fb1&s=series").then((response) => {
        dispatch({ type: "SET_MOVIES", payload: response.data })
    })
  },[]);


  const values = { state,dispatch };

  return (
    <homeProvider.Provider value={values}>{children}</homeProvider.Provider>
  );
};

export const useHomeProvider = () => {
  const object = useContext(homeProvider);
  return object;
};
