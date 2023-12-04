import Header from "components/header.jsx"
import NoLecture from "./noLecture.jsx";
import MyLecture from "./myLecture.jsx";

export default () => {
  return (
    <div>
      <Header />
      {/* <NoLecture /> */}
      <MyLecture />
    </div>
  );
};
