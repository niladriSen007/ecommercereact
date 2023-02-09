import {  FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar,AiFillStar } from "react-icons/ai";

const Stars = ({stars}) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        // debugger;
        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <AiFillStar size={16} className="text-yellow-600" />
            ) : stars >= number ? (
              <FaStarHalfAlt size={16} className="text-yellow-600" />
            ) : (
              <AiOutlineStar size={16} className="text-yellow-600" />
            )}
          </span>
        );
      });
  return (
    <div className="flex gap-1 justify-start items-center">
            {ratingStar}
    </div>
  )
}

export default Stars