import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import HomePage from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"


const App = () => {
  const router = createBrowserRouter([
    {path: '/', element: <RootLayout/>, children: [
      {index: true, element: <HomePage/>},
      {path: 'product/:id', element: <ProductDetails/>},
      {path: 'cart', element: <Cart/>}
    ]},
    
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App