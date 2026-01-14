
import ScrollToTop from "../components/ScrollToTop";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import AuthNavbar from "../components/Navbar/AuthNavbar";

const AuthLayout = () => {
  return (
    <>
      <ScrollToTop />
      <AuthNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
