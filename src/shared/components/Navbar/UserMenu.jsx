import React, { useState } from "react";
import UserIcon from "./UserIcon";
import UserMenuDrawer from "./UserMenuDrawer";
import { useSelector } from "react-redux";

const UserMenu = ({userMenuOpen, setHamMenuOpen, setUserMenuOpen, navigateToLogin}) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [open, setOpen] = useState(userMenuOpen);

  return (
    <div className="relative" onClick={() => setOpen((prev) => !prev)}>
      <UserIcon navigateToLogin={navigateToLogin}/>

      <div className="absolute -left-5 w-fit mt-12 cursor-pointer">
        {isLoggedIn && open && <UserMenuDrawer close={() => setOpen(false)}
          setHamMenuOpen={setHamMenuOpen} setUserMenuOpen={setUserMenuOpen}/>}
      </div>
    </div>
  );
};

export default UserMenu;
