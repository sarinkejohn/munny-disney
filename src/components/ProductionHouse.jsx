import React from "react";
import starwar from "/images/starwar.png";
import nationalG from "/images/nationalG.png";
import pixar from "/images/pixar.png";
import marvel from "/images/marvel.png";
import disney from "/images/disney.png";

import starwarV from "/Videos/star-wars.mp4";
import nationalGV from "/Videos/national-geographic.mp4";
import pixarV from "/Videos/pixar.mp4";
import marvelV from "/Videos/marvel.mp4";
import disneyV from "/Videos/disney.mp4";

function ProductionHouse() {
  const PHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV
    },
    {
      id: 2,
      image: marvel,
      video: marvelV
    },
    {
      id: 3,
      image: nationalG,
      video: nationalGV
    },
    {
      id: 4,
      image: pixar,
      video: pixarV
    },
    {
      id: 5,
      image: starwar,
      video: starwarV
    }
  ];
  return (
    <div className="flex gap-2 md:gap-5 mt-2 p-2 px-5 md:px-16 items-center    ">
      {PHouseList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600 rounded-xl hover:scale-110 ease-in-out transition-all duration-300 cursor-pointer shadow-xl shadow-gray-700   "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 "
          />

          <img src={item.image} alt="/" className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
