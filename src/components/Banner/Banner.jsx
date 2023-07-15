import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaBusAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdWifiCalling3 } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <section className=" relative bg-[url(https://img.freepik.com/free-photo/traffic-vehicle-urban-reflections-city_1112-973.jpg?w=740&t=st=1688746280~exp=1688746880~hmac=c7b0c4eb2cb49318784d471c5884476705c637fe7aefe268eb0dd4e5d4b60eab)] bg-cover lg:h-[700px] h-auto bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r w-full from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>

        <div className="relative -top-1/4 max-w-screen-xl py-32 px-4 sm:px-6 lg:left-52 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-start font-extrabold sm:text-5xl">
              <span className="text-white"> Let us find your</span>

              <strong className="block text-start font-extrabold text-green-500">
                Forever Home
              </strong>
            </h1>

            <p className="mt-4 text-start max-w-lg sm:text-xl/relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className=" mt-4 flex justify-start items-center gap-4">
              {/* <Link>
                <button
                  className="btn btn-outline text-white bg-red-600 px-2" >
                  Get Started                  
                </button>
              </Link> */}

              <div>
              <Link
                className="group relative inline-block overflow-hidden border-b-4 px-8 py-3 focus:outline-none focus:ring"
                to="/"
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                <span className="relative font-medium text-green-400 transition-colors group-hover:text-white">
                  Get Started
                </span>
              </Link>
              </div>

              
              <div>
              <Link
                className="group relative inline-block overflow-hidden border-b-4 px-8 py-3 focus:outline-none focus:ring"
                to="/"
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>

                <span className="relative font-medium text-green-400 transition-colors group-hover:text-white">
                  Get Started
                </span>
              </Link>
              </div>

              {/* <Link>
                <button
                  className="btn btn-outline border-white text-white transition-transform hover:bg-red-600 px-2 " >
                  Get Started                  
                </button>
              </Link> */}

              {/* <Link>
                <button
                  className="group relative inline-block overflow-hidden border border-white px-8 py-2 focus:outline-none focus:ring"
                  href="/download"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transition-all group-hover:h-full group-active:bg-red-600"></span>

                  <span className="relative text-sm font-medium text-white transition-colors group-hover:text-white">
                    Get Started
                  </span>
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative -top-20">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <ImLocation2 className="text-5xl text-green-500"></ImLocation2>
                <h2 className="title-font font-medium text-3xl text-white ">
                  46
                </h2>
                <p className="leading-relaxed">Stop Places</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <MdWifiCalling3 className="text-5xl text-green-500"></MdWifiCalling3>
                <h2 className="title-font font-medium text-3xl text-white">
                  1.3K
                </h2>
                <p className="leading-relaxed">Tourist</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <FaClock className="text-5xl text-green-500"></FaClock>
                <h2 className="title-font font-medium text-3xl text-white">
                  30
                </h2>
                <p className="leading-relaxed">Daily Trip</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <FaBusAlt className="text-5xl text-green-500"></FaBusAlt>
                <h2 className="title-font font-medium text-3xl text-white  ">
                  1
                </h2>
                <p className="leading-relaxed">Per Hour</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
