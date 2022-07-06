import { connect, useDispatch, useSelector } from "react-redux";
import { setDecrement, setIncrement } from "../store/actions/counter";

function Counter() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center mt-5">
      <button
        className="btn btn-primary px-3 mx-3"
        onClick={() => dispatch(setIncrement())}
      >
        +
      </button>
      <p className="h3">{state.counterReducer.counter}</p>
      <button
        disabled={state.counterReducer.counter === 0 && true}
        className="btn btn-danger px-3 mx-3"
        onClick={() => dispatch(setDecrement())}
      >
        -
      </button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//     counter: state.counterReducer.counter
// })

// const mapDispatchToProps = (dispatch) =>({
//     setIncrementDispath: () => dispatch(setIncrement()),
//     setDecrementdispath: () => dispatch(setDecrement())
// });

export default Counter;
