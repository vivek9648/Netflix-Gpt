import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies)
    return (
        movies.nowPlayingMovies&&(
        <div className=' bg-black'>
            <div className=' mt-0 md:-mt-30 pl-4 md:pl-12 relative z-20'>
           <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
           <MovieList title={"Top Rated Movie"} movies={movies.TopRatedMovies}/>
           <MovieList title={"Popular Movie"} movies={movies.popularMovies}/>
           <MovieList title={"Horror Movie"} movies={movies.HorrorMovies}/>
           </div>
           {/* 
           MovieList--popular
           MovieCards*n
           MovieList--Trending
           MovieList--now playing
           MovieList--Horror




           */}
        </div>
    )
    );
}

export default SecondaryContainer;
