import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../features/cart/CartSlice";
import { cartUIActions } from "../../features/cart/cartUISlice";
import { saveCartToDB } from "../../features/cart/CartSlice";

const AddToCartBtn = ({ product, closeSearch }) => {
  const [cssClasses, setCssClasses] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.user.userId);

  const triggerAnimation = (animation) => {
    setCssClasses(""); // reset class
    setTimeout(() => setCssClasses(animation), 10);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(cartActions.addToCart(product));
    dispatch(cartUIActions.openCart());

    setTimeout(() => {
      const updatedCartItems = {
        ...cartItems,
        [product.id]: {
          ...product,
          quantity: (cartItems[product.id]?.quantity || 0) + 1,
        },
      };
      dispatch(saveCartToDB({ userId, cartItems: updatedCartItems }));
    }, 0);
    if (closeSearch) closeSearch();
  };

  return (
    <div
      className="absolute flex items-center justify-center bottom-4 right-4
      w-10 h-10 bg-gray-100 border border-gray-400 cursor-pointer"
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
