import React, { Component } from "react";
import styles from "./style.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import FindPassword from "./FindPassword";

import axios from "axios";

class Login extends Component {
  render() {
    const login = (loginInfo) => {
      axios
        .post("/login", loginInfo)
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    };

    return (
      <form className={styles.login_container}>
        <h1>Login</h1>
        <hr />
        <div className={styles.textField}>
          <TextField
            name="email"
            label="학교 메일"
            variant="outlined"
            fullWidth
          ></TextField>
          <TextField
            name="password"
            label="비밀번호"
            variant="outlined"
            type="password"
            fullWidth
          />
        </div>
        <div className={styles.moveSignup}>
          계정이 없으신가요?{" "}
          <Link onClick={this.props.changePage}>회원가입</Link>
        </div>
        <Button
          variant="contained"
          onClick={() => {
            const form = document.querySelector(`.${styles.login_container}`);
            const email = form.email.value;
            if (
              email.indexOf("@") === -1 ||
              email.split("@")[1] != "dongduk.ac.kr"
            ) {
              alert("학교 메일을 입력하세요");
              return;
            }
            const password = form.password.value;
            login({ email, password });
          }}
        >
          로그인
        </Button>
        <div>
          <FindPassword />
        </div>
      </form>
    );
  }
}

export default Login;
