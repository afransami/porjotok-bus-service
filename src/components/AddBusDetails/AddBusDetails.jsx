import React, { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const AddBusDetails = () => {
  const handleUpload = (event) => {
    event.preventDefault();
    const form = event.target;
    const busName = form.busName.value;
    const busNumber = form.busNumber.value;
    const busCategory = form.busCategory.value;
    const busStartingPoint = form.busStartingPoint.value;
    const busEndingPoint = form.busEndingPoint.value;
    const date = form.date.value;

    const uploadBusDetails = {
      busName,
      busNumber,
      busCategory,
      busStartingPoint,
      busEndingPoint,
      date,
    };
    console.log(uploadBusDetails);

    fetch("http://localhost:5000/uploadBus", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(uploadBusDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
    toast.success("Successfully upload!");
  };
  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <Form onSubmit={handleUpload} className="space-y-4">
                <label
                  htmlFor="text"
                  className="block text-base font-medium text-[#07074D]"
                >
                  Bus Name
                </label>
                <input
                  type="text"
                  name="busName"
                  placeholder="Bus Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <label
                  htmlFor="text"
                  className="block text-base font-medium text-[#07074D]"
                >
                  Bus Number
                </label>
                <select
                  className="select select-bordered w-full max-w-7xl"
                  type="text"
                  required
                  name="busNumber"
                >
                  <option>ka-1234</option>
                  <option>kha-1234</option>
                </select>

                <label
                  htmlFor="text"
                  className="block text-base font-medium text-[#07074D]"
                >
                  Bus Category
                </label>
                <select
                  className="select select-bordered w-full max-w-7xl"
                  type="text"
                  required
                  name="busCategory"
                >
                  {/* <option disabled >Who shot first?</option> */}
                  <option>AC</option>
                  <option>Non-AC</option>
                  <option>Double Decker</option>
                  <option>Single Decker</option>
                </select>

                <label
                  htmlFor="text"
                  className="block text-base font-medium text-[#07074D]"
                >
                  Bus Starting Point
                </label>
                <select
                  className="select select-bordered w-full max-w-7xl"
                  type="text"
                  required
                  name="busStartingPoint"
                >
                  {/* <option disabled >Who shot first?</option> */}
                  <option>Bohoddarhat</option>
                  <option>Oxygen</option>
                  <option>Muradpur</option>
                  <option>2no Gate</option>
                  <option>GEC</option>
                  <option>Wasa</option>
                  <option>Tigerpass</option>
                  <option>Agrabad</option>
                  <option>Khatghor</option>
                  <option>Potenga</option>
                </select>

                <label
                  htmlFor="text"
                  className="block text-base font-medium text-[#07074D]"
                >
                  Bus Ending Point
                </label>
                <select
                  className="select select-bordered w-full max-w-7xl"
                  type="text"
                  required
                  name="busEndingPoint"
                >
                  {/* <option disabled >Who shot first?</option> */}
                  <option>Bohoddarhat</option>
                  <option>Oxygen</option>
                  <option>Muradpur</option>
                  <option>2no Gate</option>
                  <option>GEC</option>
                  <option>Wasa</option>
                  <option>Tigerpass</option>
                  <option>Agrabad</option>
                  <option>Khatghor</option>
                  <option>Potenga</option>
                </select>

                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Travel Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Travel Time
                  </label>
                   <input
                    type="time"
                    name="time"
                    id="time"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mt-4">
                  <button
                    className="group relative text-center block w-full overflow-hidden border-b-0 px-8 py-3 focus:outline-none focus:ring"
                    type="submit"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                    <span className="relative text-xl font-medium text-green-400 transition-colors group-hover:text-white">
                      Upload Bus Details
                    </span>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBusDetails;
