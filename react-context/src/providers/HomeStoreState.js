import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const homeProvider = createContext({})

export const HomeStoreState = ({children})=>{
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios("http://www.omdbapi.com/?apikey=11de7fb1&s=movie").then((response)=>{
            setMovies(response.data)
    })
    },[])

    const values = {
        movies,
        setMovies
    }

    return (
        <homeProvider.Provider value={values}>
            {children}
        </homeProvider.Provider>
    )
}

export const useHomeProvider = ()=>{
    const object = useContext(homeProvider)

    return object
}