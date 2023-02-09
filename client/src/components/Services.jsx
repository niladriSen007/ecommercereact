import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";

const Services = () => {
  return (
    <section className="flex flex-col md:flex-row align-center justify-center w-full h-46 gap-3  px-20 md:px-0 pt-16 text-center">
      <div className="flex flex-col items-center justify-center bg-green-100 px-3 py-6  bg-opacity-70 rounded-sm">
        <TbTruckDelivery className="text-[#233e28] bg-white rounded-full p-1    my-2" size={32}/>
        <p className="text-sm md:text-base font-semibold text-[#233e28]">Super Fast and Free Delivery</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 md:gap-2  text-center">
        <div className="flex flex-col items-center justify-center px-12 md:px-5 py-4 bg-green-100 bg-opacity-70  rounded-sm">
          <MdOutlineSecurity className="text-[#233e28] bg-white rounded-full p-1    my-2" size={32}/>
          <p className="text-sm md:text-base font-semibold trxt-[#233e28]">No Contract Shipping</p>
        </div>
        <div className="flex flex-col items-center justify-center px-10 md:px-3 py-4 bg-green-100    bg-opacity-70   rounded-sm">
          <FaMoneyBillAlt className="text-[#233e28] bg-white rounded-full p-1   my-2" size={32}/>
          <p className="text-sm md:text-base font-semibold trxt-[#233e28]">Money-back Guaranteed</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-3 py-4 bg-green-100  bg-opacity-70   rounded-sm">
        <RiSecurePaymentFill className="text-[#27472d] bg-white rounded-full p-1 my-2" size={32}/>
        <p className="text-sm md:text-base font-semibold trxt-[#233e28]">Super Secure Payment System</p>
      </div>
    </section>
  );
};

export default Services;
