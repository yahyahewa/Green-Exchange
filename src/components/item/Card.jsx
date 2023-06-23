import React from "react";

function Card({ icone, userName, datetime, image, productName }) {
  return (
    <article className="w-[300px] ">
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
          <img src={icone} className="w-[40px] rounded-full" />
          <div className="flex flex-col justify-end ml-2 capitalize">
            <p className="text-base">{userName}</p>
            <span
              className="text-[10px] bg-yellow-300
           w-[70px] text-center pt-[3px]
            text-yellow-900 rounded-lg"
            >
              donated
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span className="border text-sm py-1 px-2 rounded-md">
            {datetime}
          </span>
        </div>
      </div>
      {/* ---------------------------------------------- */}
      <div className="w-full h-[200px] mt-1 overflow-hidden rounded-md">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      {/* --------------------------------------------------- */}
      <p className="text-lg p-1">{productName}</p>
    </article>
  );
}

export default Card;
