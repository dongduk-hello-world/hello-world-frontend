import { createBrowserRouter } from "react-router-dom";

import Account from "./pages/account";
import Login from "./pages/account/login";
import Signup from "./pages/account/signup";

import Assignment, { loader as assignmentLoader } from "./pages/assignment";
import NewAssignment, { loader as newAssignmentLoader } from "./pages/newAssignment";

import ClassRoom from "./pages/ClassRoom";
import Lecture from "./pages/Lecture";
import NewLecture from "./pages/Lecture/professor/Form";
import Result from "./pages/Result";

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
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/assignment/:assignmentId",
    element: <Assignment />,
    loader: assignmentLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/newAssignment/:classId",
    element: <NewAssignment />,
    loader: newAssignmentLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <Lecture />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/classes/:classId',
    element: <ClassRoom />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'classes/add-class',
    element: <NewLecture />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'result/:userId',
    element: <Result />,
    errorElement: <ErrorPage />,
  }
]);
