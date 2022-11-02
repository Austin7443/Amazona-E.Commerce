import React from "react";
import { BsStarFill } from "react-icons/bs";
import { IoIosStarHalf } from "react-icons/io";
import { ImStarEmpty } from "react-icons/im";

export const Rating = ({ numReviews, rating, caption }) => {
  return (
    <div className="rating">
      <span>
        {rating >= 1 ? (
          <BsStarFill />
        ) : rating >= 0.5 ? (
          <IoIosStarHalf />
        ) : (
          <ImStarEmpty />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <BsStarFill />
        ) : rating >= 1.5 ? (
          <IoIosStarHalf />
        ) : (
          <ImStarEmpty />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <BsStarFill />
        ) : rating >= 2.5 ? (
          <IoIosStarHalf />
        ) : (
          <ImStarEmpty />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <BsStarFill />
        ) : rating >= 3.5 ? (
          <IoIosStarHalf />
        ) : (
          <ImStarEmpty />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <BsStarFill />
        ) : rating >= 4.5 ? (
          <IoIosStarHalf />
        ) : (
          <ImStarEmpty />
        )}
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{" " + numReviews + " reviews"}</span>
      )}
    </div>
  );
};
