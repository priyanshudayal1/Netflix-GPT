import React from "react";


export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-semibold mb-8">{title}</h1>
      <p className="w-1/2 text-xl font-light"> {overview}</p>
      <div className="mt-8 flex gap-7">
        <button className="border rounded-md py-2 bg-white hover:opacity-80 text-black shadow-lg px-6 text-lg">
        Play
        </button>
        <button className="border rounded-md py-2 bg-gray-500 hover:opacity-80 text-white shadow-lg px-6 text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
