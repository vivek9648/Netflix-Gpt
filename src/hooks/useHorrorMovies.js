import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useHorrorMovies=()=>{
    //Fetch data from TMDB API and update store
    const dispatch=useDispatch();
   // const HorrorMovies=useSelector((store)=>store.movie.HorrorMovies)
    const getHorrorMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS)
    const json=await data.json()
    console.log(json.results);
    dispatch(addHorrorMovies(json.results))
    

    }
    useEffect(()=>{
       //if(!HorrorMovies)
        getHorrorMovies()
    },[])
}
export default useHorrorMovies;