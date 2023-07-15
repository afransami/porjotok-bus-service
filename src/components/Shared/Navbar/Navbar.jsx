import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [navColor, setNavColor] = useState("transparent");

  const { user, logOut } = useContext(AuthContext);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#ffff") : setNavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    toast.success("OOPS log out!");
  };

  const NavOptions = (
    <>
      <li>
        <Link
          className="group relative inline-block overflow-hidden border-b-4 px-8 py-3 focus:outline-none focus:ring"
          to="/"
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

          <span className="relative font-medium text-green-400 transition-colors group-hover:text-white">
            Home
          </span>
        </Link>

        {/* <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn-outline btn-error border-0 border-b-4 bg-gradient-to-r from-neutral-600 via-green-600 to-neutral-600 rounded bg-opacity-30"
              : "default"
          }
        >
          Home
        </NavLink> */}
      </li>
      <li>
        <Link
          className="group relative inline-block overflow-hidden border-b-4 px-8 py-3 focus:outline-none focus:ring"
          to="/bus-reservation"
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

          <span className="relative font-medium text-green-400 transition-colors group-hover:text-white">
            Bus Reservation
          </span>
        </Link>

        {/* <NavLink
          to="/bus-reservation"
          className={({ isActive }) =>
            isActive
              ? "btn-outline btn-error border-0 border-b-4 bg-gradient-to-r from-neutral-600 via-green-600 to-neutral-600 rounded bg-opacity-30"
              : "default"
          }
        >
          Bus Reservation
        </NavLink> */}
      </li>
      <li>
        <Link
          className="group relative inline-block overflow-hidden border-b-4 px-8 py-3 focus:outline-none focus:ring"
          to="/contactUs"
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

          <span className="relative font-medium text-green-400 transition-colors group-hover:text-white">
            Contact Us
          </span>
        </Link>

        {/* 
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive
              ? "btn-outline btn-error border-0 border-b-4 bg-gradient-to-r from-neutral-600 via-green-600 to-neutral-600 rounded bg-opacity-30"
              : "default"
          }
        >
          Contact Us
        </NavLink> */}
      </li>
    
    </>
  );

  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundColor: navColor,
          transition: "all 1s",
        }}
        className="navbar fixed z-10  h-22 mx-auto container rounded-lg flex justify-between"
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
          <div className="uppercase lg:font-extrabold lg:tracking-widest text-center mx-4 text-green-400">
            <Link>
              <p className="scale-110 text-xl font-serif ">Porjotok </p>
              <p className="lg:scale-125 scale-110 font-extralight font-serif ">
                Bus Service
              </p>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex items-center justify-between">
          <ul className="menu menu-horizontal gap-8 text-xl">{NavOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className=" ">
                  <div className="avatar mr-4">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto"
                >
                  <li>
                    <Link
                      className="group relative inline-block overflow-hidden border-b-4 px-4 py-3 focus:outline-none focus:ring"
                      to="/dashboard"
                    >
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                      <span className="relative font-medium text-green-400 transition-colors group-hover:text-white">
                      Dashboard
                      </span>
                    </Link>

                    {/* <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "btn-outline btn-error border-0 border-b-4 bg-gradient-to-r from-neutral-600 via-green-600 to-neutral-600 rounded bg-opacity-30"
                          : "default"
                      }
                    >
                      Dashboard
                    </NavLink> */}
                  </li>
                  <li>
                  <Link
                      className="group relative inline-block overflow-hidden border-b-4 px-4 py-3 focus:outline-none focus:ring"
                      onClick={handleLogOut}
                    >
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                      <span className="relative font-medium text-green-400 transition-colors group-hover:text-white">
                      Log Out
                      </span>
                    </Link>                   
                    
                    {/* <button onClick={handleLogOut}>Log Out</button> */}
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              className="group relative inline-block overflow-hidden border-b-4 px-8 py-3 focus:outline-none focus:ring"
              to="/login"
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

              <span className="relative font-medium text-xl text-green-400 transition-colors group-hover:text-white">
                Login
              </span>
            </Link>

            // <Link to="/bus-reservation">
            //   <button className="btn btn-outline btn-error border-0 border-b-4 bg-gradient-to-r from-neutral-600 via-green-600 to-neutral-600 rounded bg-opacity-30">
            //     login
            //   </button>
            // </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
