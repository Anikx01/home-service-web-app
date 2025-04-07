import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../componens/MainLayout/MainLayout";
import Home from "../componens/Home/Home";

import AllServices from "../componens/AllServices/AllServices";
import Profile from "../componens/Profile/Profile";
import MyBookings from "../componens/MyBookings/MyBookings";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allservices",
        element: <AllServices></AllServices>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "/mybookings",
        element: <MyBookings></MyBookings>,
      },
    ],
  },
]);

export default router;
