import { FiLogOut, FiPackage, FiUser } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    navigate("/auth/login?mode=login");
  };

  const goToProfile = () => {
    setUserMenuOpen(false);
    setHamMenuOpen(false);

    navigate("/profile");
  };

  const goToOrders = () => {
    setUserMenuOpen(false);
    setHamMenuOpen(false);
    navigate("/orders");
  };
  return (
    <div
      className="bg-white border-t-4 border-x border-b
     border-t-[#729b4a] border-x-[#729b4a4b] "
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="py-4 flex flex-col gap-2">
        <li
          className="flex items-center gap-2 px-2 py-1
           text-[#729b4a] hover:text-[#729b4a7a] uppercase"
          onClick={goToProfile}
        >
          <FiUser />
          Profile
        </li>
        <li
          className="flex items-center gap-2 px-2 py-1
           text-[#729b4a] hover:text-[#729b4a7a] uppercase"
          onClick={goToOrders}
        >
          <FiPackage />
          Orders
        </li>
        <li
          className="flex items-center gap-2 px-2 py-1
           text-[#729b4a] hover:text-[#729b4a7a] uppercase"
          onClick={onLogout}
        >
          <FiLogOut />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default UserMenuDrawer;
