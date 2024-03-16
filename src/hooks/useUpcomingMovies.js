import {useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies} from "../utils/movieSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    //fetching data from api and updating the store
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };
    useEffect(() => {
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;
