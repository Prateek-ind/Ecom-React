import HeroCarousel from "../components/HeroSection/HeroCarousel";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import { partitionImg } from "../features/product/Products";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const makhanaData = useSelector((state) => state.product.items?.[0]?.makhana);
  const teaData = useSelector((state) => state.product.items?.[1]);

  const roastedMakhanaProductData = makhanaData?.roastedMakhana || {};
  const roastedMakhanaComboProductData = makhanaData?.comboOfMakhana || {};

  const roastedMakhanaProducts = Object.keys(roastedMakhanaProductData);
  const roastedMakhanaComboProducts = Object.keys(
    roastedMakhanaComboProductData
  );

  const teaProductsData = teaData?.tea || {};
  const comboTeaProductsData = teaData?.teaCombo || {};

  const teaProducts = Object.keys(teaProductsData);
  const comboTeaProducts = Object.keys(comboTeaProductsData);

  const partitionImageSrc = partitionImg;
  console.log(teaProductsData);

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
        products={roastedMakhanaComboProducts}
        productsData={roastedMakhanaComboProductData}
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
        products={teaProducts}
        productsData={teaProductsData}
        noOfItems={6}
        partitionImageSrc={null}
      />
      <ExploreSection
        isMobile={isMobile}
        heading="Tea Combo Packs"
        slogan="Wellness in Every Sip"
        products={comboTeaProducts}
        productsData={comboTeaProductsData}
        noOfItems={6}
        partitionImageSrc={null}
      />
    </main>
  );
};

export default HomePage;
