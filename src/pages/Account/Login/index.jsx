import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useLogin, useVaildateEmail } from "../hooks";

import styles from "../style.module.scss";

import Modal from "./modal";

export default (props) => {
  const [modal, setModal] = useState(false);
  // const handleModalOpen = () => setModalOpen(true);
  // const handleModalClose = () => setModalOpen(false);

  const refForm = useLogin();
  const refEmail = useRef();
  const errEmail = useVaildateEmail(refEmail);

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
          inputRef={refEmail}
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
          onClick={() => {
            //console.log(refForm.current.onsubmit);
            refForm.current.onsubmit();
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
