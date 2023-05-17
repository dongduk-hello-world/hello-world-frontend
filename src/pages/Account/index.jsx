import { useState } from "react";
import styles from "./style.module.scss";

import Login from "./login";
import Signup from "./signup";

export default () => {
  const [page, setPage] = useState("Login");

  const loginComponent = <Login changePage={() => setPage("SignUp")} />;
  const signupComponent = <Signup changePage={() => setPage("Login")} />;

  return (
    <div className={styles.account}>
      <div></div>
      <div>
        {page === "Login" && loginComponent}
        {page === "SignUp" && signupComponent}
      </div>
    </div>
  );
};
