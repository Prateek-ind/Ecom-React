import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";

const ShopByCategoryDrawer = ({ setHoverCategory }) => {
  const [hoverCombo, setHoverCombo] = useState(false);
  return (
    <div className="">
      <ul className=" font-semibold">
        <li className="pb-2 hover:text-[#729b4a7a] uppercase">
          <Link to={"/view-All/makhanaSingles"}>Makhana</Link>
        </li>
        <li className="pb-2 hover:text-[#729b4a7a] uppercase">
          <Link to={"/view-All/teaSingles"}>Tea</Link>
        </li>
        <li
          className="relative pb-2 hover:text-[#729b4a7a] uppercase flex items-center justify-between"
          onMouseEnter={() => setHoverCombo(true)}
        >
          Combo <MdKeyboardArrowRight />
        </li>
      </ul>
      {hoverCombo && (
        <div className="absolute top-20 left-full ml-0 px-4 py-2 w-40 bg-[#feffec] border border-[#729b4a4b]">
          <ul>
            <li className="py-2 hover:text-[#729b4a7a] uppercase">
              <Link
                to={"/view-All/makhanaCombo"}
                onClick={() => {
                  setHoverCategory(false);
                  setHoverCombo(false);
                }}
              >
                Makhana Combo
              </Link>
            </li>
            <li className="pb-2 hover:text-[#729b4a7a] uppercase">
              <Link
                to={"/view-All/teaCombo"}
                onClick={() => {
                  setHoverCategory(false);
                  setHoverCombo(false);
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
