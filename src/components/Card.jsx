import React from "react";

const Card = ({ num, color, text, author, likes }) => {
  return (
    <div className="w-full px-4 py-2 flex justify-evenly items-center rounded-lg border border-grayish text-white mt-4">
      <div>{num}</div>

      <div className={`w-24 h-16 bg-${color} rounded-lg`}></div>

      <div>{text}</div>
      <div>{author}</div>
      <div>{likes}</div>
    </div>
  );
};

export default Card;
