import { createBrowserRouter } from "react-router-dom";

import Account from "pages/account";
import Assignment from "pages/assignment";

import ErrorPage from "./error-page";

export default createBrowserRouter([
  {
    path: "/account",
    element: <Account />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/assignment",
    element: <Assignment />,
    errorElement: <ErrorPage />,
  },
]);
