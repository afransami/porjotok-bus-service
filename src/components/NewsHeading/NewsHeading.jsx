import React from "react";
import Marquee from "react-fast-marquee";

const NewsHeading = () => {
  return (
    <div>
      <div className="flex h-12 rounded-lg bg-opacity-50 w-3/4 container mx-auto">       
        <Marquee className="text-bold rounded-xl lg:text-2xl bg-green-500 sm:text-xl text-white" speed={50}>
           মাননীয় জেলা প্রশাসক মহোদয়ের উদ্যোগে চট্টগ্রাম বাসীর জন্য পর্যটক বাস সার্ভিসে আপনাকে স্বাগতম।
        </Marquee>
      </div>
    </div>
  );
};

export default NewsHeading;
