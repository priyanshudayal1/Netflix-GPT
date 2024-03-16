import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
export const GPTSearchBar = () => {
    const language=useSelector(state=>state.appConfig);
  return (
    <div className='pt-[5%] flex w-full justify-center align-middle'>
        <form className=' m-6 bg-black grid grid-cols-12' action="">
        <input type="text" className='py-2 pl-2 rounded-lg m-4 col-span-10' placeholder={lang[language.lang].gptSearchPlaceHolder} />
        <button className='py-2 px-4 m-4 rounded-lg bg-red-700 col-span-2 text-white'>{lang[language.lang].search}</button>
        </form>
    </div>
  )
}
