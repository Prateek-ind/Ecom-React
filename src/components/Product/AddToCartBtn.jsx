import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/CartSlice";
import { cartUIActions } from "../../features/cart/cartUISlice";

const AddToCartBtn = ({ product }) => {
  const [cssClasses, setCssClasses] = useState("");
  const dispatch = useDispatch();

  const triggerAnimation = (animation) => {
    setCssClasses(""); // reset class
    setTimeout(() => setCssClasses(animation), 10); // reapply after a small delay
  };

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(product));
    dispatch(cartUIActions.openCart());
  };

  return (
    <div
      className="absolute flex items-center justify-center bottom-4 right-4
      w-10 h-10 bg-gray-200 cursor-pointer"
    >
      <button
        onMouseEnter={() => triggerAnimation("animate-spinOnceRight")}
        onMouseLeave={() => triggerAnimation("animate-spinOnceLeft")}
        className={`p-2 text-lg transition-transform ${cssClasses}`}
        onClick={handleAddToCart}
      >
        +
      </button>
    </div>
  );
};

export default AddToCartBtn;
