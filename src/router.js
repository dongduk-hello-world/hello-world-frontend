import { createBrowserRouter } from "react-router-dom";

import Account from "./pages/account";

export default createBrowserRouter([
  {
    path: "/account",
    element: <Account />,
  },
]);
