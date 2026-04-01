import { useEffect, useMemo, useState } from "react";
import HeroCarouselButtons from "./HeroCarouselButtons";
import HeroShopButton from "./HeroShopButton";
import { heroSectionImg } from "@/features/product/Products";
import useIsMobile from "../../../hooks/useIsMobile";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile()


  const imgSource = useMemo(() => {
    return isMobile
      ? heroSectionImg.mobile
      : heroSectionImg.desktop
  }, [isMobile]);

  useEffect(() => {
    imgSource.forEach((src)=>{
      const img = new Image()
      img.src = src
    })
  }, [imgSource])
  console.log(imgSource);
  

  useEffect(() => {
   const id = setInterval(() => {
      setCurrentIndex((prev) => ( (prev + 1) % imgSource.length));
    }, 4000);

    return () => {
      clearInterval(id);
    };
  }, [imgSource]);

  

  return (
    <div className="relative h-[90vh] pt-20 bg-gray-100 overflow-hidden">
      
        {imgSource.map((src, i) => {
          console.log(src);
         return <img
        key={i}
        src={src}
        className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out ${
          i===currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
        alt=""
      />
        })}
      {/* {currentIndex !== 2 && (
        <HeroShopButton currentIndex={currentIndex} isMobile={isMobile} />
      )} */}
      <HeroShopButton currentIndex={currentIndex} isMobile={isMobile} />
    </div>
  );
};

export default HeroCarousel;
