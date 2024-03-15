import React from 'react'
import { IMG_LINK } from '../utils/constants'

export const MovieCard = ({poster_path}) => {
  return (
    <div className='hover:shadow-lg hover:scale-105 hover:cursor-pointer'>
        <img className='max-w-fit w-500 h-[350px]' src={IMG_LINK+poster_path} alt="movie_poster" />
    </div>
  )
}
