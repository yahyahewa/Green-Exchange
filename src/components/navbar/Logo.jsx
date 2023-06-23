import React from "react";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link className="text-xl" to="/">
      <span className="text-jade-600 font-bold text-2xl">G</span>
      <span className="hidden md:inline-block">reen</span>
      <span className="text-jade-600 font-bold text-2xl ml-2">E</span>
      <span className="hidden md:inline-block">xchange</span>
    </Link>
  );
}
