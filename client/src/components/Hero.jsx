import React from "react";
import HeroImg from "../images/h1.avif"
import Typewriter from "typewriter-effect"

const Hero = ({myData}) => {
  const {name} = myData;
  return (
    <section className="flex flex-col md:flex-row px-6 md:px-12 py-16 md:py-32 justify-center items-center gap-16">
      <div className="w-[80%] md:w-[36%]">
        <p className="text-sm md:text-lg font-semibold text-gray-600 ">
          welcome to <br/><span className="text-4xl md:text-5xl font-black text-[#233e28] ">
          <Typewriter options={{
                    strings:["Niladri's Store","1 Stop Solution","Free Delivery","Large Discount"],
                    autoStart:true,
                    loop:true,
                    wrapperClassName:"typewriter",
                    cursor:"",
                }} />
            </span>
        </p>
        <p className="font-semibold pt-2 pb-4 text-gray-700 leading-1 text-sm md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et repellat
          earum quam fuga iure, omnis possimus sequi, aut ipsam, esse inventore
          laudantium quos doloribus.
        </p>
        <button className='px-2 py-1 rounded-sm bg-[#233e28] text-white font-bold shadow-xl'>Shop Now</button>
      </div>
      <div className="relative">
        <img src={HeroImg} alt="hero" className=" w-[260px] md:w-[320px] rounded-sm relative " style={{zIndex:0}} loading="lazy" />
        <div className=" gradient-01"></div>
      </div>
    </section>
  );
};

export default Hero;
