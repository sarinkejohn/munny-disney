import React from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genres.map((item ,index) =>index <=4&& (
        <div key={item.id}  className="p-8 px-8 md:px-16" >
            <h2 className="text-white text-[20px] font-bold   "> {item.name}</h2>
            <MovieList genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
