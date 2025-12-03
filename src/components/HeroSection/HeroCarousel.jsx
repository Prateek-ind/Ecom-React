import { useEffect, useState } from "react";
import HeroCarouselButtons from "./HeroCarouselButtons";
import HeroShopButton from "./HeroShopButton";
import { heroSectionImg } from "../../features/product/Products";

const HeroCarousel = ({ isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  let imgIntervalId = "";

  useEffect(() => {
    imgIntervalId = setInterval(() => {
      setLoading(true);
      setCurrentIndex((prev) => {
        return (prev + 1) % imgSource.length;
      });
    }, 4000);
    setLoading(false);
    return () => {
      clearInterval(imgIntervalId);
    };
  }, [currentIndex]);

  const imgSource = isMobile
    ? Object.values(heroSectionImg.mobile)
    : Object.values(heroSectionImg.desktop);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <div className="relative pt-20 flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="absolute bottom-6 right-10 flex gap-4 z-10">
        {imgSource.map((img, i) => (
          <HeroCarouselButtons
            className="relative w-2 h-2"
            index={i}
            key={i}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ))}
      </div>

      <img
        key={currentIndex}
        src={imgSource[currentIndex]}
        onLoad={handleImageLoad}
        className={`w-full h-full object-cover transition-all duration-2000 ease-in-out ${
          loading ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
        alt=""
      />
      {currentIndex !== 2 && (
        <HeroShopButton currentIndex={currentIndex} isMobile={isMobile} />
      )}
    </div>
  );
};

export default HeroCarousel;
