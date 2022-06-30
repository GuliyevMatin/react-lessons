import { createContext, useState } from "react";

const homeProvider = createContext({})

export const HomeStoreState = ({children})=>{
    const [movies,setMovies] = useState([])
    
}