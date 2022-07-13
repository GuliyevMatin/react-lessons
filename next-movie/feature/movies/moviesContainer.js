import { useEffect } from "react";
import {moviesGetApi, moviesPostApi} from "../../api/movies"
import {useSelector,useDispatch} from "react-redux"
import { setMovie } from "../../store/slice/moviesSlice";

import { useModals } from "../../hooks/useModal";
function MoviesContainer() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

  

   
    return ( 
        <>Movies
       
    
        </>
     );
}

export default MoviesContainer;