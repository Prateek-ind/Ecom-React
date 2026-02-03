import React from "react";
import Products from "../features/product/components/Products";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const ViewAllProducts = () => {
  const { type, category } = useParams();

  const allProducts = useSelector((state) => state.product.allProducts);

  const products = allProducts.filter(
    (product) => product.type === type && product.category === category,
  );

  const getTitle = () => {
    if (type === "makhana")
      return category === "singles" ? "Makhana" : "Makhana Combo";
    if (type === "tea") return category === "singles" ? "Tea" : "Tea Combo";
  };

  return (
    <section
      className="w-full max-w-8xl flex flex-col items-center
     font-customFont bg-[#feffec] uppercase"
    >
      <div className=" w-full text-center uppercase mt-28">
        <div className="w-full relative py-12 ">
          <p className="pl-4 absolute top-2 left-0 text-xs text-gray-500 font-thin">
            Home / Shop / {getTitle()}
          </p>
          <h2 className="text-3xl text-gray-700 font-extralight tracking-widest">
            {getTitle()}
          </h2>
        </div>

        <div>
          <hr />
          <p className="py-4  text-sm font-thin tracking-widest text-gray-500">
            {products.length} PRODUCTS
          </p>
          <hr />
        </div>
      </div>
      <div className="px-4  lg:px-6  xl:px-8 mb-12">
        <Products products={products} noOfItems={8} />
      </div>
    </section>
  );
};

export default ViewAllProducts;
