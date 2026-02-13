import { FiLogOut, FiPackage, FiUser } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { profileActions } from "@/features/users/profileSlice";
import { memo, useEffect, useRef } from "react";
import { authActions } from "@/features/auth/authSlice";

const UserMenuDrawer = memo(({ setUserMenuOpen, setHamMenuOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userMenuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setUserMenuOpen]);

  const onLogout = async () => {
    // dispatch(profileActions.clearProfile());
    dispatch(authActions.logout());
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
      ref={userMenuRef}
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
});

export default UserMenuDrawer;
