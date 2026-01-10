import { Link } from "react-router";
import StarRating from "./StarRating";
import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({ product, closeSearch }) => {
  const [isHovered, setIsHovered] = useState();
  return (
    <div className=" flex flex-col items-center uppercase text-center cursor-pointer">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? product.img2 : product.img1}
          className="w-full h-auto opacity-100 transition-opacity duration-500"
          alt={product.name}
        />
        {isHovered && <AddToCartBtn product={product} closeSearch={closeSearch}/>}
        <p className="absolute top-2 left-2 px-1 py-[2px] bg-red-500 text-white text-xs tracking-widest">
          Save {product.discount}%
        </p>
      </div>

      <h3 className="text-xs tracking-[2px] pt-4">{product.name}</h3>
      <div className="flex items-center gap-4">
        <p className="text-xs tracking-[2px] pt-4 text-red-700 ">
          {" "}
          Rs.{product.discountedPrice}
        </p>
        <p className="text-xs tracking-[2px] pt-4 text-gray-500 line-through">
          {" "}
          Price: Rs.{product.originalPrice}
        </p>
      </div>
      <div className="flex gap-4 pt-4">
        
          <StarRating rating={product.rating} />
        
        <p className="text-xs text-gray-400 tracking-widest">
          ({product.rating})
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
