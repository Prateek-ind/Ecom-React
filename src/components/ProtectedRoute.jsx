
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.userId);
  return isLoggedIn ? children : <Navigate to={"/auth/login"} replace />;
};

export default ProtectedRoute;
