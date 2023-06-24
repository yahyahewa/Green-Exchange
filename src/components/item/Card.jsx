

function Card({ icone, userName, datetime, image, productName }) {
  return (
    <article className="w-[300px] ">
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
        <img
              className="w-[40px] sm:w-8 sm:h-8 lg:w-9 lg:h-9  mask mask-circle object-cover object-center "
              src={icone}
              alt=""
            />
         
          <div className="flex flex-col justify-end ml-2 gap-1 capitalize">
            <p className="text-base">{userName}</p>
            <span
              className="text-[10px] bg-green-300/20
           w-[70px] text-center py-1
            text-green-900 font-bold  rounded-full"
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
      <div className="w-full h-[300px] mt-1 overflow-hidden rounded-md">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      {/* --------------------------------------------------- */}
      <p className="text-2xl font-bold p-1">{productName}</p>
    </article>
  );
}

export default Card;
