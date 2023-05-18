import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Men from "./pages/Men";
import Shoe from "./pages/Shoe";
import ErrorPage from "./pages/ErrorPage";
import Kids from "./pages/Kids";
import Women from "./pages/Women";

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
        element: <Men />,
      },
      {
        path: "Women",
        element: <Women />,
      },
      {
        path: "Kids",
        element: <Kids />,
      },
      {
        path: "DunkLow",
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
