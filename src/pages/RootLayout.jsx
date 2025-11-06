import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer/CartDrawer";

import { useDispatch } from "react-redux";

const RootLayout = () => {
  const dispatch = useDispatch();

  return (
    <>
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
