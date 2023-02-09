import React from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { menu } from "../utils/navigationmenu";
import { AiOutlineShoppingCart } from "react-icons/ai";
const MobileNavbar = ({ setShowMobileNav, showMobileNav }) => {
  return (
    <div className="w-[100vw] min-h-[100vh] text-[#233e28]  top-0 bg-white left-0 z-50 flex flex-col gap-6 items-center justify-center duration-300 fixed">
      <ImCross
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="absolute right-8 top-5"
        size={24}
      />
      <div className="flex flex-col justify-center items-center gap-6 ">
        {menu.map((m, index) => (
          <Link
            key={index}
            to={m.link}
            className="px-4  text-2xl text-[#233e28] hover:text[#233e28] font-bold duration-200"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {m.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col  gap-6 items-center "  style={{position:"relative"}}>
        <button className="px-6 py-2 rounded-sm bg-[#233e28] text-white font-bold text-lg">
          Login
        </button>
        <AiOutlineShoppingCart
          size={40}
          className="text-[#233e28] font-bold "
         
        />
        <div className=" w-5 h-5 bg-[#233e28] text-white rounded-full text-sm flex items-center justify-center" style={{position:"absolute",top:64,right:20}}>
          10
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
