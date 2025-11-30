import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import ShopByCategoryDrawer from "./ShopByCategoryDrawer";
import { useState } from "react";
import ComboDrawer from "./ComboDrawer";

const Navbar = () => {
  const [hoverCategory, setHoverCategory] = useState(false);
  const [hoverCombo, setHoverCombo] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const hasItems = Object.keys(cartItems).length;
  return (
    <>
      <nav className=" w-full fixed z-50 mx-auto bg-[#feffec]">
        <div className="mx-auto max-w-7xl px-4  lg:px-6  xl:px-8 flex items-center justify-between">
          <AiOutlineMenu size={28} className="block lg:hidden text-[#293819]" />
          <Link to={"/"}>
            <img
              src="//healthybuddie.com/cdn/shop/files/c62c0830-bad3-46e5-855d-273a3a5bc550.png?v=1744475062&width=1082"
              alt="logo"
              className="w-24 cursor-pointer"
            />
          </Link>
          <ul className="hidden lg:flex items-center gap-12 flex-wrap text-[#729b4a] text-xs font-normal font-customFont tracking-widest uppercase">
            <li>
              <Link className="px-2 py-12 border-b-2 border-transparent hover:border-[#729b4a]">
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoverCategory(true)}
              onMouseLeave={() => setHoverCategory(false)}
              className="relative"
            >
              <Link className="px-2 py-12 border-b-2 border-transparent hover:border-[#729b4a]">
                Shop by category
              </Link>
              {hoverCategory && (
                <div className="absolute left-0 w-full mt-10 px-4 py-4 border-t-2 border-[#729b4a] bg-[#feffec]">
                  <ShopByCategoryDrawer />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => setHoverCombo(true)}
              onMouseLeave={() => setHoverCombo(false)}
              className="relative"
            >
              <Link className=" px-2 py-12 border-b-2 border-transparent hover:border-[#729b4a]">
                Combo
              </Link>
              {hoverCombo && (
                <div className="absolute left-0 w-full mt-10 px-4 py-4 border-t-2 border-[#729b4a] bg-[#feffec]">
                  <ComboDrawer />
                </div>
              )}
            </li>

            <li>
              <Link className="px-2 py-12 border-b-2 border-transparent hover:border-[#729b4a]">
                Bulk order Enquiry
              </Link>
            </li>
            <li>
              <Link className="px-2 py-12 border-b-2 border-transparent hover:border-[#729b4a]">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-between text-[#80ad53] gap-4">
            <AiOutlineUser size={28} />
            <AiOutlineSearch size={28} />
            <div className="relative">
              <Link to={"cart"}>
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
    </>
  );
};

export default Navbar;
