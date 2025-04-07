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
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();
          const feedBackRes = await fetch("/happyclients.json");
          const feedBackData = await feedBackRes.json();
          return { servicesData, feedBackData };
        },
      },
      {
        path: "allservices",
        element: <AllServices></AllServices>,
        loader: () => fetch("/service.json"),
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
