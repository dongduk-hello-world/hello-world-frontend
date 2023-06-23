import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../style.module.scss";

import Form from "./form";

export default (props) => {
  return (
    <div className={styles.container}>
      <h1>Sign up</h1>
      <hr />
      <Form />
      <span>
        계정이 이미 있으신가요? <Link to="/account" replace={true}>로그인</Link>
      </span>
    </div>
  );
};
