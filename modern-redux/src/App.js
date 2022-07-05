import {useSelector,useDispatch} from "react-redux"
import './App.css';
// import Home from "./Home";
import { increment } from "./store/slices/homeSlices";

function App() {
  const state = useSelector(state=>state)
  // const dispatch = useDispatch()
  console.log(state);
  return (
    <div className="App">
      {/* <p>{state.home.counter}</p>
      <button onClick={()=>dispatch(increment())}>Artir</button> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
