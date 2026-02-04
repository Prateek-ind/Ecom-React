import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ViewAllProducts from "./pages/ViewAllProducts";
import { useLocalStorage } from "./hooks/useLocalStorage";
import BulkOrderInquiry from "./pages/BulkOrderInquiry";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import { useAuthInitial } from "@/hooks/useAuthInitial";
import Profile from "./pages/Profile";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import { orderDetailsLoader } from "./features/order/loaders/orderDetailsLoader";

const App = () => {
  useAuthInitial();
  useLocalStorage();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products/:id", element: <ProductDetails /> },
        { path: "view-All/:type/:category", element: <ViewAllProducts /> },
        { path: "cart", element: <Cart /> },
        { path: "cart/checkout", element: <Checkout /> },
        { path: "/bulk-order-inquiry", element: <BulkOrderInquiry /> },
        { path: "/contact-us", element: <ContactUs /> },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "orders",
          element: (
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "orderDetails",
          loader: orderDetailsLoader,
          element: (
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login mode='login' /> },
        { path: "signup", element: <Login mode="signup" /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
