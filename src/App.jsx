import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import MainHeaderNavigation from "./components/MainHeaderNavigation";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ShopPage from "./pages/Shop";
import CartPage from "./pages/Cart";
import SigninPage from "./pages/SignIn";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/signin",
          element: <SigninPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
