import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import NewsHeading from "../../NewsHeading/NewsHeading";

const Navbar = () => {
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#32a852") : setNavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

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
    <div className="flex flex-col ">
      <div
        style={{
          backgroundColor: navColor,
          transition: "all 1s",
        }}
        className="navbar fixed z-10 mt-4  h-22 mx-auto container rounded-lg flex justify-between"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-2xl  lg:hidden ">
              <HiMenuAlt3></HiMenuAlt3>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {NavOptions}
            </ul>
          </div>
          <div className="uppercase lg:font-extrabold lg:tracking-widest text-center mx-4">
            <Link>
              <p className="scale-110 text-xl font-serif text-white">
                Porjotok{" "}
              </p>
              <p className="lg:scale-125 scale-110 font-extralight font-serif text-white">
                Bus Service
              </p>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex items-center justify-between">
          <ul className="menu menu-horizontal px-1 text-white text-xl">
            {NavOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <Link>
            <button className="btn btn-outline text-white bg-red-500 px-2">
              Get Started
            </button>
          </Link>

          {/* <Link>
          <button
            className="group relative inline-block overflow-hidden border border-white px-8 py-2 focus:outline-none focus:ring"
            href="/download"
          >
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transition-all group-hover:h-full group-active:bg-red-600"></span>

            <span className="relative text-sm font-medium text-white transition-colors group-hover:text-white">
              Login
            </span>
          </button>
        </Link> */}
        </div>
      </div>

      <div className="mt-28 z-30 fixed text-white">
      <NewsHeading></NewsHeading>
      </div>
    </div>
  );
};

export default Navbar;
