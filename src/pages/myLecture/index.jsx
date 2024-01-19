import { useLoaderData } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { getUser, getLecture } from "./hooks.js"

import Header from "components/header.jsx"

export const loader = async ({ request }) => {
  const userId = window.sessionStorage.getItem("userId");
  const userdata = await getUser(Number(userId));
  const lecturedata = await getLecture(Number(userId));

  return { userdata, lecturedata };
}

export default () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const lectureCount = data.lecturedata.classes.length;

  useEffect(() => {
    if (lectureCount === 0)
      navigate("/no-lecture");
    else 
      navigate("/my-lecture");
  }, [lectureCount])

  return (
    <div>
      <Header /> 
      <Outlet context={data}/>
    </div>
  );
};
