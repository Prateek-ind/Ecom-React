import { FiLogOut, FiPackage, FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "../../features/users/userSlice";
import { profileActions } from "../../features/users/profileSlice";

const UserMenuDrawer = ({ setUserMenuOpen, setHamMenuOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = async () => {
    dispatch(profileActions.clearProfile());
    dispatch(userActions.logout());
    setUserMenuOpen(false);
    setHamMenuOpen(false);
    navigate("/auth/login?mode=signup");
  };
  return (
    <div className="bg-white border-t-4 border-x border-b border-t-[#729b4a] border-x-[#729b4a4b] ">
      <ul className="py-4 flex flex-col gap-2">
        <li>
          <Link
            to={"/profile"}
            className="flex items-center gap-2 px-2 py-1
           text-[#729b4a] hover:text-[#729b4a7a] uppercase"
            onClickCapture={() => {
              setHamMenuOpen(false);
              setUserMenuOpen(false);
            }}
          >
            <FiUser />
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={"/orders"}
            className="flex items-center gap-2 px-2 py-1
           text-[#729b4a] hover:text-[#729b4a7a] uppercase"
            onClickCapture={() => {
              setHamMenuOpen(false);
              setUserMenuOpen(false);
            }}
          >
            <FiPackage />
            Orders
          </Link>
        </li>
        <li>
          <Link
            to={"/auth/login?mode=login"}
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
