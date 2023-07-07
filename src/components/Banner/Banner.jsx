// import React from 'react';
// import { Link } from 'react-router-dom';

// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import './styles.css';

// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import { FaClock, FaBusAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdWifiCalling3 } from "react-icons/md";

const Banner = () => {
  return (
    // {/* <div className="">
    //       <Swiper
    //         pagination={true}
    //         slidesPerView={1}
    //         modules={[Pagination, Autoplay]}
    //         className="mySwiper"
    //         onSlideChange={() => console.log("slide change")}
    //         onSwiper={(swiper) => console.log(swiper)}
    //         autoplay
    //         loop={true}
    //       >
    //         <SwiperSlide>
    //           <div
    //             className="hero lg:h-[100vh] h-[70vh] w-auto"
    //             style={{
    //               backgroundImage: `url(https://i.ibb.co/SfCZ7Jg/Whats-App-Image-2023-06-04-at-13-57-33.jpg)`,
    //               backgroundPosition: "center",
    //               backgroundSize: "cover",
    //             }}
    //           >
    //             <div className="container mx-auto pl-10">
    //               <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
    //                 <div className="max-w-md px-5 lg:px-0 ">
    //                   <h1 className="mb-5 hero-heading lg:text-5xl text-xl  font-bold">
    //                     Lifelong Learning:
    //                   </h1>
    //                   <p className="text-gray-200 mb-3 lg:text-xl md:text-lg">
    //                     Music is a lifelong journey of learning and growth.
    //                     Practicing music allows individuals to continually challenge
    //                     themselves, set new goals, and expand their musical
    //                     horizons. It fosters a lifelong love and appreciation for
    //                     music.
    //                   </p>
    //                   <Link to="/blog">
    //                     <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
    //                       See more
    //                     </button>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <div
    //             className="hero lg:h-[92vh] h-[70vh] w-auto"
    //             style={{
    //               backgroundImage: `url(https://i.ibb.co/LdVMLTZ/two-sound-engineers-working-together.jpg)`,
    //               backgroundPosition: "center",
    //               backgroundSize: "cover",
    //             }}
    //           >
    //             <div className="container mx-auto pl-10">
    //               <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
    //                 <div  className="max-w-md px-5 lg:px-0">
    //                   <h1 className="mb-5 hero-heading lg:text-5xl text-xl font-bold capitalize">
    //                     Creativity and Artistry:
    //                   </h1>
    //                   <p className="text-gray-200 mb-3 lg:text-xl md:text-lg">
    //                     Regular practice nurtures musicians' creativity and
    //                     encourages them to explore new musical ideas and styles. It
    //                     allows for improvisation, experimentation, and the
    //                     development of a unique musical voice.
    //                   </p>
    //                   <Link to="/blog">
    //                     <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
    //                       See more
    //                     </button>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <div
    //             className="hero lg:h-[92vh] h-[70vh] w-auto"
    //             style={{
    //               backgroundImage: `url(https://i.ibb.co/JkK6yJ0/teaching-how-read-piece-sheet-music-hispanic-kid-learning-play-piano-with-help-male-music-teacher-du.jpg)`,
    //               backgroundPosition: "center",
    //               backgroundSize: "cover",
    //             }}
    //           >
    //             <div className="container mx-auto pl-10">
    //               <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
    //                 <div className="max-w-md px-5 lg:px-0">
    //                   <h1 className="mb-5 hero-heading lg:text-5xl text-xl font-bold">
    //                     Expressive Communication:
    //                   </h1>
    //                   <p className="text-gray-200 mb-3 lg:text-xl md:text-lg">
    //                     Music is a powerful form of self-expression. By practicing
    //                     music, individuals learn to convey emotions and tell stories
    //                     through their playing or singing. It allows musicians to
    //                     communicate and connect with others on a deeper level.
    //                   </p>
    //                   <Link to="/blog">
    //                     <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
    //                       See more
    //                     </button>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //       </Swiper>
    //     </div> */}

    //     <>
    //     <Swiper
    //       spaceBetween={30}
    //       centeredSlides={true}
    //       autoplay={{
    //         delay: 2500,
    //         disableOnInteraction: false,
    //       }}
    //       pagination={{
    //         clickable: true,
    //       }}
    //       navigation={true}
    //       modules={[Autoplay, Pagination, Navigation]}
    //       className="mySwiper"
    //     >
    //       <SwiperSlide><img src={bus1} alt="" /></SwiperSlide>
    //       <SwiperSlide>Slide 2</SwiperSlide>
    //       <SwiperSlide>Slide 3</SwiperSlide>

    //     </Swiper>
    //   </>

    <div>
      <section className=" relative bg-[url(https://img.freepik.com/free-photo/traffic-vehicle-urban-reflections-city_1112-973.jpg?w=740&t=st=1688746280~exp=1688746880~hmac=c7b0c4eb2cb49318784d471c5884476705c637fe7aefe268eb0dd4e5d4b60eab)] bg-cover lg:h-[700px] h-auto bg-center bg-no-repeat">
        {/* <div className="absolute inset-0 bg-white/45 from-white/95 to-white/25 ltr:bg-gradient-to-r rtl:bg-gradient-to-l"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r w-full from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>

        <div className="relative -top-1/4 max-w-screen-xl py-32 px-4 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-start font-extrabold sm:text-5xl">
              <span className="text-white"> Let us find your</span>

              <strong className="block text-start font-extrabold text-red-600">
                Forever Home.
              </strong>
            </h1>

            <p className="mt-4 text-start max-w-lg sm:text-xl/relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="navbar-end mt-4 flex justify-center items-center gap-4">
              <Link>
                <a
                  className="group relative inline-block overflow-hidden border border-indigo-600 px-4 py-2 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

                  <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                    Get Started
                  </span>
                </a>
              </Link>
              <Link>
                <a
                  className="group relative inline-block overflow-hidden border border-indigo-600 px-4 py-2 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

                  <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                    Get Started
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative -top-20 z-50">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <ImLocation2 className="text-5xl text-indigo-500"></ImLocation2>
                <h2 className="title-font font-medium text-3xl text-white ">
                  46
                </h2>
                <p className="leading-relaxed">Stop Places</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <MdWifiCalling3 className="text-5xl text-indigo-500"></MdWifiCalling3>
                <h2 className="title-font font-medium text-3xl text-white">
                  1.3K
                </h2>
                <p className="leading-relaxed">Tourist</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <FaClock className="text-5xl text-indigo-500"></FaClock>
                <h2 className="title-font font-medium text-3xl text-white">
                  30
                </h2>
                <p className="leading-relaxed">Daily Trip</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-10 rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center">
                <FaBusAlt className="text-5xl text-indigo-500"></FaBusAlt>
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

    // <Swiper
    //   pagination={{
    //     dynamicBullets: true,
    //     bulletClass: `swiper-pagination-bullet`,
    //   }}
    //   loop={true}
    //   autoplay={{
    //     delay: 6000,
    //     disableOnInteraction: false,
    //   }}
    //   modules={[Autoplay, Pagination]}
    //   effect="fade"
    //   speed={3000}
    //   className="mySwiper"
    // >
    //   <SwiperSlide
    //     style={{
    //       backgroundImage:
    //         "url(https://i.ibb.co/bFgGDQR/Whats-App-Image-2023-06-04-at-13-57-354h.jpg)",
    //       backgroundPosition: "center",
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //     }}
    //   >
    //     <div className="bg-black bg-opacity-50">
    //       <div className="main-container py-48 text-white">
    //         <h2 className="text-5xl lg:block hidden font-bold">
    //           Discover the{" "}
    //           <span className="sec-title-top text-prime">Harmony</span> Within
    //           You, <br />
    //           Join Our Music School Today
    //         </h2>
    //         <h2 className="text-3xl font-bold lg:hidden">
    //           Discover the{" "}
    //           <span className="sec-title-top text-prime">Harmony</span> Within
    //           You, Join Our Music School Today
    //         </h2>

    //         <p className="sec-desc py-6 text-lg hidden lg:block">
    //           Join our Music Academy and Ignite Your Love for Music - <br />
    //           Elevate Your Skills with World-Class Instruction.
    //         </p>
    //         <p className="sec-desc py-6 text-lg lg:hidden block">
    //           Join our Music Academy and Ignite Your Love for Music - Elevate
    //           Your Skills with World-Class Instruction.
    //         </p>
    //         <div className="flex space-x-3">
    //           <button className="bg-prime text-white rounded-sm md:py-3 py-1.5 px-3 md:px-8 md:text-lg sec-desc hover-bg-btn">
    //             Learn Music
    //           </button>
    //           <button className="border border-[#FF7703] text-prime rounded-sm py-1.5 px-3 md:py-3 md:px-8 md:text-lg sec-desc hover-bg-btn">
    //             Become Instructor
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide
    //     style={{
    //       backgroundImage: "url(https://i.ibb.co/qnX1hbP/musicslide2.jpg)",
    //       backgroundPosition: "center",
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //     }}
    //   >
    //     <div className="bg-black bg-opacity-50">
    //       <div className="main-container py-48 text-white">
    //         <h2 className="text-5xl lg:block hidden font-bold">
    //           Unleash Your{" "}
    //           <span className="sec-title-top text-prime">
    //             <span className="sec-title-top text-prime">Musical</span>{" "}
    //           </span>{" "}
    //           Potential
    //           <br /> at Our Premier Music School
    //         </h2>
    //         <h2 className="text-3xl font-bold lg:hidden">
    //           Unleash Your{" "}
    //           <span className="sec-title-top text-prime">Musical</span>{" "}
    //           Potential at Our Premier Music School
    //         </h2>

    //         <p className="sec-desc py-6 text-lg hidden lg:block">
    //           Experience the Power of Music - Enroll Today at our Esteemed{" "}
    //           <br></br>Music School and Let Your Melodies Soar.
    //         </p>
    //         <p className="sec-desc py-6 text-lg block lg:hidden">
    //           Experience the Power of Music - Enroll Today at our Esteemed Music
    //           School and Let Your Melodies Soar.
    //         </p>
    //         <div className="flex space-x-3">
    //           <button className="bg-prime text-white rounded-sm md:py-3 py-1.5 px-3 md:px-8 md:text-lg sec-desc hover-bg-btn">
    //             Learn Music
    //           </button>
    //           <button className="border border-[#FF7703] text-prime rounded-sm py-1.5 px-3 md:py-3 md:px-8 md:text-lg sec-desc hover-bg-btn">
    //             Become Instructor
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide
    //     style={{
    //       backgroundImage: "url(https://i.ibb.co/hM1KdJW/musicslide3.jpg)",
    //       backgroundPosition: "center",
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //     }}
    //   >
    //     <div className="bg-black bg-opacity-50">
    //       <div className="main-container py-48 text-white">
    //         <h2 className="text-5xl lg:block hidden font-bold">
    //           Immerse Yourself in a{" "}
    //           <span className="sec-title-top text-prime">Vibrant </span>
    //           Community
    //           <br /> of Music Lovers and Lifelong Learners{" "}
    //         </h2>
    //         <h2 className="text-3xl font-bold lg:hidden">
    //           Immerse Yourself in a{" "}
    //           <span className="sec-title-top text-prime">Vibrant </span>
    //           Community of Music Lovers and Lifelong Learners{" "}
    //         </h2>

    //         <p className="sec-desc py-6 text-lg hidden lg:block">
    //           Unlock Your Musical Talents with our Premier Music School - <br />
    //           Where Passion Meets Excellence.
    //         </p>
    //         <p className="sec-desc py-6 text-lg block lg:hidden">
    //           Unlock Your Musical Talents with our Premier Music School - Where
    //           Passion Meets Excellence.
    //         </p>
    //         <div className="flex space-x-3">
    //           <button className="bg-prime text-white rounded-sm md:py-3 py-1.5 px-3 md:px-8 md:text-lg sec-desc hover-bg-btn">
    //             Learn Music
    //           </button>
    //           <button className="border border-[#FF7703] text-prime rounded-sm py-1.5 px-3 md:py-3 md:px-8 md:text-lg sec-desc hover-bg-btn">
    //             Become Instructor
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </SwiperSlide>
    // </Swiper>
  );
};

export default Banner;
