import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  isSort: {
    sort: false,
    val: "",
  },
  categoryVAL: "all",
  colors: [],
  colorVal: "",
  price:{
    min:0,
    max:0,
    
  },
  currentPrice:0
};

export const FilterProvider = ({ children }) => {
  const { products } = useGlobalProductContext();
  // console.log(products)

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_FILTERED_PRODUCTS", payload: products });
  }, [products]);

  //filter functionality
  useEffect(() => {
    // console.log(state.isSort);
    dispatch({ type: "FILTER_BASED_ON_FILTER_VALUE", payload: products });
  }, [state.isSort]);

  const sortProducts = (e) => {
    dispatch({ type: "FILTER_PRODUCTS", payload: e });
  };

  const searchProduct = (e) => {
    dispatch({ type: "SEARCH_PRODUCT_BY_CATEGORY", payload: e });
  };

  const searchProductByColor = (e) => {
    dispatch({ type: "SEARCH_PRODUCT_BY_COLOR", payload: e });
  };

  const searchProductByCompany = (e) => {
    dispatch({ type: "SEARCH_PRODUCT_BY_COMPANY", payload: e });
  };

  const filterAccordingToCategory = (e) => {
    const cat = e.target.innerHTML;
    state.categoryVAL = cat;
    dispatch({ type: "FILTER_ACCORDING_TO_CATEGORY", payload: cat });
  };

  const getUniqueData = (data, property) => {
    let newArr = data.map((elem) => elem[property]);
    const newUniqueArray =
      property === "colors"
        ? [...new Set(newArr.flat(2))]
        : [...new Set(newArr)];
    return newUniqueArray;
  };

  const colorsArr = getUniqueData(state.allProducts, "colors");
  const companiesArr = getUniqueData(state.allProducts, "company");
  const pricesArr = getUniqueData(state.allProducts, "price");

  //process - 1
  // state.price.max = Math.max.apply(Math,pricesArr)
  // state.price.min = Math.min.apply(Math,pricesArr)

 //process - 2
  // state.price.max = pricesArr?.reduce((initial,val)=>Math.max(initial,val),0)
  // state.price.min =pricesArr?.reduce((initial,val)=>Math.min(initial,val),Infinity)

  //process - 3
  state.price.max = Math.max(...pricesArr)
  state.price.min = Math.min(...pricesArr)
  // state.currentPrice = Math.max(...pricesArr)
  console.log(state.price)

  const filterAccordingToPrice = (e) =>[
    dispatch({ type: "FILTER_ACCORDING_TO_PRICE", payload: e})
  ]

  const clearFilters = () =>{
    dispatch({ type: "CLEAR_FILTERS",payload:products})
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sortProducts,
        searchProduct,
        filterAccordingToCategory,
        colorsArr,
        searchProductByColor,
        companiesArr,
        searchProductByCompany,
        filterAccordingToPrice,
        clearFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useGlobalFilterContext = () => {
  return useContext(FilterContext);
};
