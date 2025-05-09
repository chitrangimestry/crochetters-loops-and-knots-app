import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import CartPage from "./pages/Cart";
import SigninPage from "./pages/Signin.jsx";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/Signup";
import ProductDetailsPage from "./pages/ProductDetails.jsx";
import AboutUsPage from "./pages/About.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
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
          path: "/about-us",
          element: <AboutUsPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/product-detail/:id",
          element: <ProductDetailsPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
