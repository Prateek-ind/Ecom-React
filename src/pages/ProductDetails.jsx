import { useLocation } from "react-router";
import StarRating from "../components/Product/StarRating";
import EditQuantityComponent from "../components/CartDrawer/EditQuantityComponent";
import { useMemo, useState } from "react";
import MultiButton from "../components/Product/MultiButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cart/CartSlice";
import OfferSwitcher from "../components/Product/OfferSwitcher";
import ProductImageGallery from "../components/Product/ProductImageGallery";

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

  const productImgArray = useMemo(()=>
    Object.keys(product)
      .filter((key) => key.startsWith("img"))
      .map((key) => (key = product[key])),
    [product]
  );

  return (
    <div
      className=" pt-36 pb-36 mx-auto max-w-7xl px-6 lg:px-8
     grid grid-cols-1 items-center md:grid-cols-3 md:items-start bg-[#feffec]"
    >
      <ProductImageGallery
        images={productImgArray}
        selectedImg={selectedImg}
        onSelectImage={setSelectedImg}
      />
      <div className="pt-2 px-8 mb-4">
        <div className="pb-4">
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
        <hr />
        <div className="pt-8">
          <p className="text-sm font-light text-gray-700 leading-6 pb-8">
            {product.description}
          </p>

          {product?.healthBenefits.length && (
            <div className="pt-8 pb-4">
              <hr className="pb-8 " />

              <h3 className="text-gray-800 font-bold">Ingredients</h3>

              <p className="text-sm font-light text-gray-700 leading-6 pb-4">
                {product?.ingredients}
              </p>
            </div>
          )}

          <div className="pt-8 pb-8">
            <hr className="pb-8 " />
            <h3 className="text-gray-800 font-bold pb-4">Key Highlights: </h3>
            <ul className="list-disc pl-2">
              {Object.values(product.keyHighlights).map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm font-light text-gray-700 leading-6"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <hr />
          {product?.healthBenefits &&
            Object.keys(product.healthBenefits).length > 0 && (
              <div className="pt-8">
                <h3 className="text-gray-800 font-bold pb-4">
                  Health Benefits:{" "}
                </h3>
                {product.benefitsHeading && (
                  <p className="text-sm text-gray-800 pb-2">
                    {product.benefitsHeading}
                  </p>
                )}
                <ul className="list-disc pl-2">
                  {Object.values(product?.healthBenefits).map((benefit, i) => (
                    <li
                      key={i}
                      className="text-sm font-light text-gray-700 leading-6"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          <hr />
          {["combo", "pack"].some((word) =>
            location.pathname.toLowerCase().includes(word)
          ) && (
            <div className="pt-8">
              <h3 className="text-gray-800 font-bold pb-4">
                Includes Flavours:{" "}
              </h3>
              <ul className="list-disc pl-2">
                {Object.values(product?.includesFlavours).map((benefit, i) => (
                  <li
                    key={i}
                    className="text-sm font-light text-gray-700 leading-6"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
