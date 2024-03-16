import React from "react";

import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {

  return (
    <div className="px-6  text-white ">
      <h1 className="text-2xl py-4 font-bold">{title}</h1>
      <div className="flex overflow-x-scroll py-4 scroll-smooth">
        <div className="flex flex-row gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
