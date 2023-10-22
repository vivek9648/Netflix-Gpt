import React, { useRef } from 'react';
import lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch=useDispatch()
    const searchText=useRef(null)
    //search movie tmdb
    const searchMovieTMDB=async(movie)=>{

        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
        const json=await data.json()
        return json.results;
    }
    const langKey=useSelector((store)=>store.config.lang)
    const handleGptSearchClick=async()=>{
//console.log(searchText.current.value);
const gptQuery="Act as a movie Recommendation system and suggest some movie for the query:"+searchText.current.value+"only give me name of  5 movies, comma separted like the example result given ahead. Example result:Gadar,Sholey,Don,GolMol,Koi mil gya "
//Make an API call to GPT api and get movie result
const gptResults=await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
   
    })
    if(!gptResults.choices){
        //write error handling
    }
   
    console.log(gptResults.choices?.[0]?.message?.content);
 //The Shawshank Redemption, The Godfather, Pulp Fiction, The Dark Knight, Fight Club
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")


    //[The Shawshank Redemption, The Godfather, Pulp Fiction, The Dark Knight, Fight Club]
    //for each movie I will search TMDB api
   const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie) )
   //[Promise,Promise,Promise,Promise,Promise]
   const tmdbResults= await Promise.all(promiseArray)
   console.log(tmdbResults)
   dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))

}
    
    
    return (
        <div className='pt-[50%] md:pt-[10%] flex justify-center '>
            <form className=' w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
                <input className=" p-4 m-4 col-span-9 rounded-lg" ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceHolder}/>
                <button  className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    );
}

export default GptSearchBar;
