import React, { Component } from "react";
import styles from "../../../styles/Account.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

class Login extends Component {
  render() {
    return (
      <div className={styles.login_container}>
        <h1>Login</h1>
        <hr />
        <div className={styles.textField}>
          <TextField label="아이디" variant="outlined" fullWidth />
          <TextField
            label="비밀번호"
            variant="outlined"
            type="password"
            fullWidth
          />
        </div>
        <div className={styles.moveSignup}>
          계정이 없으신가요? <Link href="#">회원가입</Link>
        </div>
        <Button variant="contained">로그인</Button>
        <div>
          <Link href="#">비밀번호 찾기</Link>
        </div>
      </div>
    );
  }
}

export default Login;
