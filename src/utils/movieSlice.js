import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({

    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        TopRatedMovies:null,
        HorrorMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
                    },
                    addTopRatedMovies:(state,action)=>{
                        state.TopRatedMovies=action.payload
                                },
                                addHorrorMovies:(state,action)=>{
                                    state.HorrorMovies=action.payload
                                            },
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addHorrorMovies}=movieSlice.actions
export default movieSlice.reducer;