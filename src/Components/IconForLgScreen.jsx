import React from "react";
import ProfilePic from '../Images/IMG_20210607_160007-removebg-preview.png';
import {
  AiOutlineCompass,
  AiOutlineHome,
  AiOutlinePlusSquare,
  AiOutlineSearch,
} from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
const IconsLg = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <AiOutlineHome className="headIcons  hidden md:inline-grid" />
        <AiOutlinePlusSquare className="headIcons hidden md:inline-grid" />
        <AiOutlineCompass className="headIcons hidden md:inline-grid" />
        <AiOutlineSearch className="headIcons md:hidden" />
        <RiSendPlaneLine className="headIcons" />
        <img
          className="w-7 h-7 hidden md:inline-grid rounded-full object-contain ring ring-red-300 ring-offset-2"
          src={ProfilePic}
          alt=""
        />
      </div>
    </div>
  );
};

export default IconsLg;
