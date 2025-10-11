import HeroCarousel from "../components/HeroSection/HeroCarousel";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const makhanaData = useSelector((state) => state.product.items?.[0]?.makhana);

  const roastedMakhanaProductData = makhanaData?.roastedMakhana || {};
  const roastedMakhanaComboProductData = makhanaData?.comboOfMakhana || {};

  const roastedMakhanaProducts = Object.keys(roastedMakhanaProductData);
  const roastedMakhanaComboProducts = Object.keys(
    roastedMakhanaComboProductData
  );
  console.log(roastedMakhanaProductData);

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
        products={roastedMakhanaProducts}
        productsData={roastedMakhanaProductData}
        noOfItems={6}
      />
      <ExploreSection
        isMobile={isMobile}
        heading="Explore our flavours"
        slogan="Taste the variety of our premium snacks"
        products={roastedMakhanaComboProducts}
        productsData={roastedMakhanaComboProductData}
        noOfItems={3}
      />
    </main>
  );
};

export default HomePage;
