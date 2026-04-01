import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import ShopByCategoryDrawer from "./ShopByCategoryDrawer";
import { lazy, memo, Suspense, useCallback, useState } from "react";
import CartIcon from "./CartIcon";
import SearchIcon from "./SearchIcon";

const UserMenu = lazy(() => import("./UserMenu"));
const HamMenu = lazy(() => import("./HamMenu"));
const ComboDrawer = lazy(() => import("./ComboDrawer"));

const Navbar = () => {
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToLogin = useCallback(() => {
    navigate("/auth/login?mode=login");
  }, [navigate]);

  const openHamMenu = () => {
    setHamMenuOpen(true);
  };

  return (
    <>
      <nav className=" w-full fixed z-50 mx-auto bg-[#feffec]">
        <div className="mx-auto max-w-7xl px-4  lg:px-6  xl:px-8 flex items-center justify-between">
          <AiOutlineMenu
            size={28}
            className="block xl:hidden text-[#293819] cursor-pointer"
            onClick={openHamMenu}
          />
          <Link to={"/"}>
            <img
              src="//healthybuddie.com/cdn/shop/files/c62c0830-bad3-46e5-855d-273a3a5bc550.png?v=1744475062&width=1082"
              alt="logo"
              className="w-28 h-28 cursor-pointer"
            />
          </Link>

          <ul className="hidden xl:flex items-center gap-12 flex-wrap text-[#729b4a] text-sm font-normal font-customFont tracking-widest uppercase">
            <li>
              <Link to={'/'} className="px-2 py-12 border-b-4 border-transparent hover:border-[#729b4a]">
                Home
              </Link>
            </li>
            <li className="relative group">
              <span className=" px-2 py-12 border-b-4 border-transparent hover:border-[#729b4a] cursor-pointer">
                Shop by category
              </span>

              <div
                className="absolute hidden group-hover:block left-0 w-full mt-12 px-4 py-4 border-t-4
                 border-x border-b border-t-[#729b4a] border-x-[#729b4a4b] bg-[#feffec] "
              >
                <ShopByCategoryDrawer />
              </div>
            </li>
            <li className="group relative">
              <span className=" px-4 py-12 border-b-4 border-transparent hover:border-[#729b4a] cursor-pointer">
                Combo
              </span>

              <div
                className="absolute hidden group-hover:block 
                   left-0 w-56 mt-12 px-4 py-4  border-t-4 border-x border-b
                 border-t-[#729b4a] border-x-[#729b4a4b] bg-[#feffec] cursor-pointer"
              >
                <Suspense fallback={null}>
                  <ComboDrawer />
                </Suspense>
              </div>
            </li>

            <li>
              <Link
                to="/bulk-order-inquiry"
                className="px-2 py-12 border-b-4 border-transparent hover:border-[#729b4a]"
              >
                Bulk order Enquiry
              </Link>
            </li>
            <li>
              <Link
                to={"/contact-us"}
                className="px-2 py-12 border-b-4 border-transparent hover:border-[#729b4a]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-between text-[#80ad53] gap-4">
            {
              <div className="relative py-12 ">
                <Suspense fallback={null}>
                  <UserMenu
                    userMenuOpen={userMenuOpen}
                    setHamMenuOpen={setHamMenuOpen}
                    setUserMenuOpen={setUserMenuOpen}
                    navigateToLogin={navigateToLogin}
                  />
                </Suspense>
              </div>
            }
            <SearchIcon />

            <CartIcon />
          </div>
        </div>
        {hamMenuOpen && (
          <HamMenu
            setHamMenuOpen={setHamMenuOpen}
            setUserMenuOpen={setUserMenuOpen}
            hamMenuOpen={hamMenuOpen}
          />
        )}
        <hr />
      </nav>
    </>
  );
};

export default memo(Navbar);
