import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="mb-2 text-white flex items-center gap-2 cursor-pointer group transition-all duration-300 ease-in-out z-[100]  h-[80px]  ">
      <div className=" text-white flex items-center gap-2 text-[15px] font-semibold cursor-auto ">
        <Icon />
        <h2 className=" bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
          {name}
        </h2>
      </div>
    </div>
  );
}

export default HeaderItem;
