import { useLocation } from "react-router";
import StarRating from "../components/Product/StarRating";
import EditQuantityComponent from "../components/CartDrawer/EditQuantityComponent";
import { useEffect, useState } from "react";
import MultiButton from "../components/Product/MultiButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cart/CartSlice";
import OfferSwitcher from "../components/Product/OfferSwitcher";

const offers = [
  {
    heading: "Free Shipping",
    content:
      "On prepaid orders of ₹299 and above *COD orders will Charged Extra ₹99",
  },

  {
    heading: "10% OFF on your first order",
    content:
      "(5% Instant + 5% on Prepaid orders) No coupon code required - discount applied automatically",
  },
];

const ProductDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const product = location.state;
  const [selectedImg, setSelectedImg] = useState(product.img1);

  const productImgArray = Object.keys(product)
    .filter((key) => key.startsWith("img"))
    .map((key) => (key = product[key]));

  console.log(selectedImg);
  return (
    <div className="pt-36 pb-36 grid grid-cols-3 items-start">
      <div className="col-span-2">
        <img src={selectedImg} className="pl-12 pr-24" alt="" />
        <div className="flex gap-4 pl-12  pt-4">
          {productImgArray.map((img, i) => (
            <img
              src={img}
              key={i}
              onClick={() => setSelectedImg(img)}
              className={`w-16 h-16 object-cover cursor-pointer border-2 p-0.5 
          ${selectedImg === img ? "border-gray-500" : "border-gray-300"}`}
            />
          ))}
        </div>
      </div>
      <div className="pt-2 pr-8 mb-4">
        <h2 className="text-gray-500 tracking-widest uppercase text-sm mb-4">
          Healthy buddy
        </h2>
        <h1 className="text-gray-700 tracking-widest uppercase text-2xl mb-4">
          {product.name}
        </h1>
        <span className="bg-red-600 p-1 text-xs text-white">
          Save {product.discount} %
        </span>
        <div className="flex gap-4 mt-4 tracking-widest items-center justify-between">
          <p className="text-red-600 text-xl">
            Rs. {product.discountedPrice.toFixed(2)}
          </p>
          <p className="text-gray-500 line-through text-md ">
            Rs. {product.originalPrice.toFixed(2)}
          </p>
          <div className="flex gap-2 text-xs">
            <StarRating rating={product.rating} />
            <p>({product.rating})</p>
          </div>
        </div>
        <EditQuantityComponent product={product} showRemoveBtn={false} />
        <OfferSwitcher offers={offers} />
        <MultiButton
          className="w-full px-8 py-2 bg-white text-[#63ce36] border border-[#63ce36] mt-4 mb-4 uppercase "
          navigateTo={"/cart"}
          label={"Add to cart"}
          onClick={() => dispatch(cartActions.addToCart(product))}
        />

        <MultiButton
          className="w-full px-8 py-2 bg-[#63ce36] text-white mb-4 uppercase"
          navigateTo={"/cart/checkout"}
          onClick={() => {
            dispatch(cartActions.clearCart());
            dispatch(cartActions.addToCart(product));
          }}
          label={"Buy now"}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
