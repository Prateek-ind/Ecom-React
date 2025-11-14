import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router";
const CheckoutNavbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const hasItems = Object.keys(cartItems).length;

  return (
    <nav className=" w-full fixed z-50 mx-auto   bg-white">
      <div className="mx-auto max-w-7xl px-4  lg:px-6  xl:px-8 flex items-center justify-between">
        <Link to={'/'}>
        <img
          src="//healthybuddie.com/cdn/shop/files/c62c0830-bad3-46e5-855d-273a3a5bc550.png?v=1744475062&width=1082"
          alt="logo"
          className="w-24 justify-items-center"
        />
        </Link>

        <div className="flex items-center justify-between text-[#80ad53] gap-4">
          <div className="relative">
            <Link to={"/cart"}>
              <AiOutlineShoppingCart size={28} className="cursor-pointer" />
            </Link>
            {hasItems > 0 && (
              <div className="w-3 h-3 rounded-full absolute -right-1 -top-1 bg-green-600 shadow-white"></div>
            )}
          </div>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default CheckoutNavbar;
