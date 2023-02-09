const filterReducer = (state,action) =>{
    switch(action.type)
    {
        case "SET_FILTERED_PRODUCTS":
            return{
                ...state,
                filteredProducts:[...action.payload],
                allProducts:[...action.payload], 
            }
        case "FILTER_PRODUCTS":
                    return {
                        ...state,
                        isSort:{
                            sort:true,
                            val:action.payload.target.value
                        }
                    }
        case "FILTER_BASED_ON_FILTER_VALUE":
                {
                    const {filteredProducts} = state;
                    let tempData = [...filteredProducts];

                    let newArr;

                    const sorting =(a,b)=>{
                        if (state.isSort.sort === true && state.isSort.val === 'price_desc')
                        {
                                return  b.price - a.price;
                        }
                        else if (state.isSort.sort === true && state.isSort.val ===  'price_asc')
                        {
                            return  a.price - b.price;
                        }
                        else if (state.isSort.sort === true && state.isSort.val ===  "name_asc")
                        {
                            return  a.name.localeCompare(b.name);
                        }
                        else if (state.isSort.sort === true && state.isSort.val ===  "name_desc")
                        {
                            return  b.name.localeCompare(a.name)
                        }
                    }

            // if (state.isSort.sort === true && state.isSort.val === 'price_desc')
            // {
            //     let tempData = [...action.payload];
            //     let newArr = tempData.sort((a, b) => b.price - a.price);
            //     return {
            //         ...state,
            //         filteredProducts:newArr
            //     };
            // }
            // else if (state.isSort.sort === true && state.isSort.val ===  'price_asc')
            //  {
            //     let tempData = [...action.payload];
            //     let newArr = tempData.sort((a, b) => a.price - b.price);
            //     return {
            //         ...state,
            //         filteredProducts:newArr
            //     };
            //  }
            //  else if (state.isSort.sort === true && state.isSort.val ===  "name_asc")
            //  {
            //     let tempData = [...action.payload];
            //     let newArr = tempData.sort((a, b) => a.name.localeCompare(b.name));
            //     return {
            //         ...state,
            //         filteredProducts:newArr
            //     };
            //  }
            //  else if (state.isSort.sort === true && state.isSort.val ===  "name_desc")
            //  {
            //     let tempData = [...action.payload];
            //     let newArr = tempData.sort((a, b) => b.name.localeCompare(a.name));
            //     return {
            //         ...state,
            //         filteredProducts:newArr
            //     };
            //  }

            newArr = tempData.sort(sorting)

            return {
                ...state,
                filteredProducts:newArr,
            }

             }
        case "SEARCH_PRODUCT_BY_CATEGORY":
            {
                const {allProducts} = state;
                const newArr = allProducts.filter(elem=>elem.category.includes(action.payload.target.value))
                return {
                    ...state,
                    filteredProducts:newArr,
                }
            }
            case "SEARCH_PRODUCT_BY_COLOR":
                {
                    const {allProducts} = state;
                    const newArr = allProducts.filter(elem=>elem.colors.includes(action.payload.target.dataset.color))
                    console.log(action.payload.target.dataset.color)
                    return {
                        ...state,
                        filteredProducts:newArr,
                        colorVal:action.payload.target.dataset.color,
                    }
                }
        case "FILTER_ACCORDING_TO_CATEGORY":
            {
                const {allProducts} = state;
                if(action.payload === "all")
                    return {
                        ...state,
                        filteredProducts:allProducts
                    }
         
                const newArr = allProducts.filter(elem=>elem.category.includes(action.payload))
                return {
                    ...state,
                    filteredProducts:newArr,
                }
            }
            case "SEARCH_PRODUCT_BY_COMPANY":
                {
                    const {allProducts} = state;
                    console.log(action.payload.target.innerHTML)
                    const newArr = allProducts.filter(elem=>elem.company.includes(action.payload.target.innerHTML))
                    return {
                        ...state,
                        filteredProducts:newArr,
                    }
                }
                case "FILTER_ACCORDING_TO_PRICE":
                    {
                        const {allProducts} = state;
                        const newArr = allProducts.filter(elem=>elem.price<=action.payload.target.value)
                        console.log(action.payload.target.value)
                        return {
                            ...state,
                            filteredProducts:newArr,
                            currentPrice:action.payload.target.value,
                        }
                    }
                    case "CLEAR_FILTERS": 
                        {
                            return {
                                ...state,
                                filteredProducts : action.payload,
                                allProducts : action.payload,
                                currentPrice:0,
                                categoryVAL:"all",
                                colorVal:"",
                            }
                        }
        default:
            return state;
    }
}
export default filterReducer