import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <div className="grid  w-72 place-content-center rounded-lg  text-xs uppercase lg:font-extrabold lg:tracking-widest text-center mx-4 text-green-400">
          <Link>
            <p className="scale-110 text-xl font-serif ">Porjotok </p>
            <p className="lg:scale-125 scale-110 font-extralight font-serif ">
              Bus Service
            </p>
          </Link>
        </div>

        {/* <span className="grid h-10 w-72 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span> */}

        <ul className="mt-6 space-y-1">
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "block rounded-lg px-4 bg-gray-100 py-2 text-sm font-medium text-gray-700"
                  : "default"
              }
            >
              General
            </NavLink>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Teams </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      isActive
                        ? "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        : "default"
                    }
                  >
                    Banned Users
                  </NavLink>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Calendar
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <NavLink
              href="#"
              className={({ isActive }) =>
                isActive
                  ? "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  : "default"
              }
            >
              Add Bus Details
            </NavLink>
          </li>

          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Invoices
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Account </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="/logout">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={user?.photoURL}
            alt=""
          />
          <div>
            <p className="text-xs">
              <strong className="block font-medium">{user?.displayName}</strong>

              <span> {user?.email} </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
