import React from "react";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <form className="mx-auto w-full max-w-[550px]">
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3">
            <div className="mb-5">
              <label
                htmlFor="from"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                From
              </label>
              <input
                type="text"
                name="from"
                id="from"
                placeholder="Enter pick-up point"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="guest"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            To
          </label>
          <input
            type="text"
            name="to"
            id="to"
            placeholder="Enter stop place"
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Date of Journey
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div>
          <Link
            className="group relative text-center block w-full overflow-hidden border-b-0 px-8 py-3 focus:outline-none focus:ring"
            to="/"
          >
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

            <span className="relative text-xl font-medium text-green-400 transition-colors group-hover:text-white">
               Search Bus
            </span>
          </Link>         
        </div>
      </form>
    </div>
  );
};

export default Forms;
