import React from "react";
import { FaSearch } from "react-icons/fa";
import IconsMobile from "./IconsMobile";
import IconForLgScreen from "./IconForLgScreen";
const Header = () => {
  return (
    <>
      <div className="shadow-md bg-white sticky top-0 z-50">
        <div
          className="flex space-x-5 justify-between md:justify-around
         items-center 
          max-w-6xl
           h-20
           mx-5
           md:mx-auto"
        >
          {/* left---Instagram logo */}
          <div className="  cursor-pointer flex-none">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
          {/* middle----Search-box */}
          <div className="relative flex-none md:flex hidden bg-red-200">
            <div className="absolute mt-[12px]">
              <FaSearch className="h-5 w-5 text-gray-400 pl-1 pointer-events-none" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 pl-6 py-2 pr-7"
            />
          </div>
          <div className="flex-none">
            {/* Left----Icons */}
            {/* icons for mobile devices */}
            <IconForLgScreen/>
            {/* icons for md,lg devices */}
            <IconsMobile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;