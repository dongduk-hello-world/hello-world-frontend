import { createBrowserRouter } from "react-router-dom";

import Account from "pages/account";
import Login from "pages/account/login";
import Assignment from "pages/assignment";

import ErrorPage from "./error-page";

export default createBrowserRouter([
  {
    path: "/account",
    element: <Account />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "/assignment",
    element: <Assignment />,
    errorElement: <ErrorPage />,
  },
]);
