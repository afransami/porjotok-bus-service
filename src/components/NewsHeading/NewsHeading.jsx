import React from "react";
import Marquee from "react-fast-marquee";

const NewsHeading = () => {
  return (
    <div>
      <div className="flex h-12 rounded-lg bg-opacity-50 container mx-auto">
        <button className="btn bg-green-500 border-0 text-lg text-white text-bold">Latest</button>
        <Marquee className="text-bold lg:text-2xl bg-gray-300 sm:text-xl text-red-500" speed={50}>
          মাননীয় জেলা প্রশাসক মহোদয়ের উদ্যোগে চট্টগ্রাম বাসীর জন্য পর্যটক বাস সার্ভিসে আপনাকে স্বাগতম। 
        </Marquee>
      </div>
    </div>
  );
};

export default NewsHeading;
