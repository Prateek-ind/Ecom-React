import { Link } from "react-router";

const ViewAllBtn = ({ category }) => {
  return (
    <Link to={`/view-All/${category}`}>
      <button
        className="px-10 py-3 bg-[#63ce36] text-sm  border border-green-500
    tracking-widest text-white mt-12 uppercase hover:scale-105 transition-all duration-500 hover:bg-gradient-to-l  hover:from-green-500 hover:to-green-800
         hover:text-white"
      >
        View All
      </button>
    </Link>
  );
};

export default ViewAllBtn;
