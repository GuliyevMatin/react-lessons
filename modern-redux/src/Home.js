import { useReducer } from "react";

const initialState = {
  count: 0,
  value: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "change":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state.count}</p>
      <p>{state.value}</p>
      <button onClick={()=>dispatch({ type: "increment" })}>Artir</button>
      <button onClick={()=>dispatch({ type: "change",payload:25 })}>Artir</button>
    </>
  );
}

export default Home;
