import HeroCarousel from "../components/HeroSection/HeroCarousel";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import { partitionImg } from "../features/product/Products";
import { useEffect, useState } from "react";
import Reviews from "../components/Reviews";
import GetInTouch from "../components/GetInTouch";


const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const partitionImageSrc = partitionImg;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <HeroCarousel isMobile={isMobile} />
      <ExploreSection
        isMobile={isMobile}
        heading="Explore our flavours"
        slogan="Taste the variety of our premium snacks"
        type='makhana'
        category="singles"
        noOfItems={6}
        partitionImageSrc={
          isMobile
            ? partitionImageSrc.mobile.img1
            : partitionImageSrc.desktop.img1
        }
      />
      <ExploreSection
        isMobile={isMobile}
        heading="Explore our flavours"
        slogan="Taste the variety of our premium snacks"
        type='makhana'
        category="combo"
        noOfItems={3}
        partitionImageSrc={
          isMobile
            ? partitionImageSrc.mobile.img2
            : partitionImageSrc.desktop.img2
        }
      />
      <ExploreSection
        isMobile={isMobile}
        heading="Taste the Tradition"
        slogan="Wellness in Every Sip"
        type='tea'
        category="singles"
        noOfItems={6}
        partitionImageSrc={null}
      />
      <ExploreSection
        isMobile={isMobile}
        heading="Tea Combo Packs"
        slogan="Wellness in Every Sip"
        type='tea'
        category="combo"
        noOfItems={6}
        partitionImageSrc={null}
      />
      <Reviews />
      <GetInTouch />
    </main>
  );
};

export default HomePage;
