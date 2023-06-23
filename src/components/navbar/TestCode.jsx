import React from "react";
import { Link } from "react-router-dom";
import LinksPage from "./LinksPage";
import Logo from "./Logo";
function TestCode({ isSearch }) {
  isSearch = false;
  return (
    <nav
      className={`nav w-full m-auto px-2 py-1 flex items-center
       justify-between `}
    >
      <Logo />
      <div
        className={`w-[50%] md:w-[60%] lg:w-[40%] flex justify-center items-center
          h-11 overflow-hidden rounded-sm ${
            isSearch ? `bg-slate-100` : `bg-white`
          }`}
      >
        {isSearch ? (
          <input
            type="search"
            className="w-[90%] px-2 py-1 bg-slate-100"
            placeholder="Search with me"
          />
        ) : (
          ""
        )}
        {isSearch ? <i className="fa-solid fa-magnifying-glass"></i> : ""}
      </div>
      <LinksPage getStared={"Get Stared"} />
    </nav>
  );
}

export default TestCode;
