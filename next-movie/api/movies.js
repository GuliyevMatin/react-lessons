
import axios from "axios"
import { AxiosMock } from "../mocks"
import movies from "../mocks/movies/movies.json"
AxiosMock.onGet("/movies").reply(200,{
    movies
})

AxiosMock.onPost("/movies").reply(201, {
  message: "Succes"
    
  });

export const moviesGetApi = axios("/movies")
export const moviesPostApi =(item)=>axios.post("/movies",item)

