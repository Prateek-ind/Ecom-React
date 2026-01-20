import { FiLogOut, FiPackage, FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "../../features/users/userSlice";
import { profileActions } from "../../features/users/profileSlice";

const UserMenuDrawer = ({ setUserMenuOpen }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const onLogout = async () => {
    dispatch(profileActions.clearProfile());
    dispatch(userActions.logout());
    setUserMenuOpen(false);
    console.log(isLogin);
    navigate("/auth/login");
  };
  return (
    <div className=" border-t-4 border-x border-b border-t-[#729b4a] border-x-[#729b4a4b] ">
      <ul className="py-4 flex flex-col gap-2">
        <li>
          <Link
            to={"/profile"}
            className="flex items-center gap-2 px-2 py-1
           text-[#729b4a] hover:text-[#729b4a7a] uppercase"
            onClick={() => setUserMenuOpen(false)}
          >
            <FiUser />
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={"/profile"}
            className="flex items-center gap-2 px-2 py-1
           text-[#729b4a] hover:text-[#729b4a7a] uppercase"
            onClick={() => setUserMenuOpen(false)}
          >
            <FiPackage />
            Orders
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className="flex items-center gap-2 px-2 py-1
           text-[#729b4a] hover:text-[#729b4a7a] uppercase"
            onClick={onLogout}
          >
            <FiLogOut />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenuDrawer;
