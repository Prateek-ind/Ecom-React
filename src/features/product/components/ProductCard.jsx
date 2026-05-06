import StarRating from "./StarRating";
import { memo, useState } from "react";
import AddToCartBtn from "@/features/cart/components/AddToCartBtn";
import useIsMobile from "../../../hooks/useIsMobile";
// import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, closeSearch }) => {
  const [isHovered, setIsHovered] = useState();
  const isMobile = useIsMobile();
  // const navigate = useNavigate();

  // const goToProduct = () => {
  //   closeSearch?.();
  //   navigate(`/products/${product.id}`);
  // };

  return (
    <div
      className=" flex flex-col items-center uppercase text-center cursor-pointer"
      // onClick={goToProduct}
    >
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.img1}
          width={256}
          height={256}
          fetchpriority="high"
          loading="eager"
          decoding="async"
          className="w-auto h-auto object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
          alt={product.name}
        />
        {/* Hover Image */}
        <img
          src={product.img2}
          width={256}
          height={256}
          loading="lazy"
          decoding="async"
          aria-hidden="true"
          className="absolute inset-0 w-auto h-auto object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
          alt=""
        />
        {isHovered || isMobile ? (
          <AddToCartBtn
            product={product}
            closeSearch={closeSearch}
            onClick={(e) => e.stopPropagation()}
          />
        ) : null}
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
export default memo(ProductCard);
