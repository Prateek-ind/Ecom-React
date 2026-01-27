import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../features/users/userSlice";

export const useAuthInitial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
    const email = localStorage.getItem("email");
    const expiry = localStorage.getItem("tokenExpiry");

    if (!token || !uid || !expiry) return;

    if (Date.now() > Number(expiry)) {
      localStorage.removeItem("token");
      localStorage.removeItem("uid");
      localStorage.removeItem("email");
      localStorage.removeItem("tokenExpiry");
      return;
    }

    if (uid && token) {
      dispatch(
        userActions.autoLogin({ token, uid, email, tokenExpiry: expiry })
      );
    }
  }, [dispatch]);
};
