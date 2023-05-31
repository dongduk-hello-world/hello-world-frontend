import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { login, vaildateEmail } from "../hooks";

import styles from "../style.module.scss";

import Modal from "./modal";

export default (props) => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const refForm = useRef();
  const [errEmail, setErrEmail] = useState();

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <hr />
      <form ref={refForm}>
        <TextField
          name="email"
          label="학교 메일"
          variant="outlined"
          fullWidth
          error={errEmail && true}
          helperText={errEmail}
        />
        <TextField
          name="password"
          label="비밀번호"
          variant="outlined"
          type="password"
          fullWidth
        />
        <Button
          variant="contained"
          onClick={async () => {
            const form = refForm.current;
            const data = {
              email: form.email.value,
              password: form.password.value,
            };

            setErrEmail(vaildateEmail(data.email));
            if (errEmail != "") return;

            const result = await login(data);
            if (result) navigate("/");
          }}
        >
          로그인
        </Button>
      </form>
      <span>
        계정이 없으신가요? <Link to="signup">회원가입</Link>
      </span>
      <span>
        비밀번호를 잊으셨나요?{" "}
        <Link onClick={() => setModal(true)}>비밀번호 재설정</Link>
        <Modal open={modal} onClose={() => setModal(false)} />
      </span>
    </div>
  );
};
