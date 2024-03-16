import React from 'react'
import { IMG_LINK } from '../utils/constants'

export const MovieCard = ({poster_path}) => {
  if(!poster_path){
    return (
      <div className='hover:shadow-lg hover:scale-105 hover:cursor-pointer'>
          <img className='max-w-fit h-[200px] md:h-[350px]'
        src="https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
        alt="poster_image"
      />
      </div>
    )
  };
  return (
    <div className='hover:shadow-lg hover:scale-105 hover:cursor-pointer'>
        <img className='max-w-fit w-500 h-[200px] md:h-[350px]' src={IMG_LINK+poster_path} alt="movie_poster" />
    </div>
  )
}
