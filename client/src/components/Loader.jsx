import {
  BarLoader,
  DoubleBubble,
  SlidingPebbles,
} from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

export const Loader = () => {
  return (
    <div className="w-screen h-80 flex items-center justify-center text-white py-10 bg-green-100 bg-opacity-60">
        <SlidingPebbles
      text={"Loading..."}
      bgColor={"#233e28"}
      center={false}
      width={"150px"}
      height={"150px"}
    />
    </div>
  );
};
