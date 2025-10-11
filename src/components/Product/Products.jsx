import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import ViewAllBtn from "../ExploreSection/ViewAllBtn";

const Products = ({ productsData, noOfItems }) => {
  console.log(productsData);
  const productKeys = Object.keys(productsData);
  if (!productsData || Object.keys(productsData).length === 0) {
    return <p className="text-center py-10">No products available.</p>;
  }

  return (
    <div className="mt-16  w-full px-4 lg:px-6 xl:px-8 bg-[#feffec] ">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 
  md:grid-cols-3 gap-12 "
      >
        {productKeys.slice(0, noOfItems).map((key) => {
          const product = productsData[key];

          return <ProductCard key={key} product={product} />;
        })}
      </div>
      <div className="flex justify-center">
        <ViewAllBtn />
      </div>
    </div>
  );
};

export default Products;
