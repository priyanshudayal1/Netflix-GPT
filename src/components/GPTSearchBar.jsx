import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovies } from "../utils/GPTSlice";
export const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchMovie = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const searchText = useRef(null);
  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ".Only give names of 5 movies,comma separated like the example result given ahead.example result : Gadar,Sholay,Don,Golmaal 3,3 Idiots,Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      console.log("No results");
    }
    const gptMovies = gptResults.choices?.[0].message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovie(movie));
    //[p1,p2,p3,p4,p5]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGPTMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    // const tmdbMovies=tmdbResults.map((movie)=>movie.filter((mov)=>mov.title===gptMovies.title));
  };
  const language = useSelector((state) => state.appConfig);
  return (
    <div className="pt-[5%] flex w-full justify-center align-middle">
      <form
        className=" m-6 bg-black grid grid-cols-12"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="py-2 pl-2 rounded-lg m-4 col-span-10"
          placeholder={lang[language.lang].gptSearchPlaceHolder}
        />
        <button
          onClick={handleGptSearch}
          className="py-2 px-4 m-4 rounded-lg bg-red-700 col-span-2 text-white"
        >
          {lang[language.lang].search}
        </button>
      </form>
    </div>
  );
};
