import React, { useEffect, useState } from "react";
import { useGlobalProductContext } from "../contextApi/productContext";
import { Loader } from "./Loader";
import Product from "./Product";

const FeaturedProducts = () => {
  const {isLoading, featuredProducts } = useGlobalProductContext();



  if(isLoading)
    return (
     <Loader />
    )

  return (
    <div className="px-10 md:px-64 bg-green-100 bg-opacity-60 py-10">
      <h2 className="text-center">
        <p className="font-black text-2xl md:text-4xl py-12">Our <span className="text-[#233e28] pb-1 font-black">Featured Products</span> are</p>
      </h2>
      <div className="flex flex-col md:flex-row  justify-between items-center gap-14 ">
        {featuredProducts?.map((fp) => (
          <Product fp={fp} key={fp.div}/>
        ))}
      </div> 
    </div>
  );
};

export default FeaturedProducts;
