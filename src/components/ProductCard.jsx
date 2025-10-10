import { Link } from "react-router";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  return (
    <div className=" flex flex-col items-center uppercase text-center">
      <div className="relative">
        <img src={product[1]} className="w-full h-auto" alt="" />
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
        <Link>
        <StarRating rating={product.rating} />
      </Link>
      <p className="text-xs text-gray-400 tracking-widest">({product.rating})</p>
      </div>
    </div>
  );
};

export default ProductCard;
