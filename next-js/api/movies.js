import axios from "axios";
import {AxiosMock} from "../mocks"

import movies from "../mocks/movies/movies.json"

AxiosMock.onGet("/movies").reply(200, {
    movies:movies
  });

  export const movieGetApi =axios.get("/movies")