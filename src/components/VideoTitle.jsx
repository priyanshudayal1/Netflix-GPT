import React from "react";


export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] md:pt-[18%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-5xl  text-2xl font-semibold  md:mb-8 mb-2">{title}</h1>
      <p className="w-1/2 text-xl font-light md:block hidden"> {overview}</p>
      <div className="mt-0 md:mt-8  gap-7 z-10  flex">
        <button className="border rounded-md md:py-4 bg-white hover:opacity-80 text-black shadow-2xl md:px-12 md:text-2xl text-sm py-1 px-6">
        Play
        </button>
        <button className=" border rounded-md md:py-4 bg-gray-500 hover:opacity-80 text-white shadow-2xl md:px-12 md:text-2xl text-sm py-1 px-6">
          More Info
        </button>
      </div>
    </div>
  );
};
