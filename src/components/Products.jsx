import { useSelector } from "react-redux";
import ProductCard from './ProductCard'


const Products = () => {
  const roastedMakhanaProductData = useSelector(
    (state) => state.product.items[0].makhana.roastedMakhana
  );

  const roastedMakhanaProducts = Object.keys(roastedMakhanaProductData);
  console.log(roastedMakhanaProducts);
  return (
  <div className="grid grid-cols-3 mt-16">
    {roastedMakhanaProducts.map((key) => {
      const product = roastedMakhanaProductData[key];
      console.log(product);
      return <ProductCard key={key} product={product} />;
    
      
    })}
    
  </div>

);
};


export default Products;
