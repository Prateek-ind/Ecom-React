import Products from "../Product/Products";
import { partitionImg } from "../../features/product/Products";

const ExploreSection = ({
  heading,
  slogan,
  productsData,
  noOfItems,
  partitionImageSrc,
}) => {
  return (
    <>
      <section
        className="w-full flex flex-col items-center
     px-4 lg:px-6 xl:px-8 my-12 font-customFont bg-[#feffec] uppercase"
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-gray-900 font-light tracking-[2px]">
            {slogan}
          </p>
          <h2 className="text-3xl font-normal text-gray-700 tracking-widest">
            {heading}
          </h2>
        </div>
        <Products productsData={productsData} noOfItems={noOfItems} />
      </section>
      {partitionImageSrc && (
        <img src={partitionImageSrc} alt="partition image" className="mt-12" />
      )}
      <hr />
    </>
  );
};

export default ExploreSection;
