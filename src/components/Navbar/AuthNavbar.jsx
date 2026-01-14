
import { Link } from "react-router";
const AuthNavbar = () => {


  return (
    <nav className=" w-full top-0 left-0 fixed z-50 mx-auto bg-white">
      <div className="mx-auto max-w-7xl px-4  lg:px-6  xl:px-8 flex justify-center">
        <Link to={"/"}>
          <img
            src="//healthybuddie.com/cdn/shop/files/c62c0830-bad3-46e5-855d-273a3a5bc550.png?v=1744475062&width=1082"
            alt="logo"
            className="w-24"
          />
        </Link>
      </div>
      <hr />
    </nav>
  );
};

export default AuthNavbar;
