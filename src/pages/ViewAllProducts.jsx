import React from "react";
import Products from "../components/Product/Products";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const ViewAllProducts = () => {
  const { category } = useParams();
  const products =
    category === "makhanaSingles"
      ? useSelector((state) => state.product.makhana.singles)
      : category === "makhanaCombo"
      ? useSelector((state) => state.product.makhana.combo)
      : category === "teaSingles"
      ? useSelector((state) => state.product.tea.singles)
      : useSelector((state) => state.product.tea.combo);

  console.log();

  return (
    <section
      className="w-full max-w-8xl flex flex-col items-center
     font-customFont bg-[#feffec] uppercase"
    >
      <div className=" w-full text-center uppercase mt-28">
        <div className="w-full relative py-12 ">
          <p className="pl-4 absolute top-2 left-0 text-xs text-gray-500 font-thin">
            Home / Shop / {` `}
            {category === "makhanaSingles"
              ? "Makhana"
              : category === "makhanaCombo"
              ? "Makhana Combo"
              : category === "teaSingles"
              ? "Tea"
              : "Tea Combo"}
          </p>
          <h2 className="text-3xl text-gray-700 font-extralight tracking-widest">
            {category === "makhanaSingles"
              ? "Makhana"
              : category === "makhanaCombo"
              ? "Makhana Combo"
              : category === "teaSingles"
              ? "Tea"
              : "Tea Combo"}
          </h2>
        </div>

        <div>
          <hr />
          <p className="py-4  text-sm font-thin tracking-widest text-gray-500">
            {Object.keys(products).length} PRODUCTS
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
