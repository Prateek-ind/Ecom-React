import { useSelector } from "react-redux";
import Products from "../Product/Products";
import ViewAllBtn from "./ViewAllBtn";

const ExploreSection = ({
  heading,
  slogan,
  noOfItems,
  category,
  partitionImageSrc,
}) => {
  const products =
    category === "makhanaSingles"
      ? useSelector((state) => state.product.makhana.singles)
      : category === "makhanaCombo"
      ? useSelector((state) => state.product.makhana.combo)
      : category === "teaSingles"
      ? useSelector((state) => state.product.tea.singles)
      : useSelector((state) => state.product.tea.combo);

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
          className="pt-12 bg-[#feffec]"
        />
      )}
      <hr />
    </>
  );
};

export default ExploreSection;
