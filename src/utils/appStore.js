import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "../utils/movieSlice";
import GPTReducer from "../utils/GPTSlice"
import appConfigReducer from "../utils/appConfig"

const appStore = configureStore({
    reducer: {
        user:userReducer,
        movies:movieReducer,
        gpt:GPTReducer,
        appConfig:appConfigReducer,
        
    }
});

export default appStore;
