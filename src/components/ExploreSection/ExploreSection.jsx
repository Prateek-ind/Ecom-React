import React from "react";
import ProductCard from "../ProductCard";
import Products from "../Products";

const ExploreSection = () => {
  return (
    <section className="w-full flex flex-col items-center px-4 lg:px-6 xl:px-8 mt-12 font-customFont uppercase">
      <div className="flex flex-col items-center gap-4">
        <p className="text-xs text-gray-900 font-light tracking-[2px]">Taste the variety of our premium snacks</p>
        <h2 className="text-3xl font-normal text-gray-700 tracking-widest">Explore our flavours</h2>
      </div>
      <Products/>
    </section>
  );
};

export default ExploreSection;
