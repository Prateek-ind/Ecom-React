import HeroCarousel from "../components/HeroSection/HeroCarousel";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import { partitionImg } from "../features/product/Products";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Reviews from "../components/Reviews";
import GetInTouch from "../components/GetInTouch";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const makhanaData = useSelector((state) => state.product.makhana);
  const teaData = useSelector((state) => state.product.tea);

  const partitionImageSrc = partitionImg;
  console.log();

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
        products={makhanaData.singles}
        productsData={Object.keys(makhanaData.singles)}
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
        products={makhanaData.combo}
        productsData={Object.keys(makhanaData.combo)}
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
        products={teaData.singles}
        productsData={Object.keys(teaData.singles)}
        noOfItems={6}
        partitionImageSrc={null}
      />
      <ExploreSection
        isMobile={isMobile}
        heading="Tea Combo Packs"
        slogan="Wellness in Every Sip"
        products={teaData.combo}
        productsData={Object.keys(teaData.combo)}
        noOfItems={6}
        partitionImageSrc={null}
      />
      <Reviews />
      <GetInTouch />
    </main>
  );
};

export default HomePage;
