import { INCREMENT, SET_MOVIE } from "../types/home";
import axios from "axios"


export const setMovie = ()=>(dispatch)=>axios("http://www.omdbapi.com/?apikey=11de7fb1&s=series").then((response)=> dispatch({type:SET_MOVIE,payload:response.data.Search}))

export const setCount = ()=>({
    type : INCREMENT
})