import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../features/users/userSlice";

export const useAuthInitial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const email = localStorage.getItem("email");

    if (userId && token) {
      dispatch(userActions.autoLogin({ token, userId, email }));
    }
  }, [dispatch]);
};
