
import ProductCard from "./ProductCard";


const Products = ({ products, noOfItems }) => {
  console.log(products);
  const productKeys = Object.keys(products);
  if (!products || Object.keys(products).length === 0) {
    return <p className="text-center py-10">No products available.</p>;
  }

  return (
    <div className="mt-16 w-full px-4 lg:px-6 xl:px-8 bg-[#feffec] ">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
   gap-12 "
      >
        {productKeys.slice(0, noOfItems).map((key) => {
          const product = products[key];

          return <ProductCard key={key} product={product} />;
        })}
      </div>
      <div className="flex justify-center">
       
      </div>
    </div>
  );
};

export default Products;
