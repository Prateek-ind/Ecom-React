import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar/Navbar";
import Footer from "../shared/components/Footer";
import CartDrawer from "@/features/cart/components/CartDrawer";
import ScrollToTop from "../shared/components/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
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
