import React, { useEffect, useState } from "react";
import FilterSection from "../components/FilterSection";
import ListView from "../components/ListView";
import { Loader } from "../components/Loader";
import Product from "../components/Product";
import Sort from "../components/Sort";
import { useGlobalFilterContext } from "../contextApi/filterContext";

const ProductsPage = () => {
  const { filteredProducts,categoryVAL,colorVal } = useGlobalFilterContext();
  // const [showProducts, setShowProducts] = useState(filteredProducts);

  const [isSort,setIsSort] = useState({
    sort:false,
    val:""
  })

  const [gridView, setGridView] = useState(true);

  const changeGridView = () => {
    setGridView(!gridView);
  };





  // useEffect(()=>{
  //   sortProducts()
  // },[isSort])



  // if (isLoading) return <Loader />;
  return (
    <div
      className={`px-6 md:px-24 ${
        gridView ? `${(categoryVAL ==="all" || colorVal === "") ?" h-[510vh] " : "h-[150vh]" } md:h-[130vh]`: `${categoryVAL === "all" ?"h-[860vh] md:h-[440vh]":"h-[210vh] md:h-[190vh]"} `
      }`}
    >
      <h2 className="text-center font-black text-3xl md:text-5xl pt-8  text-[#233e28] underline">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-max gap-20 md:gap-4">
        <div className="w-[96%]">
          <FilterSection />
        </div>
        <div className="w-[100%] h-screen">
          <Sort
            gridView={gridView}
            changeGridView={changeGridView}
            filteredProducts={filteredProducts}
            setIsSort={setIsSort}
          />
          {gridView ? (
            <div
              className={` grid grid-cols-1   md:${
                gridView
                  ? "grid-cols-4 items-center justify-center"
                  : "grid-cols-1 items-center justify-center"
              } gap-4 pt-8 pb-32  `}
            >
              {filteredProducts?.map((prod) => (
                <Product fp={prod} />
              ))}
            </div>
          ) : (
            <div>
              {filteredProducts?.map((prod) => (
                <ListView prod={prod}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
