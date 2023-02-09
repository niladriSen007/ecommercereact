import { useGlobalCartContext } from "../contextApi/cartContext";
import { AiFillDelete } from "react-icons/ai";
import FormatCurrency from "../components/FormatCurrency";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useGlobalProductContext } from "../contextApi/productContext";


const Cart = () => {
  const { cart, color, total_amount, shipping_fee,incrementInCart,decrementInCart,deleteItemFromCart } = useGlobalCartContext();
  const {products,fetchSingleProduct,singleProduct} = useGlobalProductContext()
  // console.log(cart[0].id)
  return (
    <div className="md:px-64 md:py-24 py-6 px-6">
      <div className="flex items-center justify-between md:pl-28  font-bold text-sm md:text-base ">
        <p>Item</p>
        <p className="md:pl-28">Price</p>
        <p className="">Quantity</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>
      <hr className="border-2 md:ml-24 md:mb-3 mt-1" />
      <div className="md:mx-24 w-[300px] md:w-[900px] mr-12 mt-4 flex flex-col gap-4">
        {cart.map((c) => (
          <div className="flex   items-center justify-between text-xs md:text-base ">
            <div className="flex  flex-col md:flex-row md:gap-2 w-40">
              <figure>
                <img
                  src={c?.image}
                  alt={c?.name}
                  className="w-8  md:w-16 md:h-12"
                />
              </figure>
              <div className="flex flex-col">
                <span className=" font-bold">{c?.name}</span>
                <div className="flex gap-1 items-center">
                  <div>color :</div>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: `${c?.color}` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="justify-self-start w-24">
              <span>{<FormatCurrency price={c?.price} />}</span>
            </div>
            <div className="flex items-center gap-2 w-16">
              <AiOutlineMinus className="cursor-pointer border-2 rounded-full border-gray-500" onClick={()=>decrementInCart(c?.id,products)}/>
              <span>{c?.amount}</span>
              <AiOutlinePlus className="cursor-pointer border-2 rounded-full border-gray-500" onClick={()=>incrementInCart(c?.id,products,fetchSingleProduct,singleProduct)}/>
            </div>
            <div>{<FormatCurrency price={c?.price * c?.amount} />}</div>
            <div>
              <AiFillDelete className="cursor-pointer" onClick={()=>deleteItemFromCart(c.id)}/>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-2 md:ml-24 md:mb-3 mt-1" />
      <div className="ml-24 md:w-[1020px] flex items-center justify-between">
        <Link to="/products">
          <button className="px-2 py-1 rounded-sm bg-[#233e28] text-white font-medium">
            Continue Shopping
          </button>
        </Link>
        <div>
          <div className="flex items-center justify-end gap-32  mx-24 font-bold">
            <p>Total</p>
            <p>{<FormatCurrency price={total_amount} />}</p>
          </div>
          <div className="flex items-center justify-end gap-32 mx-24 font-bold">
            <p>Shipping Charges</p>
            <p>{<FormatCurrency price={shipping_fee} />}</p>
          </div>
          <hr className="w-28 border-2 md:ml-[290px] md:mb-3 mt-1" />
          <div className="flex items-center justify-end gap-32  mx-24 font-bold">
            <p>Grand Total</p>
            <p>{<FormatCurrency price={shipping_fee + total_amount} />}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
