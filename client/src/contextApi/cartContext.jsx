import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer"

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const initialState = {
        cart : [],
        total_item:0,
        total_amount:0,
        shipping_fee:5000,
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const addToCart = (id,amount,color="#111",product) =>{
        dispatch({type:"ADD_TO_CART",payload:{id,amount,color,product}})
    }

    const incrementInCart = (id,products,fetchSingleProduct,singleProduct) =>{
        dispatch({type:"INCREMENT_IN_CART",payload:{id,products,fetchSingleProduct,singleProduct}})
    }

    const decrementInCart = (id,products) =>{
        dispatch({type:"DECREMENT_IN_CART",payload:{id,products}})
    }

    const deleteItemFromCart = (id) =>{
        dispatch({type:"DELETE_ITEM_FROM_CART",payload:{id}})
    }


    return <CartContext.Provider value={{...state,addToCart,incrementInCart,decrementInCart,deleteItemFromCart}}>{children}</CartContext.Provider>

}

export const useGlobalCartContext = () =>{
    return useContext(CartContext)
}