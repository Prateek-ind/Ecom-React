import React, { useEffect, useState } from "react";

const OfferSwitcher = ({offers}) => {
    const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    
    const timerId = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 2000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const currentOffer = offers[currentOfferIndex];

  return (
    <div className="h-44 mt-8 bg-[#63ce36] text-white text-center rounded-lg py-8 px-4 tracking-wider object-contain">
      <span className="text-sm md:text-xl p-2 font-bold bg-[#77ec45] rounded-full">
        {currentOffer.heading}
      </span>
      <p className="mt-8 text-xs md:text-sm font-light leading-6">
        {currentOffer.content}
      </p>
    </div>
  );
};

export default OfferSwitcher;
