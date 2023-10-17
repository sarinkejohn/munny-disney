import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results || []); // Handle empty or null data
    });
  };

  const slideRight = () => {
    elementRef.current.scrollLeft += 500;
  };

  const slideLeft = () => {
    elementRef.current.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={slideLeft}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute bg-black/40 rounded-full ${
          index_%3 === 0 ? "mt-[60px]" : "mt-[150px]"
        }`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-3 md:gap-8 scrollbar-hide pb-5 px-3 pt-5 scroll-smooth"
      >
        {movieList.map((item, index) => (
          <React.Fragment key={index}>
            {index_%3 === 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </React.Fragment>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={slideRight}
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 bg-black/40 rounded-full ${
          index_%3 === 0 ? "mt-[60px]" : "mt-[150px]"
        }`}
      />
    </div>
  );
}

export default MovieList;
