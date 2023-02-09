import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import FormatCurrency from "../components/FormatCurrency";
import { useGlobalProductContext } from "../contextApi/productContext";
import { AiFillTags } from "react-icons/ai";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { SiFsecure } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import { Loader } from "../components/Loader";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";
import CartProductCount from "../components/CartProductCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalCartContext } from "../contextApi/cartContext";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const notify1 = () =>
    toast.error("You will have to choose at least one product");

  const notify2 = () => toast.error("Sorry! we are out of stock");

  const notify3 = () => toast.success("Item added to cart 😀");

  const { id } = useParams();

  const { isSingleLoading, fetchSingleProduct, singleProduct } =
    useGlobalProductContext();

  const { addToCart } = useGlobalCartContext();

  const [clickedImg, setClickedImg] = useState("");
  const [selectedColor, setSelectedColor] = useState(
    singleProduct?.colors?.at(0)
  );

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    fetchSingleProduct(`${API}/${id}`);
  }, [id]);

  useEffect(() => {
    setClickedImg(singleProduct?.image?.at(0).url);
  }, [singleProduct]);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : notify1();
  };

  const setIncrease = () => {
    amount < singleProduct?.stock ? setAmount(amount + 1) : notify2();
  };

  // console.log(id);

  if (isSingleLoading)
    return (
      // <div className="px-10 md:px-64 bg-green-100 bg-opacity-60 py-10">
      //   <p className="font-bold text-center">Loading Product....</p>
      // </div>
      <Loader />
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-32 px-4 md:px-24">
      <div className="flex flex-col md:flex-row gap-4">
        <figure className="flex flex-row md:flex-col gap-3 ">
          {singleProduct?.image?.map((i) => (
            <img
              src={i.url}
              alt={i.filename}
              key={i.id}
              className="w-20  md:w-40 h-10 md:h-20 hover:border-2 border-[#233e28] cursor-pointer"
              onClick={() => setClickedImg(i.url)}
            />
          ))}
        </figure>
        <div>
          <img
            src={clickedImg}
            alt="name"
            className="w-[344px] md:w-[600px] h-[196px] md:h-[355px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-0 md:px-16 py-12 md:py-0 justify-start">
        <p className="font-black text-2xl md:text-3xl text-[#233e28]">
          {singleProduct.name}
        </p>
        <div className="flex items-center justify-start gap-2">
          <p className="font-black text-sm ">
            <Stars stars={singleProduct.stars} />
          </p>
          <p className="font-black text-sm ">
            ({singleProduct.reviews} reviews)
          </p>
        </div>
        <p className="font-bold text-sm md:text-base">
          MRP :
          <del>{<FormatCurrency price={singleProduct.price + 25000} />}</del>
        </p>
        <p className=" text-sm md:text-base bg-[#233e28] text-white p-2 rounded-sm w-60 relative ">
          DEAL OF THE DAY :
          <strong className="font-bold">
            {<FormatCurrency price={singleProduct.price} />}
          </strong>
          <AiFillTags
            size={24}
            className="absolute text-white bg-[#233e28] p-1 rounded-full top-[-6px] left-[-12px]"
          />
        </p>
        <div className="flex gap-1 items-center">
          <p className="font-black">Colors : </p>
          <div className="flex gap-1">
            {singleProduct?.colors?.map((p, i) => (
              <div
                className={`w-4 h-4 rounded-full border-2 cursor-pointer ${
                  p === selectedColor ? "border-black" : "none"
                } `}
                style={{ backgroundColor: p }}
                onClick={() => setSelectedColor(p)}
                key={i}
              ></div>
            ))}
          </div>
        </div>
        <p className="text-sm font-base leading-.3 py-1">
          {singleProduct.description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between items-center py-3 gap-4">
          <div>
            <TbTruckDelivery
              size={34}
              className="p-2 bg-green-100 bg-opacity-45 rounded-full"
            />
            <p className="text-xs font-bold">Free Delivery</p>
          </div>
          <div>
            <TbReplace
              size={32}
              className="p-2 bg-green-100 bg-opacity-45 rounded-full"
            />
            <p className="text-xs font-bold">30 days replacement</p>
          </div>
          <div>
            <MdSupportAgent
              size={32}
              className="p-2 bg-green-100 bg-opacity-45 rounded-full"
            />
            <p className="text-xs font-bold">Customer Support</p>
          </div>
          <div>
            <SiFsecure
              size={32}
              className="p-2 bg-green-100 bg-opacity-45 rounded-full"
            />
            <p className="text-xs font-bold">2 year Warranty</p>
          </div>
        </div>
        <hr className="h-1 text-black " />
        <p className="font-bold text-gray-500 text-sm">
          Brand : <span className="text-black">{singleProduct.company}</span>
        </p>
        <p className="font-bold text-gray-500 text-sm">
          Available :
          <span className="text-black">
            {singleProduct.stock > 0 ? "In Stock" : "Out Of Stock"}
          </span>
        </p>
        <p className="font-bold text-gray-500 text-sm">
          ID : <span className="text-black">{singleProduct.id}</span>
        </p>
        <CartProductCount
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />

        <ToastContainer />

        <div className="flex gap-3">
          <button
            className={`bg-[#233e28] w-28 font-bold text-white p-2 my-3 ${
              amount === singleProduct?.stock ? "bg-gray-300" : ""
            }`}
          >
            <p onClick={() =>{addToCart(singleProduct.id,amount,selectedColor,singleProduct),notify3()}}>Add To Cart</p>
            <ToastContainer />
          </button>
          <Link to="/cart">
            <button
              className={`bg-[#233e28] w-28 font-bold text-white p-2 my-3`}
              >
              Go to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
