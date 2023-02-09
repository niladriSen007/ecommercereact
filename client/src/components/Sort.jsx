import React, { useState } from "react";
import { BsFillGridFill, BsListStars } from "react-icons/bs";
import { useGlobalFilterContext } from "../contextApi/filterContext";

const Sort = ({ gridView, changeGridView, filteredProducts,setIsSort }) => {

  const {sortProducts} = useGlobalFilterContext();

  // const changeSortFunctionality = (e) =>{
  //   isSort(prev=>{
  //   return{
  //     ...prev,
  //     sort:true,
  //     val:e.target.value
  //   }
  //   })
  // }

  return (
    <div className="flex flex-col md:flex-row  justify-start md:justify-between  items-start md:items-center w-[60vw] pt-5 gap-2 md:gap-0 text-sm md:text-base">
      <div className="flex justify-center items-start md:items-center gap-1 ">
        <BsFillGridFill
          size={22}
          className={`${
            gridView === true ? "bg-black text-white" : "bg-white text-black"
          }   
          } p-1 rounded-sm cursor-pointer`}
          onClick={changeGridView}
        />
        <BsListStars
          size={24}
          className={`${
            !gridView ? "bg-black text-white" : "bg-white text-black"
          }    p-1 rounded-sm cursor-pointer`}
          onClick={changeGridView}
        />
      </div>
      <p>{filteredProducts?.length} total items</p>
      <div>
        <form>
          <select className="border-2 cursor-pointer" onChange={sortProducts}>
            <option value="price_asc">Price (Low to High)</option>
            <option value="price_desc" defaultValue={true}>Price (High to Low)</option>
            <option value="name_asc">Product (a to z)</option>
            <option value="name_desc">Product (z to a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
