import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux';

export const SecondaryContainer = () => {
  const movies=useSelector(state=>state.movies);
  return (
    <div className='-mt-40 relative' >
    

    <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Trending"} movies={movies.popularMovies}/>
    <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Popular Movies"} movies={movies.nowPlayingMovies}/>



    </div>
  )
}
