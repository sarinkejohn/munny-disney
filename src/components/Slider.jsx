import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import GlobalApi from "../services/GlobalApi";

const IMAGE_GLOBAL_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null)


  const sliderRight = (element) =>{
    element.scrollLeft += screenWidth-110
  }
  const sliderLeft = (element) =>{
    element.scrollLeft-= screenWidth-110
  }
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    try {
      GlobalApi.getTrendingVideos.then((res) => {
        setMovieList(res.data.results);
      });
    } catch (error) {
      console.log("Check your Internet!");
    }
  };
 
  return (
    <div className="group w-full">
      <HiChevronLeft
      onClick={()=>sliderLeft(elementRef.current)}
        size={40}
        className="hidden p-1 font-bold left-0 absolute text-white mt-[300px] mx-6 bg-black/50 rounded-full text-[30px] lg:text-3xl md:group-hover:block  "
      />

      <HiChevronRight
      onClick={()=>sliderRight(elementRef.current)}
        size={40}
        className="hidden p-1 font-bold right-0 absolute text-white mt-[300px] mx-6 bg-black/50 rounded-full text-[30px] lg:text-3xl md:group-hover:block "
      />

      <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth transition-transform duration-300 ease-in" ref={elementRef}>
        {/* <HiChevronLeft
          size={40}
          className="hidden p-1 font-bold left-0 absolute text-white mt-[150px] mx-6 bg-black/50 rounded-full text-[30px] md:group-hover:block  "
        /> */}

        {movieList.map((item, index) => (
          <img
            key={index}
            className="min-w-full max-w-[1920px]  md:h-[600px] object-cover object-right-top mr-5 rounded-md hover:border-[4px] border-gray-400 ease-in duration-150 transition-all "
            src={IMAGE_GLOBAL_URL + item.backdrop_path}
            alt={item.title}
          />
        ))}

        {/* <HiChevronRight
          size={40}
          className="hidden p-1 font-bold right-0 absolute text-white mt-[150px] mx-6 bg-black/50 rounded-full text-[30px] md:group-hover:block "
        /> */}
      </div>
    </div>
  );
}

export default Slider;
