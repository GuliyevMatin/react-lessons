import { useEffect } from "react";
import { moviesGetApi, moviesPostApi } from "../../api/movies";
import { useSelector, useDispatch } from "react-redux";
import { setMovie } from "../../store/slice/moviesSlice";
import axios from "axios";

import { useModals } from "../../hooks/useModal";
import AddDataModal from "../../shared/components/AddDataModal";
import Cards from "../../shared/components/CardsComponent/cards";
import { CardDiv } from "./movies.styled";


function MoviesContainer() {
  const state = useSelector((state) => state.moviesSlice.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    moviesGetApi.then((res) => {
      dispatch(setMovie(res.data.movies));
    });
  }, [state.movies]);


  return (
    <CardDiv>
    {state.map((item,index)=><Cards item={item} key={index}/>)}
      
      
    </CardDiv>
  );
}

export default MoviesContainer;
{/* <AddDataModal /> */}