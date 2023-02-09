import React from "react";
import { Link } from "react-router-dom";
import FormatCurrency from "./FormatCurrency";

const Product = ({ fp }) => {
  return (
    <Link to={`/product/${fp.id}`}>
      <div key={fp.id} className="w-72 md:w-64 cursor-pointer">
        <div className="relative  overflow-hidden">
          <img className="w-72 md:w-72 h-48 rounded-md py-1 " src={fp.image} alt={fp.name} />
          <figcaption className="absolute top-3 bg-green-100 right-2 px-1 rounded-xl font-bold">
            {fp.category}
          </figcaption>
          <div className="mt-1 w-full h-[96%] rounded-lg bg-[#233e28] absolute top-0 duration-300  translate-x-[-90%] opacity-5 hover:translate-x-[0] hover:opacity-40"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">{fp.name}</p>
            <p className="font-bold">{fp.company}</p>
          </div>
          <p className="font-bold">Price : { <FormatCurrency price={fp.price} />}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
