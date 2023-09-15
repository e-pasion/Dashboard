import React from "react";
import { BiSearch, BiStats, BiUser,BiWorld } from "react-icons/bi";

function Navbar() {
  return (
    <div className="w-full bg-transparent py-3 px-10 text-white text-sm flex items-center justify-between fixed top-0 pl-80">
      <h1>Dashboard</h1>

      <div className="flex items-center space-x-3">
        <div class="relative w-60">
          <input
            type="search"
            className="block py-2.5 px-5 w-full z-20 placeholder-white bg-white bg-opacity-60 rounded-full "
            placeholder="Search..."
          />
          <button
            type="submit"
            class="absolute top-0 right-0 h-10 py-2.5 px-5 text-sm font-medium bg-transparent"
          >
            <BiSearch size={20} />
            <span class="sr-only">Search</span>
          </button>
        </div>
        <div className="flex space-x-6">
        <BiStats size={25}/>
        <BiWorld size={25}/>
        <BiUser size={25}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
