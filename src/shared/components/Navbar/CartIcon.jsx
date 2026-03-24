import { memo } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const hasItems = Object.keys(cartItems).length;

  return (
    <div className="relative px-1 cursor-pointer">
      <Link to={"cart"}>
        <AiOutlineShoppingCart size={28} />
      </Link>
      {hasItems > 0 && (
        <div className="w-3 h-3 rounded-full absolute -right-1 -top-1 bg-green-600 shadow-white"></div>
      )}
    </div>
  );
};

export default memo(CartIcon);
