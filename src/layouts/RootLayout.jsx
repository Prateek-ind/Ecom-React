import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer/CartDrawer";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {

  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <main>
        <CartDrawer />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
