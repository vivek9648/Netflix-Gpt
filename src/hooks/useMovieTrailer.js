import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const UseMovieTrailer = (movieId) => {
    const dispatch=useDispatch()
    //Memoiazation
    //const trailerVideo=useSelector((store)=>store.movie.trailerVideo)
    
    //fetch tariler video and updateing the store with trailer video
    const getMoviesVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
        API_OPTIONS
      );
      const json = await data.json();
      //console.log(json);
      const filterdata = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterdata.length ? filterdata[0] : json.results[0];
      //console.log(trailer);
      //setTrailerId(trailer.key)
      dispatch(addTrailerVideo(trailer))
    };
    useEffect(() => {
   
      getMoviesVideo();
    }, []);
    
}

export default UseMovieTrailer;
