import { useState } from "react";
import styles from "../style.module.scss";

import Link from "@mui/material/Link";

import Form from "./Form";

export default (props) => {
  return (
    <div className={styles.container}>
      <h1>Sign up</h1>
      <hr />
      <Form />
      <span>
        계정이 이미 있으신가요? <Link onClick={props.changePage}>로그인</Link>
      </span>
    </div>
  );
};
