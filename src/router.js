import { createBrowserRouter, redirect } from "react-router-dom";
import { isLogin } from "./services/axiosPromise";

import Account from "./pages/account";
import Login from "./pages/account/login";
import Signup from "./pages/account/signup";


import Assignment, { loader as assignmentLoader } from "./pages/assignment";
import NewAssignment, { loader as newAssignmentLoader } from "./pages/newAssignment";

import MyLecture, { loader as myLectureLoader } from "./pages/myLecture";
import NewLecture from "./pages/newLecture";
import SearchLecture from "./pages/searchLecture";
import Classroom from "./pages/classroom";
import Result from "./pages/result/student";
import ResultStudent from "./pages/result/student.jsx";
import ResultProfessor from "./pages/result/professor.jsx";

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
    element: <MyLecture />,
    // loader: myLectureLoader,
    errorElement: <ErrorPage />
  },
  {
    path: '/newLecture',
    element: <NewLecture />,
    errorElement: <ErrorPage />
  },
  {
    path: '/search',
    element: <SearchLecture />,
    errorElement: <ErrorPage />
  },
  {
    path: '/classroom',
    element: <Classroom />,
    errorElement: <ErrorPage />
  },
  {
    path: '/result',
    // element: <Result />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "student",
        element: <ResultStudent />,
      },
      {
        path: "professor",
        element: <ResultProfessor />,
      },
    ],
  }
]);
