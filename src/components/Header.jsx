import React, { useState } from "react";
import disney_logo from "/images/disney_logo.png";
import avatar from "/images/avatar.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { GiFilmSpool } from "react-icons/gi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle,setToggle] = useState(false)
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCHLIST", icon: HiPlus },
    { name: "ORIGNALS", icon: HiStar },
    { name: "MOVIES", icon: GiFilmSpool },
    { name: "SERIES", icon: HiTv }
  ];
  return (
    <div className="flex fixed w-full items-center justify-between p-5 z-[100] shadow-xl  h-[80px] ">
      <div className="flex  gap-5 items-center z-10   ">
        <img
          src={disney_logo}
          alt="/"
          className="object-cover w-[80px] md:w-[115px]"
        />
        <div className="hidden md:flex gap-8 items-center">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex gap-5 md:hidden items-center">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
          <div  className="md:hidden ">
            <span onClick={()=>setToggle(!toggle)}>

            <HeaderItem name={""} Icon={HiDotsVertical}  />
            </span>
            { toggle ?<div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-4 py-4 p-3 ">
              {menu.map(
                (item, index) =>
                  index < 4 && <HeaderItem name={item.name} Icon={item.icon} key={index} />
                    
              )}
            </div>:null}
          </div>
        </div>
      </div>
      <div className="flex">
        <img
          src={avatar}
          alt="/"
          className="object-cover rounded-full w-10 bg-blue-600"
        />
      </div>
    </div>
  );
}

export default Header;
