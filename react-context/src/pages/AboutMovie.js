import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AboutMovie() {
    const [movie,setMovies] = useState([])
    const params = useParams()
    useEffect(()=>{
        axios(`http://www.omdbapi.com/?apikey=11de7fb1&t=${params.id}`).then((response)=>{
            setMovies(response.data)
    })
    },[])

    
    return ( 
        <div className="aboutMovie">
        <div className="aboutImg">
        <img src={movie.Poster} className="img-thumbnail" alt={movie.Poster}/>
        </div>
        <div className="aboutText">
            <p>{movie.Title}</p>
            <p>{movie.Plot}</p>
            <p>YEAR :{movie.Year}</p>
            <p>IMDB :{movie.imdbRating}</p>
        </div>
    </div>
     );
}

export default AboutMovie;