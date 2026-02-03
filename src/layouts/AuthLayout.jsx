import ScrollToTop from "@/shared/components/ScrollToTop";
import { Outlet } from "react-router";
import Footer from "@/shared/components/Footer";
import AuthNavbar from "@/shared/components/Navbar/AuthNavbar";

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
