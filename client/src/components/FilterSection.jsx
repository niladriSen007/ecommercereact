import { useGlobalFilterContext } from "../contextApi/filterContext";
import FormatCurrency from "./FormatCurrency";

const category = ["all", "mobile", "watch", "laptop", "accessories"];

const FilterSection = () => {
  const {
    searchProduct,
    filterAccordingToCategory,
    colorsArr,
    searchProductByColor,
    companiesArr,
    searchProductByCompany,
    colorVal,
    price,
    filterAccordingToPrice,
    currentPrice,
    clearFilters
  } = useGlobalFilterContext();

  // console.log(currentPrice);
  return (
    <div className="w-full md:w-56 pt-5 md:pt-0 grid grid-cols-2  gap-8 md:gap-1 md:grid-cols-1 items-start justify-center">
      <div className="md:pt-6">
        <h3 className="font-bold text-base md:text-lg ">Category</h3>
        {category.map((c) => (
          <p
            className="p-1 cursor-pointer hover:font-black text-sm md:text-base"
            onClick={filterAccordingToCategory}
          >
            {c}
          </p>
        ))}
      </div>


      <form className="md:mt-4">
        <input
          type="text"
          className=" text-sm md:text-base w-20 md:w-44 border-2 pl-1 border-slate-400 placeholder:p-1 placeholder:text-slate-600 outline-none text-slate-600 mt-1"
          onChange={searchProduct}
          placeholder="Search  "
        />
      </form>


      <div className="h-16  w-22 md:w-44 flex flex-col gap-2 md:mt-5">
        <span className="font-bold text-base md:text-lg">Colors </span>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-0  ">
          {colorsArr.map((c) => (
            <div
              className={`md:h-5 md:w-5 w-4 h-4 rounded-full cursor-pointer ${
                c === colorVal
                  ? "opacity-90 border-2 border-black w-5 h-5"
                  : "opacity-60"
              } `}
              style={{ backgroundColor: `${c}` }}
              onClick={searchProductByColor}
              data-color={c}
            ></div>
          ))}
        </div>
      </div>

     

      

      <div className="h-16  w-22 md:w-44 flex flex-col gap-2 md:mt-8">
        <span className="font-bold text-base md:text-lg ">Company </span>
        <div className="flex flex-col gap-1 font-base ">
          {companiesArr.map((c) => (
            <p
              className=" cursor-pointer hover:font-bold text-sm md:text-base "
              onClick={searchProductByCompany}
            >
              {c}
            </p>
          ))}
        </div>
      </div>

      

      <div className="h-16  w-22 md:w-44  md:mt-52 flex flex-col gap-2">
        <p className="font-bold text-base md:text-lg">Price</p>
        <span className="cursor-pointer hover:font-bold text-sm md:text-base ">
          {<FormatCurrency price={currentPrice === 0 ? price.max : currentPrice } />}
        </span>
        <input
          type="range"
          min={price.min}
          max={price.max}
          value={currentPrice === 0 ? price.max : currentPrice}
          onChange={filterAccordingToPrice}
          name="currentPrice"
          className="cursor-pointer"
        />
      </div>

      <button className=" hidden md:block p-2 bg-red-700 text-white font-bold  mt-10 w-40" onClick={clearFilters}>Clear Filters</button>
     
    </div>
  );
};

export default FilterSection;
