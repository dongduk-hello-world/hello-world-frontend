import React, { Component } from "react";
import styles from "./style.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import axios from "axios";

class Login extends Component {
  render() {
    const signup = (user) => {
      axios
        .post("/users", user)
        .then((response) => {
          console.log(response.data);
          alert(JSON.stringify(response.data));
        })
        .catch((error) => {
          alert(error);
        });
    };

    return (
      <form className={styles.login_container}>
        <h1>SignUp</h1>
        <hr />
        <div className={styles.textField}>
          <TextField
            name="email"
            label="학교 메일"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="comfirmNumber"
            label="인증번호 입력"
            variant="outlined"
            fullWidth
            disabled
          />
          <TextField
            name="password"
            label="비밀번호"
            variant="outlined"
            type="password"
            fullWidth
          />
          <TextField
            name="passwordComfirm"
            label="비밀번호 확인"
            variant="outlined"
            type="password"
            fullWidth
          />
          <TextField name="name" label="이름" variant="outlined" fullWidth />
        </div>
        <div className={styles.moveSignup}>
          계정이 이미 있으신가요?{" "}
          <Link onClick={this.props.changePage}>로그인</Link>
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
            const passwordComfirm = form.passwordComfirm.value;

            if (password != passwordComfirm) {
              alert("비밀번호가 일치하지 않습니다");
              return;
            }
            const name = form.name.value;

            signup({ email, password, name });
          }}
        >
          회원가입
        </Button>
        <div></div>
      </form>
    );
  }
}

export default Login;
