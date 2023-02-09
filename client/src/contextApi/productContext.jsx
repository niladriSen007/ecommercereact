import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import axios from "axios"
import reducer from "../reducer/productReducer"

export const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const initialState = {
        isLoading:false,
        isError:false,
        products:[],
        featuredProducts:[],
        isSingleLoading:false,
        singleProduct:{}
    }

    const [state,dispatch] = useReducer(reducer,initialState)


    //fetching all products
    const fetchProducts = async() =>{
            dispatch({type:"SET_LOADING"})
            try
            {
                const res = await axios.get("https://api.pujakaitem.com/api/products");
                const products = await res.data;
                dispatch({type:"MY_API_DATA",payload:products})
            }
            catch(e)
            {
                dispatch({type:"API_ERROR"})
            }
        }

        
    //fetching single products
  const fetchSingleProduct = async(url) =>{
        dispatch({type:"START_SINGLE_LOADING"})
        try
        {
            const res = await axios.get(url);
            const product = await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:product})
        }
        catch(e)
        {
            dispatch({type:"START_SINGLE_ERROR"})
        }
    }



    useEffect(()=>{
        fetchProducts();
    },[])

    return <AppContext.Provider value={{...state,fetchSingleProduct}}>{children}</AppContext.Provider>
}

export const useGlobalProductContext = () =>{
    return useContext(AppContext)
}