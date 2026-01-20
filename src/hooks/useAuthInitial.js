import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../features/users/userSlice";

export const useAuthInitial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
    const email = localStorage.getItem("email");

    if (uid && token) {
      dispatch(userActions.autoLogin({ token, uid, email }));
    }
  }, [dispatch]);
};
