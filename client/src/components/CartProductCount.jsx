import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const CartProductCount = ({ amount, setDecrease,setIncrease }) => {

  return (
    <div className="flex gap-2 items-center justify-start">
      <AiOutlineMinus
        className="cursor-pointer bg-[#233e28] text-white  font-bold p-1 rounded-full"
        size={26}
        onClick={setDecrease}
      />

      <p className="font-bold text-lg"> {amount}</p>
      <AiOutlinePlus
        className="cursor-pointer bg-[#233e28] text-white  font-bold p-1 rounded-full"
        size={26}
        onClick={setIncrease}
      />
    </div>
  );
};

export default CartProductCount;
