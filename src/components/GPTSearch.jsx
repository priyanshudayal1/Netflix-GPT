import React from "react";
import { GPTSearchBar } from "./GPTSearchBar";
import { GPTMovieSuggestions } from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

export const GPTSearch = () => {
  return (
    <div>
      <div className="bg-img fixed -z-10">
        <img
          src={BG_URL}
          alt=""
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};
