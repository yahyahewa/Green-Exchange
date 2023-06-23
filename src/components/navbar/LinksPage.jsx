import React from "react";
import { Link } from "react-router-dom";
function LinksPage({ getStared, isOpen }) {
  isOpen = true;
  return (
    <>
      <div
        className={`capitalize flex flex-col lg:flex-row w-full bg-white
         gap-y-3 pt-10 lg:p-0 items-center 
         justify-between lg:w-[25%]  absolute lg:relative
        ${isOpen ? "-ml-[100%] lg:ml-0" : "ml-0"}`}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/item:id"}>item</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/fq"}>F&Q</Link>
      </div>
      <Link
        to={"/getstarted"}
        className="capitalize bg-jade-600 text-white px-3 py-2 rounded-sm"
      >
        {getStared}
      </Link>
      <i className="fa-solid fa-bars text-slate-600 fa-2xl lg:hidden"></i>
    </>
  );
}

export default LinksPage;
