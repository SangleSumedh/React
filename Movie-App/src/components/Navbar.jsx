import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-slate-700 text-white flex justify-between p-2 items-center">
        <div className="text-2xl text-red-700 font-bold">
          <Link to="/">Movie App</Link>
        </div>
        <div className="font-semibold">
          <Link to="/" className="m-2">
            Home
          </Link>
          <Link to="/favorites" className="m-2">
            Favorites
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
