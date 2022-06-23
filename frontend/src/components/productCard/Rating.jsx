import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const Rating = ({ rating, numReviews }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index}>
            {rating > index ? (
              <AiTwotoneStar color="#ffc107" />
            ) : (
              <AiOutlineStar />
            )}
          </span>
        );
      })}
      <span className="mx-2">From {numReviews}</span>
    </>
  );
};

export default Rating;
