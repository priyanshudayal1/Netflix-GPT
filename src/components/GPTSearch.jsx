import React from "react";
import { GPTSearchBar } from "./GPTSearchBar";
import { GPTMovieSuggestions } from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

export const GPTSearch = () => {
  return (
    <>
      <div className="bg-img fixed -z-10">
        <img className="h-screen object-cover md:w-screen" src={BG_URL} alt="logo" />
      </div>
      <div className="md:pt-0 pt-[50%]">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};
