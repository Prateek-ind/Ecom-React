import { AiOutlineUser } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ShopByCategoryDrawer from "./ShopByCategoryDrawer";
import ComboDrawer from "./ComboDrawer";
import { useState } from "react";

const HamMenu = ({ setHamMenuOpen, HamMenuOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(null);

  const toggleDrawer = (drawer) => {
    setOpenDrawer(openDrawer === drawer ? null : drawer);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-2/3 xl:w-1/3 bg-white shadow-lg
    transition-transform duration-300 z-50 flex flex-col 
    ${HamMenuOpen ? "translate-x-0" : "-translate-x-50"}
    `}
    >
      <div className="flex pt-4 px-4 mb-4 justify-end">
        <IoCloseOutline
          size={32}
          className="text-gray-400"
          onClick={() => setHamMenuOpen(false)}
        />
      </div>
      <ul className="flex flex-col flex-1">
        <Link to={"/"} onClick={() => setHamMenuOpen(false)}>
          <li className=" px-4  py-4 uppercase tracking-widest border-y border-gray-100 hover:border-gray-200 text-[#729b4a] hover:bg-gray-100 cursor-pointer">
            Home
          </li>
        </Link>

        <li
          className=" px-4  py-4 uppercase tracking-widest
           border-y border-gray-100 hover:border-gray-200 text-[#729b4a]
            hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            toggleDrawer("category");
          }}
        >
          Shop by category
        </li>
        {openDrawer === "category" && (
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openDrawer === "category" ? "max-h-96" : "max-h-0"
            }`}
          >
            {" "}
            <ShopByCategoryDrawer setHamMenuOpen={setHamMenuOpen}  />
          </div>
        )}

        <li
          className=" px-4  py-4 uppercase tracking-widest border-y
           border-gray-100 hover:border-gray-200 text-[#729b4a]
            hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            toggleDrawer("combo");
          }}
        >
          Combo
        </li>
        {openDrawer === "combo" && (
          <div
            onClick={() => setHamMenuOpen(false)}
            className={`overflow-hidden transition-all duration-300 ${
              openDrawer === "combo" ? "max-h-96" : "max-h-0"
            }`}
          >
            <ComboDrawer setHamMenuOpen={setHamMenuOpen} />
          </div>
        )}

        <Link to={"/bulk-order-inquiry"} onClick={() => setHamMenuOpen(false)}>
          <li className=" px-4  py-4 uppercase tracking-widest border-y border-gray-100 hover:border-gray-200 text-[#729b4a] hover:bg-gray-100 cursor-pointer">
            Bulk order Inquiry
          </li>
        </Link>
        <Link to={"/contact-us"} onClick={() => setHamMenuOpen(false)}>
          <li className=" px-4  py-4 uppercase tracking-widest border-y border-gray-100 hover:border-gray-200 text-[#729b4a] hover:bg-gray-100 cursor-pointer">
            Contact Us
          </li>
        </Link>
      </ul>
      <div
        onClick={() => setHamMenuOpen(false)}
        className=" flex gap-2 py-8 text-[#80ad53]"
      >
        <Link>
          <AiOutlineUser size={28} />
        </Link>
        <p className="uppercase tracking-widest">Account</p>
      </div>
    </div>
  );
};

export default HamMenu;
