import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)

    //early return
    //if(!movies)

    if(movies===null) return;
    const mainMovie=movies[17];
    //console.log(mainMovie);
    const{original_title,overview,id}=mainMovie;
    return (
        <div className='md:pt-0 pt-[30%] bg-black'>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackGround movieId={id} />
        </div>
    );
}

export default MainContainer;
