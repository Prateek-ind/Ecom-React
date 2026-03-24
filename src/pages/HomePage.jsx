import HeroCarousel from "@/shared/components/HeroSection/HeroCarousel";
import ExploreSection from "@/shared/components/ExploreSection/ExploreSection";
import { partitionImg } from "@/features/product/Products";
import Reviews from "@/shared/components/Reviews";
import GetInTouch from "@/shared/components/GetInTouch";
import useIsMobile from "../hooks/useIsMobile";


const HomePage = () => {
  const isMobile = useIsMobile()

  const partitionImageSrc = partitionImg;


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
        partitionImageSrc={ partitionImageSrc.section1}
      />
      <ExploreSection
        isMobile={isMobile}
        heading="Explore our flavours"
        slogan="Taste the variety of our premium snacks"
        type='makhana'
        category="combo"
        noOfItems={3}
        partitionImageSrc={ partitionImageSrc.section2}
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
