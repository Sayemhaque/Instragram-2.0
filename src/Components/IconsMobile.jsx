import React from "react";
import ProfilePic from '../Images/IMG_20210607_160007-removebg-preview.png';
import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlinePlusSquare,
} from "react-icons/ai";
const IconsMobile = () => {
  return (
    <div>
      <div className="flex md:hidden items-center justify-around fixed bottom-0 w-full bg-white p-3 border border-1 left-0">
        <AiOutlineHome className="headIcons" />
        <AiOutlinePlusSquare className="headIcons" />
        <AiOutlineCompass className="headIcons" />
        <AiOutlineHeart className="headIcons" />
        <img
          className="w-7 h-7 rounded-full object-contain ring ring-red-300 ring-offset-4"
          src={ProfilePic}
          alt=""
        />
      </div>
    </div>
  );
};

export default IconsMobile;