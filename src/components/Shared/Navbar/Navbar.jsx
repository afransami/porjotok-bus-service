import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>   
      <li>
        <Link to="/bus-reservation">Bus Reservation</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>      
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-base-100 bg-opacity-30 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavOptions}
          </ul>
        </div>
        <div className="uppercase lg:font-extrabold lg:tracking-widest  text-center">
          <Link>
            <p className="scale-110 text-xl font-serif text-indigo-600">Porjotok </p>
            <p className="lg:scale-125 scale-110 font-extralight font-serif">
              Bus Service
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
      </div>
      {/* <div className="navbar-end">
        <Link>
          <a
            className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-2 focus:outline-none focus:ring"
            href="/download"
          >
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
              Login
            </span>
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
