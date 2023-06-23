import { createBrowserRouter, redirect } from "react-router-dom";
import { isLogin } from "./services/axiosPromise";

import Account from "./pages/account";
import Login from "./pages/account/login";
import Signup from "./pages/account/signup";

import Assignment, { loader as assignmentLoader } from "./pages/assignment";
import NewAssignment, { loader as newAssignmentLoader } from "./pages/newAssignment";

import ClassRoom from "./pages/ClassRoom";
import Lecture from "./pages/Lecture";
import ProfessorLecture from "./pages/Lecture/professor";
import StudentLecture from "./pages/Lecture/student";
import NewLecture from "./pages/Lecture/professor/Form";
import Result, { loader as resultLoader } from "./pages/Result";

import ErrorPage from "./error-page";

const checkLogin = () => { 
//  if(!(await isLogin())) return redirect("/account");
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
    element: <Lecture />,
    loader: checkLogin,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "professor",
        element: <ProfessorLecture />,
        errorElement: <ErrorPage />,
      },
      {
        path: "student",
        element: <StudentLecture />,
        errorElement: <ErrorPage />,
      },
    ]
  },
  {
    path: '/classes/:classId',
    element: <ClassRoom />,
    loader: checkLogin,
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
  // {
  //   path: 'result/:userId',
  //   element: <Result />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "student",
  //       element: <StudentResult />,
  //     },
  //     {
  //       path: "professor",
  //       element: <ProfessorResult />,
  //     },
  //   ]
  // }
]);
