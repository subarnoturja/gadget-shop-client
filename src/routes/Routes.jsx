import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Dashboardlayout from "../layouts/Dashboardlayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../pages/dashboard/Overview";
import SellerRoute from "./private/SellerRoute";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import AddProducts from "../pages/dashboard/seller/AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboardlayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard/overview',
        element: <Overview />,
      },
      // Seller Routes
      {
        path: '/dashboard/my-products',
        element: <SellerRoute><MyProducts /></SellerRoute>,
      },
      {
        path: '/dashboard/add-products',
        element: <SellerRoute><AddProducts /></SellerRoute>,
      },
    ],
  },
]);

export default router;
