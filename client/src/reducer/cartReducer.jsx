
const cartReducer = (state,action) =>{
    switch(action.type)
    {
        case "ADD_TO_CART" :{

            let {id,amount,color,product} = action.payload;
            let prodId = id + Math.random();
            let cartProduct = {
                id: prodId,
                color:color,
                name:product.name,
                amount:amount,
                image:product.image[0].url,
                price:product.price,
                max:product.stock,
            }
            let total = cartProduct.price * cartProduct.amount;
            return {
                ...state,
                cart: [...state.cart,cartProduct],
                total_item: state.total_item + cartProduct.amount,
                total_amount :  state.total_amount + total
            }
        }
        case "INCREMENT_IN_CART":{
            let {id,products,fetchSingleProduct,singleProduct} = action.payload;

            let item = state.cart.find(c=>c.id === id)

            let realItem = products.find(p=>p.name === item.name)
            console.log(realItem.id)

            const API = "https://api.pujakaitem.com/api/products"

            fetchSingleProduct(`${API}/${realItem.id}`)

            console.log(singleProduct)

            let item_amount = state.total_amount;
            let total_item_count = state.total_item

            const updatedProduct = state.cart.map(item=>{
                if(item.id === id)
                  {
                    // let decAmnt =   item.amount + 1;
                    if(item.amount < singleProduct.stock)
                    {
                        // val = item.price;
                        total_item_count +=1;
                        item_amount += item.price;
                        return {
                        ...item,
                        amount: item.amount + 1
                        }
                    }
                    else
                    {
                        alert("We are out of stock for this product")
                        return {
                            ...item,
                            amount: item.amount 
                            }
                    }
                  }
                  else
                  {
                    return {
                        ...item,
                    }
                  }
            })
            
            // state.cart[itemIndex].amount+=1
            // console.log(state.cart[itemIndex].amount)
            return {
                ...state,
                cart:updatedProduct,
                total_item: total_item_count,
                total_amount :  item_amount
            }
        }

        case "DECREMENT_IN_CART":{
            let {id} = action.payload;
            // let itemIndex = state.cart.findIndex(c=>c.id === id)


            let item_amount = state.total_amount;
            let total_item_count = state.total_item

            const updatedProduct = state.cart.map(item=>{
                if(item.id === id)
                  {
                    // let decAmnt =   item.amount + 1;
                  if(item.amount > 1)
                  {
                    item_amount -= item.price;
                    total_item_count -= 1;
                    return {
                        ...item,
                        amount: item.amount - 1,
                    }
                  }
                  else
                  {
                    return {
                        ...item,
                        amount: item.amount 
                    }
                  }
                  }
                  else
                  {
                        return {
                            ...item
                        }
                  }
            })


            return {
                ...state,
                cart:updatedProduct,
                total_amount : item_amount,
                total_item : total_item_count
            }
        }
        case "DELETE_ITEM_FROM_CART":{
            const {id} = action.payload;

            let item = state.cart.find(c=>c.id === id)
            let amo = item.amount * item.price;
            let prodCount = item.amount;

            let updatedCart = state.cart.filter(item=>item.id!==id)
            return {
                ...state,
                cart:updatedCart,
                total_amount : state.total_amount - amo,
                total_item : state.total_item - prodCount
            }
        }

        default:
            return state;
    }
}

export default cartReducer