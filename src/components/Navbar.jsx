import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [toggle, settoggle] = useState(null);
  return (
    <div className={`py-6 flex justify-between items-center w-full`}>
      <div className="flex-1">
        <img src={logo} alt="logo" className="w-[124px] h-8" />
      </div>
      <div className="flex-1 sm:flex hidden">
        <ul className={`text-white w-full gap-8 flex items-center
          justify-end`}>
          {navLinks.map((link) => {
            return (
              <li key={link.id} className="font-normal text-[16px]">
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sm:hidden relative flex-1 justify-end 
      flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="cursor-pointer object-contain w-7 h-7"
          onClick={() => settoggle((prev) => !prev)}
        />
        <ul
          className={`text-white min-w-[140px] gap-8 items-center 
            justify-center flex-col ${toggle ? "flex" : "hidden"} 
            absolute top-10 right-0 bg-black-gradient z-10 p-6 
            rounded-xl sidebar`}
        >
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
