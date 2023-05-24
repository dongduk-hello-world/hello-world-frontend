import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";

import Login from "./login";
import Signup from "./signup";
import bodymovin from "bodymovin";

export default () => {
  const [page, setPage] = useState("Login");

  const loginComponent = <Login changePage={() => setPage("SignUp")} />;
  const signupComponent = <Signup changePage={() => setPage("Login")} />;

  const lottieRef = useRef();
  useEffect(() => {
    const animation = bodymovin.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets10.lottiefiles.com/packages/lf20_xafe7wbh.json",
    });
  });
  return (
    <div className={styles.account}>
      <div>
        <div ref={lottieRef} />
      </div>
      <div>
        {page === "Login" && loginComponent}
        {page === "SignUp" && signupComponent}
      </div>
    </div>
  );
};
