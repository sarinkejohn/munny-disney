import React from "react";
const IMAGE_GLOBAL_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={IMAGE_GLOBAL_URL + movie.poster_path}
        alt={movie.title}
       className="w-[110px] md:w-[200px]  hover:border-[3px] border-gray-400 hover:scale-110 rounded-xl transition-all duration-150 cursor-pointer "
      />
    </>
  );
}

export default MovieCard;
