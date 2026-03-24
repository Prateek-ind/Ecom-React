import {  useSelector } from "react-redux";
import Products from "@/features/product/components/Products";
import ViewAllBtn from "./ViewAllBtn";
import { memo, useMemo } from "react";
import PartitionPicture from "../PartitionPicture";

const ExploreSection = ({
  heading,
  slogan,
  noOfItems,
  type,
  category,
  partitionImageSrc,
}) => {
  const allProducts = useSelector((state) => state.product.allProducts);

  const products = useMemo(() => {
    if (!allProducts) return [];
    return allProducts.filter(
      (product) => product.type === type && product.category === category,
    );
  }, [allProducts, category, type]);

  return (
    <>
      <section
        className="w-full flex flex-col items-center
     px-4 lg:px-6 xl:px-8 py-12 font-customFont bg-[#feffec] uppercase"
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-gray-900 font-light tracking-[2px]">
            {slogan}
          </p>
          <h2 className="text-3xl font-normal text-gray-700 tracking-widest">
            {heading}
          </h2>
        </div>
        <Products products={products} noOfItems={noOfItems} />
        <ViewAllBtn category={category} type={type} />
      </section>
      {partitionImageSrc && (
        <PartitionPicture
          mobileSrc={partitionImageSrc.mobile.img1}
          desktopSrc={partitionImageSrc.desktop.img1}
        />
      )}
      <hr />
    </>
  );
};

export default memo(ExploreSection);
