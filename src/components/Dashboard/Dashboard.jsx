import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AddBusDetails from "../AddBusDetails/AddBusDetails";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        {/* <div className="w-full navbar bg-base-300"> */}
        <div className="w-full">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          

          {/* <div className=" h-16 w-72 place-content-center rounded-lg text-xs uppercase lg:font-extrabold lg:tracking-widest text-center mx-4 text-green-400">
          <Link>
            <p className="scale-110 text-xl font-serif ">Porjotok </p>
            <p className="lg:scale-125 scale-110 font-extralight font-serif ">
              Bus Service
            </p>
          </Link>
        </div> */}

          {/* <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              Navbar menu content here
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div> */}
        </div>
        {/* Page content here */}
        <div className="mx-10 mt-10">
          <p>main dashboard</p>
          <AddBusDetails></AddBusDetails>
        </div>
        {/* <div className="flex">
          <div className="w-[20%] h-[100vh] bg-green-400 border-2"><p></p></div>
          <div className="w-[80%] h-[100vh] bg-green-100 border-2"></div>
        </div> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

       <Sidebar></Sidebar>


        {/* <ul className="menu p-4 w-80 h-full bg-base-200">
          Sidebar content here
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Dashboard;
