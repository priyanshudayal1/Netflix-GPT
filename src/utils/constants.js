export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY 
  }
};

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const IMG_LINK="https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGEs=[{identifier:"en",language:"English"},{identifier:"hindi",language:"Hindi"},{identifier:"spanish",language:"Spanish"}];

export const OPEN_AI_KEY=process.env.REACT_APP_OPENAI_KEY;
