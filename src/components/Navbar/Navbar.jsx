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
import HamMenu from "./HamMenu";
import Search from "../Search";

const Navbar = () => {
  const [hoverCategory, setHoverCategory] = useState(false);
  const [hoverCombo, setHoverCombo] = useState(false);
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.items);
  const hasItems = Object.keys(cartItems).length;
  return (
    <>
      <nav className=" w-full fixed z-50 mx-auto bg-[#feffec]">
        <div className="mx-auto max-w-7xl px-4  lg:px-6  xl:px-8 flex items-center justify-between">
          <AiOutlineMenu
            size={28}
            className="block xl:hidden text-[#293819]"
            onClick={() => setHamMenuOpen(true)}
          />
          <Link to={"/"}>
            <img
              src="//healthybuddie.com/cdn/shop/files/c62c0830-bad3-46e5-855d-273a3a5bc550.png?v=1744475062&width=1082"
              alt="logo"
              className="w-28 cursor-pointer"
            />
          </Link>

          <ul className="hidden xl:flex items-center gap-12 flex-wrap text-[#729b4a] text-sm font-normal font-customFont tracking-widest uppercase">
            <li>
              <Link className="px-2 py-12 border-b-4 border-transparent hover:border-[#729b4a]">
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoverCategory(true)}
              onMouseLeave={() => setHoverCategory(false)}
              className="relative"
            >
              <Link className="px-2 py-12 border-b-4 border-transparent hover:border-[#729b4a]">
                Shop by category
              </Link>
              {hoverCategory && (
                <div className="absolute left-0 w-full mt-12 px-4 py-4 border-t-4 border-x border-b border-t-[#729b4a] border-x-[#729b4a4b] bg-[#feffec]">
                  <ShopByCategoryDrawer setHoverCategory={setHoverCategory} />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => setHoverCombo(true)}
              onMouseLeave={() => setHoverCombo(false)}
              className="relative"
            >
              <Link className=" px-4 py-12 border-b-4 border-transparent hover:border-[#729b4a]">
                Combo
              </Link>
              {hoverCombo && (
                <div className="absolute left-0 w-56 mt-12 px-4 py-4 border-t-4 border-x border-b border-t-[#729b4a] border-x-[#729b4a4b] bg-[#feffec]">
                  <ComboDrawer />
                </div>
              )}
            </li>

            <li>
              <Link to={'/bulk-order-inquiry'} className="px-2 py-12 border-b-4 border-transparent hover:border-[#729b4a]">
                Bulk order Enquiry
              </Link>
            </li>
            <li>
              <Link to={'/contact-us'} className="px-2 py-12 border-b-4 border-transparent hover:border-[#729b4a]">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-between text-[#80ad53] gap-4">
            <Link to={'auth'}><AiOutlineUser size={28} className="cursor-pointer"/></Link>
            <AiOutlineSearch size={28} onClick={()=>setSearchOpen(true)} className="cursor-pointer" />
              {searchOpen && <Search setSearchOpen={setSearchOpen}/>}
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
        {hamMenuOpen && (
          <HamMenu
            setHamMenuOpen={setHamMenuOpen}
            hamMenuOpen={hamMenuOpen}
            className="cursor-pointer"
          />
        )}
        <hr />
      </nav>
    </>
  );
};

export default Navbar;
