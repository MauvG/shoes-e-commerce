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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
