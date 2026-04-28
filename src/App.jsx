import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
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
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient";
import RootErrorPage from "./shared/components/RootErrorPage";
import ProductDetailsSkeleton from "./shared/components/ProductDetailsSkeleton";
import CartSkeleton from "./features/cart/components/cartSkeleton";
import CheckoutSkeleton from "./shared/components/CheckoutSkeleton";
import ViewAllProductsSkeleton from "./features/product/components/ViewAllProductsSkeleton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={<ProductDetailsSkeleton />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "view-All/:type/:category",
        element: (
          <Suspense fallback={<ViewAllProductsSkeleton />}>
            <ViewAllProducts />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<CartSkeleton />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "cart/checkout",
        element: (
          <Suspense fallback={<CheckoutSkeleton />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/bulk-order-inquiry",
        element: (
          <ProtectedRoute>
            <BulkOrderInquiry />
          </ProtectedRoute>
        ),
      },
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
      { path: "login", element: <Login mode="login" /> },
      { path: "signup", element: <Login mode="signup" /> },
    ],
  },
]);

const App = () => {
  useAuthInitial();
  useLocalStorage();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
