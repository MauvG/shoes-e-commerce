import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Shoe from "./pages/Shoe";
import ErrorPage from "./pages/ErrorPage";
import CategoryPage from "./pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "Men",
        element: <CategoryPage />,
      },
      {
        path: "Women",
        element: <CategoryPage />,
      },
      {
        path: "Kids",
        element: <CategoryPage />,
      },
      {
        path: "DunkLow",
        element: <Shoe />,
      },
      {
        path: "Airforce1",
        element: <Shoe />,
      },
      {
        path: "AirJordan1Mid",
        element: <Shoe />,
      },
      {
        path: "Revolution6",
        element: <Shoe />,
      },
      {
        path: "AirForce1Shadow",
        element: <Shoe />,
      },
      {
        path: "AirForce107",
        element: <Shoe />,
      },
      {
        path: "AirMax270",
        element: <Shoe />,
      },
      {
        path: "AirMaxSystm",
        element: <Shoe />,
      },
      {
        path: "KidsDunkLow",
        element: <Shoe />,
      },
      {
        path: "Jordan1RetroHighOG",
        element: <Shoe />,
      },
      {
        path: "KidsRevolution6",
        element: <Shoe />,
      },
      {
        path: "FlexRunner2",
        element: <Shoe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
