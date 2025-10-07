import React, { useEffect, useState } from "react";
import HeroCarouselButtons from "./HeroCarouselButtons";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const imgSource = [
    "//healthybuddie.com/cdn/shop/files/25_70117e57-b8e5-4b21-9e37-6d505a91a078.png?v=1757753866&width=5760",
    "//healthybuddie.com/cdn/shop/files/16_1674dbb4-ecfa-4147-a6b7-68ea5fc90fbd.png?v=1751962604&width=3000",
    "//healthybuddie.com/cdn/shop/files/22_120ee40c-dd86-4183-bc7a-edd5eb87c77c.png?v=1756285257&width=5760",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoading(true);
      setCurrentIndex((prev) => {
        return (prev + 1) % imgSource.length;
      });
    }, 6000);
    setLoading(false);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="absolute bottom-6 right-10 flex gap-4 z-10">
        {imgSource.map((img, i) => (
          <HeroCarouselButtons
            className="relative w-2 h-2"
            index={i}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ))}
      </div>

      <img
        src={imgSource[currentIndex]}
        onLoad={() => setLoading(false)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        alt=""
      />
    </div>
  );
};

export default HeroCarousel;
