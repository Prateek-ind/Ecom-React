import { useSelector } from "react-redux";
import Products from "../Product/Products";
import ViewAllBtn from "./ViewAllBtn";

const ExploreSection = ({
  heading,
  slogan,
  noOfItems,
  type,
  category,
  partitionImageSrc,
}) => {
  const allProducts = useSelector((state) => state.product.allProducts);

  const products = allProducts.filter(
    (product) => product.type === type && product.category === category
  );

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
        <ViewAllBtn category={category} />
      </section>
      {partitionImageSrc && (
        <img
          src={partitionImageSrc}
          alt="partition image"
          className="w-full pt-12 bg-[#feffec]"
        />
      )}
      <hr />
    </>
  );
};

export default ExploreSection;
