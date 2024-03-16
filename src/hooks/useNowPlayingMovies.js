import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    //fetching data from api and updating the store
    const getNowPlaying = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
        if (!nowPlayingMovies) {
            getNowPlaying();
        }
    }, []);
};

export default useNowPlayingMovies;
