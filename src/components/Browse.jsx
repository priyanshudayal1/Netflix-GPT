import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedShows from "../hooks/useTopRatedShows";
import usePopularShows from "../hooks/usePopularShows";
import { GPTSearch } from "./GPTSearch";
import { useSelector } from "react-redux";

export const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedShows();
  usePopularShows();
  const GPTSearchView = useSelector((state) => state.gpt);
  return (
    <div>
      <Header />
      {GPTSearchView.showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
