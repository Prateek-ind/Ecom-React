import { useSelector } from "react-redux";
import ProductCard from './ProductCard'


const Products = () => {
  const roastedMakhanaProductData = useSelector(
    (state) => state.product.items[0].makhana.roastedMakhana
  );

  const roastedMakhanaProducts = Object.keys(roastedMakhanaProductData);
  console.log(roastedMakhanaProducts);
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-24 w-full px-4 lg:px-6 xl:px-8 ">
    {roastedMakhanaProducts.map((key) => {
      const product = roastedMakhanaProductData[key];
      console.log(product);
      return <ProductCard key={key} product={product} />;
    
      
    })}
    
  </div>

);
};


export default Products;
