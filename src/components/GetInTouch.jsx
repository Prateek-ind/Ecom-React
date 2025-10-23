import React from "react";
import HeroShopButton from "./HeroSection/HeroShopButton";
import { Form } from "react-router";

const GetInTouch = () => {
  return (
    <section
      className="w-full flex flex-col items-center
     px-4 lg:px-6 xl:px-8 my-12 font-customFont bg-[#feffec] "
    >
      <div className="flex flex-col items-center text-center w-2/4">
        <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase mt-8">
          Get updates, offers & more
        </h3>
        <h2 className="text-3xl font-normal tracking-widest text-gray-800 uppercase mt-8">
          Stay in the loop
        </h2>
        <p className="font-thin text-sm text-gray-700 my-8">
          Be the first to know about new flavors, limited-time combos, and
          special discounts. No spam, just pure snack goodness straight to your
          inbox.
        </p>
        <Form className="flex gap-4">
          <input type="text" className="w-96 border px-4 py-2 " />
          <button
            className="px-16 py-2 font-lg
         font-customFont bg-[#63ce36] border border-[#80ad53] text-white hover:scale-105
         transition-all duration-500 hover:bg-gradient-to-l  hover:from-green-500 hover:to-green-800
         hover:text-white"
          >
            Subscribe
          </button>
        </Form>
      </div>
    </section>
  );
};

export default GetInTouch;
