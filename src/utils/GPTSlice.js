import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"GPT",
    initialState:{
        showGPTSearch:false,

    },
    reducers:{
        toggleGPTSearchView:(state)=>{
            state.showGPTSearch=!state.showGPTSearch;
        }
    }
});

export default GPTSlice.reducer;

export const {toggleGPTSearchView}=GPTSlice.actions;