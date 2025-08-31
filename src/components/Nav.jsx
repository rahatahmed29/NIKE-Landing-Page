import React from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
function Nav() {
  return (
    <header className="padding-x py-8  absolute z-10 w-full">
      <nav
        className="flex justify-between
      items-center max-container"
      >
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[130px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex gap-16 justify-center items-center max-md:hidden  ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat text-lg text-slate-gray leading-normal">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <img
            
            src={hamburger}
            width={25}
            height={25}
            alt="hamburger-icon"
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
