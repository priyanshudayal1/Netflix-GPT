import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularShows } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularShows = () => {
    const dispatch = useDispatch();
    const popularShows = useSelector(store => store.movies.popularShows);
    //fetching data from api and updating the store
    const getPopularShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularShows(json.results));
    };
    useEffect(() => {
        if (!popularShows) {
            getPopularShows();
        };
    }, []);
};

export default usePopularShows;
