import React from "react";
import ProductCard from "../ProductCard";
import Products from "../Products";

const ExploreSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-6 xl:px-8 mt-8 font-customFont">
      <div className="flex flex-col items-center gap-4">
        <p className="text-md text-gray-900 font-thin tracking-wide">Taste the variety of our premium snacks</p>
        <h2 className="text-5xl font-light tracking-widest">Explore our flavours</h2>
      </div>
      <Products/>
    </section>
  );
};

export default ExploreSection;
