import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedShows } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedShows = () => {
    const dispatch = useDispatch();
    const topRatedShows = useSelector(store => store.movies.topRatedShows);
    //fetching data from api and updating the store
    const getTopRatedShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedShows(json.results));
    };
    useEffect(() => {
        if (!topRatedShows) {
            getTopRatedShows();
        };
    }, []);
};

export default useTopRatedShows;
