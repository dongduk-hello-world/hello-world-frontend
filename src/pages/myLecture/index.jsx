import { useLoaderData } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { getUser, getLecture } from "./hook.js"

import Header from "components/header.jsx"


export const loader = async ({ request }) => {
  const userId = window.sessionStorage.getItem("userId");
  const userdata = await getUser(Number(userId));
  const lecturedata = await getLecture(Number(userId));

  return { userdata, lecturedata };
}

export default () => {
  const navigate = useNavigate();
  const { userdata, lecturedata } = useLoaderData();
  const lecturelist = lecturedata.classes;

  useEffect(() => {
    if (lecturelist.length === 0)
      navigate("/no-lecture");
    else 
      navigate("/my-lecture");
  }, [lecturelist.length])

  return (
    <div>
      <Header /> 
      { lecturelist.length === 0 && navigate("/no-lecture") }
      <Outlet />
    </div>
  );
};
