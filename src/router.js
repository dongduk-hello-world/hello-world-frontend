import { createBrowserRouter, redirect } from "react-router-dom";
import { isLogin } from "./services/axiosPromise";

import Account from "./pages/account";
import Login from "./pages/account/login";
import Signup from "./pages/account/signup";

import Assignment, { loader as assignmentLoader } from "./pages/assignment";
import NewAssignment, { loader as newAssignmentLoader } from "./pages/newAssignment";

import ClassRoom, { loader as classLoader } from "./pages/ClassRoom";
import Lecture, { loader as lectureLoader } from "./pages/Lecture";
import NewLecture from "./pages/Lecture/professor/Form";
import HomeUI, { loader as homeLoader } from "./pages/homeUI";
import Result, { loader as resultLoader } from "./pages/Result";

import ErrorPage from "./error-page";

const checkLogin = async () => { 
  if(!(await isLogin())) return redirect("/account");
  return null;
}

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
    element: <HomeUI />,
    loader: homeLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Lecture />,
        loader: lectureLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'classes/:classId',
        element: <ClassRoom />,
        loader: classLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'classes/add-class',
        element: <NewLecture />,
        loader: checkLogin,
        errorElement: <ErrorPage />,
      },
      {
        path: 'result/:assignmentId',
        element: <Result />,
        loader: resultLoader,
        errorElement: <ErrorPage />
      },
      {
        path: 'test/:userId',
        element: <HomeUI />,
        loader: resultLoader,
        errorElement: <ErrorPage />
      },
    ]
  }
]);
