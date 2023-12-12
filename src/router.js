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
  }
  // {
  //   path: '/',
  //   element: <HomeUI />,
  //   loader: homeLoader,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "professor",
  //       element: <ProfessorLecture />,
  //       loader: homeLoader,
  //       errorElement: <ErrorPage />,
  //     },
  //     {
  //       path: "student",
  //       element: <StudentLecture />,
  //       loader: homeLoader,
  //       errorElement: <ErrorPage />,
  //     },
  //   ]
  // },
  // {
  //   path: '/classes/:classId',
  //   element: <ClassRoom />,
  //   loader: classLoader,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: 'classes/add-class',
  //   element: <NewLecture />,
  //   loader: checkLogin,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: 'result/:assignmentId',
  //   element: <Result />,
  //   loader: resultLoader,
  //   errorElement: <ErrorPage />
  // },
  // {
  //   path: 'test/:userId',
  //   element: <HomeUI />,
  //   loader: resultLoader,
  //   errorElement: <ErrorPage />
  // },
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
