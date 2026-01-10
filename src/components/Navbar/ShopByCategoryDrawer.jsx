import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";

const ShopByCategoryDrawer = ({ setHoverCategory, setHamMenuOpen }) => {
  const [hoverCombo, setHoverCombo] = useState(false);
  return (
    <div className="xl:py-0 py-4">
      <ul className="xl:block flex flex-col gap-2 tracking-widest">
        <li>
          <Link
            to={"/view-All/makhana/singles"}
            className="px-4 py-2 text-[#729b4a] hover:text-[#729b4a7a] uppercase"
            onClick={() => setHamMenuOpen(false)}
          >
            Makhana
          </Link>
        </li>
        <li className="xl:py-2">
          <Link
            to={"/view-All/tea/singles"}
            className="px-4 py-2 text-[#729b4a] hover:text-[#729b4a7a] uppercase"
            onClick={() => setHamMenuOpen(false)}
          >
            Tea
          </Link>
        </li>
        <li
          className="relative px-4 text-[#729b4a] hover:text-[#729b4a7a] uppercase flex items-center justify-between"
          onMouseEnter={() => setHoverCombo(true)}
        >
          Combo <MdKeyboardArrowRight />
        </li>
      </ul>
      {hoverCombo && (
        <div className="absolute top-60 xl:top-20 left-full ml-0 px-4 py-2 w-40 bg-[#feffec] border border-[#729b4a4b]">
          <ul>
            <li className="px-4 py-2 xl:py-1 text-[#729b4a] hover:text-[#729b4a7a] uppercase">
              <Link
                to={"/view-All/makhana/combo"}
                onClick={() => {
                  setHoverCategory(false);
                  setHoverCombo(false);
                  setHamMenuOpen(false);
                }}
              >
                Makhana Combo
              </Link>
            </li>
            <li className="px-4 py-2 xl:py-1 text-[#729b4a] hover:text-[#729b4a7a] uppercase">
              <Link
                to={"/view-All/tea/combo"}
                onClick={() => {
                  setHoverCategory(false);
                  setHoverCombo(false);
                  setHamMenuOpen(false);
                }}
              >
                Tea Combo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShopByCategoryDrawer;
