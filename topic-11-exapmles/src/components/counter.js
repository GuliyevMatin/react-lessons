import { connect } from "react-redux";
import {     setDecrement, setIncrement } from "../store/actions/counter";

function Counter(props) {

    console.log(props);
  return <div className="d-flex justify-content-center mt-5">

  
  <button className="btn btn-primary px-3 mx-3" onClick={()=>props.setIncrementDispath()}>+</button>
  <p className="h3">{props.counter}</p>
  <button disabled={props.counter === 0 && true}  className="btn btn-danger px-3 mx-3" onClick={()=>props.setDecrementdispath()}>-</button>
  </div>;
}

const mapStateToProps = (state) => ({
    counter: state.counterReducer.counter
})

const mapDispatchToProps = (dispatch) =>({
    setIncrementDispath: () => dispatch(setIncrement()),
    setDecrementdispath: () => dispatch(setDecrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
