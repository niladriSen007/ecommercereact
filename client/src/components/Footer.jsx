import React from "react";
import { SiDiscord } from "react-icons/si";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-64 bg-[#233e28] text-white py-16 flex flex-col gap-6 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 place-items-start ">
        <div className="flex flex-col gap-2 md:gap-8">
          <span className="text-4xl md:text-5xl font-bold">Niladri.</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Subscribe to get important updates</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none p-1 rounded-sm placeholder:text-[#233e28] font-bold"
          />
          <button className="px-2 py-1 rounded-sm text-[#233e28] bg-white font-bold w-24 ">
            Subscribe
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg">Follow Us</span>
          <div className="flex gap-2">
            <SiDiscord
              size={32}
              className="text-white border-white border-2 p-1 rounded-full"
            />
            <AiFillInstagram
              size={32}
              className="text-white border-white border-2 p-1 rounded-full"
            />
            <AiFillTwitterCircle
              size={32}
              className="text-white border-white border-2 p-1 rounded-full"
            />
          </div>
        </div>
        <div>
          <span className="font-bold">Call Us At </span>
          <span className="font-bold">+1234567687</span>
        </div>
      </div>
      <hr className=' w-[63vw] ' />
      <div className="flex flex-col items-start md:flex-row justify-between w-[45vw] gap-2 md:gap-6 font-medium py-1">
        <span className="text-white ">
          &copy;{year} Niladri Sen. All Rights Reserved
        </span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
