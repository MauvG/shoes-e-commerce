import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Men from './pages/Men';
import Shoe from './pages/Shoe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'Men',
        element: <Men />,
      },
      {
        path: 'Shoe',
        element: <Shoe />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


