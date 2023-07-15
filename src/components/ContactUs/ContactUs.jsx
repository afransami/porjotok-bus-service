import React from "react";

const ContactUs = () => {
  return (
    <div className="mt-52 mx-auto container">
      <div className="bg-white h-auto flex justify-center">
        <div className="bg-white shadow-lg m-8 w-1/2 grid lg:flex justify-center rounded-xl">
          <div className="lg:w-1/3 bg-blue-900 rounded-xl ">
            <div className="text-white m-6 font-medium "> Contact Information </div>
            <div className="text-white m-6 text-sm flex ">
              <ion-icon
                name="location-sharp"
                className="m-2 text-pink-500 hover:text-white"
              ></ion-icon>
              <div> 4329 Travis Street, Red Fort L.A., 34950 </div>
            </div>
            <div className="text-white m-6 text-sm flex ">
              <ion-icon
                name="call-outline"
                className="m-2 text-pink-500 hover:text-white"
              ></ion-icon>
              <div> +1 987-6543-210 </div>
            </div>
            <div className="text-white m-6 text-sm flex ">
              <ion-icon
                name="globe-outline"
                className="m-2 text-pink-500 hover:text-white"
              ></ion-icon>
              <div> www.tailwind.org </div>
            </div>
            <div className="flex justify-center m-2 ">
              <ion-icon
                name="logo-facebook"
                className="m-2 text-pink-500 hover:text-white"
              ></ion-icon>
              <ion-icon
                name="logo-linkedin"
                className="m-2 text-pink-500 hover:text-white"
              ></ion-icon>
              <ion-icon
                name="logo-twitter"
                className="m-2 text-pink-500 hover:text-white"
              ></ion-icon>
              <ion-icon
                name="logo-reddit"
                className="m-2 text-pink-500 hover:text-white"
              ></ion-icon>
            </div>
            <div className="flex items-center justify-center ">
              <div className="bg-pink-500 rounded-full h-20 w-20 "> </div>
            </div>
          </div>
          <div className="w-3/4 lg:w-2/3 ">
            <div className="text-lg font-medium text-blue-900 m-6 ">
              Drop a Message
            </div>
            <div className=" flex lg:flex-row flex-col">
              <div className="m-6">
                <p className="text-sm text-stone-400">First Name</p>{" "}
                <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
                <p className="text-sm text-stone-400 mt-6">E-mail</p>{" "}
                <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
              </div>
              <div className="m-6 ">
                <p className="text-sm text-stone-400">Last Name</p>{" "}
                <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
                <p className="text-sm text-stone-400 mt-6">Phone</p>{" "}
                <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
              </div>
            </div>
            <div className="m-6 items-end ">
              <p className="text-sm text-stone-400 mt-6 ">Message</p>{" "}
              <input className="border-b-2 border-stone-400 text-stone-400 w-36" />
              <div className=" flex ">
                <div className="m-4 mt-6 pl-4 pt-1 pb-1 pr-4 bg-blue-900 rounded text-white font-medium w-36 ">
                  {" "}
                  Send Message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default ContactUs;
