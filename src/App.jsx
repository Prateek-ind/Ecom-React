import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ViewAllProducts from "./pages/ViewAllProducts";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  useLocalStorage()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products/:id", element: <ProductDetails /> },
        { path: "view-All/:category", element: <ViewAllProducts /> },
        { path: "cart", element: <Cart /> },
        { path: "cart/checkout", element: <Checkout /> },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;
