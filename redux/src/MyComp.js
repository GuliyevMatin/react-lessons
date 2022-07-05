
import { useEffect } from "react";
import {connect } from "react-redux"
import { setCount, setMovie } from "./store/actions/home";

function MyComp(props) {
 
  useEffect(()=>{
    props.movies.length === 0 && props.setMovieDispath()
  },[])

  console.log(props);


  
  return <>
  <p>{props.count}</p>
  <button onClick={()=>props.setCountDispatch()}>Artir</button>
  </>;
}


const mapStateToProps = (state) =>({
  movies : state.homeReducer.movies,
  count : state.homeReducer.count
})


const mapDispatchToProps = (dispatch) =>({
  setMovieDispath : () =>dispatch(setMovie()),
  setCountDispatch : ()=>dispatch(setCount())
})

export default connect(mapStateToProps,mapDispatchToProps)(MyComp);
