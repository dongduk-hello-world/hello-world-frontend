import { createBrowserRouter, redirect } from "react-router-dom";

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
// import Result from "./pages/Result";
import StudentResult from "./pages/Result/Student";
import ProfessorResult from "./pages/Result/Professor";

import ErrorPage from "./error-page";

const checkLogin = () => {
  // if(!sessionStorage.getItem("userId")) return redirect("/account");
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
    path: 'result/:userId/professor',
    element: <ProfessorResult />,
    loader: checkLogin,
    errorElement: <ErrorPage />
  },
  {
    path: 'result/:userId/student',
    element: <StudentResult />,
    loader: checkLogin,
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
