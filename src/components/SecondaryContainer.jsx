import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="-mt-40 relative bg-black">
      <MovieList
        title={"Now Playing Movies"}
        movies={movies.nowPlayingMovies}
      />
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated Shows"} movies={movies.topRatedShows} />
      <MovieList title={"Popular Shows"} movies={movies.popularShows} />
    </div>
  );
};
