import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"GPT",
    initialState:{
        showGPTSearch:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        toggleGPTSearchView:(state)=>{
            state.showGPTSearch=!state.showGPTSearch;
        },
        addGPTMovies:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        },
    }
});

export default GPTSlice.reducer;

export const {toggleGPTSearchView,addGPTMovies}=GPTSlice.actions;