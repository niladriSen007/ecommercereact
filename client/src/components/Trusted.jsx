import React from "react";
import { BsFacebook } from "react-icons/bs";
import {AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai"
import {FaBitcoin,FaTiktok,FaGalacticRepublic} from "react-icons/fa"


const Trusted = () => {
  return (
    <div className="text-center py-16 my-24 w-full flex flex-col items-center justify-center gap-8 bg-green-100 bg-opacity-50">
      <p className="text-[#233e28] font-bold text-lg md:text-2xl">Trusted by 1000+ Companies</p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        <div>
          <BsFacebook
            size={64}
            className="text-[#233e28] bg-white rounded-full p-1 "
          />
        </div>
        <div>
          <AiFillInstagram
            size={68}
            className="text-[#233e28] bg-white rounded-full p-1 "
          />
        </div>
        <div>
          <AiFillTwitterCircle
            size={68}
            className="text-[#233e28] bg-white rounded-full p-1 "
          />
        </div>
        <div>
          <FaBitcoin
            size={64}
            className="text-[#233e28] bg-white rounded-full p-1 "
          />
        </div>
        <div>
          <FaTiktok
            size={64}
            className="text-[#233e28] bg-white rounded-full p-1 "
          />
        </div>
        <div>
          <FaGalacticRepublic
            size={64}
            className="text-[#233e28] bg-white rounded-full p-1 "
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
