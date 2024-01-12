import { useLoaderData } from "react-router-dom";

import { getUser } from "./hook.js"

import Header from "components/header.jsx"
import NoLecture from "./noLecture.jsx";
import MyLecture from "./myLecture.jsx";

export const loader = async ({ request }) => {
  const userId = window.sessionStorage.getItem("userId");
  const userdata = await getUser(Number(userId));
  return userdata;
}

export default () => {
  const userdata = useLoaderData();
  console.log(userdata);

  return (
    <div>
      <Header />
      {/* <NoLecture /> */}
      <MyLecture />
    </div>
  );
};
