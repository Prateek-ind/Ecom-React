import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className=" w-full fixed z-50 mx-auto px-4  lg:px-6  xl:px-8  bg-[#feffec]">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <AiOutlineMenu size={28} className="block lg:hidden text-[#293819]" />
          <img
            src="//healthybuddie.com/cdn/shop/files/c62c0830-bad3-46e5-855d-273a3a5bc550.png?v=1744475062&width=1082"
            alt="logo"
            className="w-24"
          />
          <ul className="hidden lg:flex items-center gap-8 flex-wrap text-[#729b4a] text-xs font-normal font-customFont tracking-widest uppercase">
            <Link>Home</Link>
            <Link>Shop by category</Link>
            <Link>Combo</Link>
            <Link>Blogs and community</Link>
            <Link>Bulk order Enquiry</Link>
            <Link>Contact Us</Link>
          </ul>
          <div className="flex items-center justify-between text-[#80ad53] gap-4">
            <AiOutlineUser size={28} />
            <AiOutlineSearch size={28} />
            <AiOutlineShoppingCart size={28} />
          </div>
        </div>
      </nav>
      <div className=" w-full border-b border-gray-100"></div>
    </>
  );
};

export default Navbar;
