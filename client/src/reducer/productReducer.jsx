// const  ProductReducer = (state,action) =>{
//     if(action.type === "SET_LOADING")
//         return {...state,isLoading:true}
//     else if  (action.type === "MY_API_DATA")
//        {
//         const featured = action.payload.filter(prod=>prod.featured === true)
//         return {...state,isLoading:false,products:action.payload,featuredProducts:featured}
//        }
//     else if(action.type === "API_ERROR")
//         return {...state,isLoading:false,isError:true}
// }


const  ProductReducer = (state,action) =>{
    switch(action.type)
    {
        case "SET_LOADING":
            return {...state,isLoading:true}
        case "MY_API_DATA":
            const featured = action.payload.filter(prod=>prod.featured === true)
            return {...state,isLoading:false,products:action.payload,featuredProducts:featured}
        case "API_ERROR":
            return {...state,isLoading:false,isError:true}
        case "START_SINGLE_LOADING":
            return {...state,isSingleLoading:true,isError:false}
        case "SET_SINGLE_PRODUCT":
            return {...state,isSingleLoading:false,singleProduct:action.payload}
        case "START_SINGLE_ERROR":
            return {...state,isSingleLoading:false,isError:true}
        default:
            return state;
    }
}

export default ProductReducer