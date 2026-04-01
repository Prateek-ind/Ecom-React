
import { Link } from "react-router-dom";

const ComboDrawer = ({ setHamMenuOpen=()=>{} }) => {

  const handleHamMenuOpen = ()=>{
    setHamMenuOpen(false)
  }
  return (
    <div className="xl:py-0 py-4">
      <ul className="xl:block flex flex-col gap-4">
        <li className="py-1">
          {" "}
          <Link
            to="/view-All/makhana/combo"
            onClick={handleHamMenuOpen}
            className="px-4 text-[#729b4a] hover:text-[#729b4a7a] uppercase"
          >
            Makhana Combo
          </Link>
        </li>
        <li className="py-1">
          <Link
            to={"/view-All/tea/combo"}
            onClick={handleHamMenuOpen}
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
