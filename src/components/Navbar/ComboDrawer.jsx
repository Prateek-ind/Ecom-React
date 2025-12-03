import React from "react";
import { Link } from "react-router";

const ComboDrawer = ({ setHamMenuOpen }) => {
  return (
    <div className="xl:py-0 py-4">
      <ul className="xl:block flex flex-col gap-4">
        <li className="py-1">
          {" "}
          <Link
            to={"/view-All/makhanaCombo"}
            onClick={() => setHamMenuOpen(false)}
            className="px-4 text-[#729b4a] hover:text-[#729b4a7a] uppercase"
          >
            Makhana Combo
          </Link>
        </li>
        <li className="py-1">
          <Link
            to={"/view-All/teaCombo"}
            onClick={() => setHamMenuOpen(false)}
            className="px-4 text-[#729b4a] hover:text-[#729b4a7a] uppercase"
          >
            Tea Combo
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ComboDrawer;
