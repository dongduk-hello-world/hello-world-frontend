import { useRef, useState } from "react";
import { Button, Modal, TextField } from "@mui/material";
import { Send, VerifiedUser, Password } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./style.module.scss";

import { findUserByemail, useEmailAuth } from "../hooks";

export default ({ open, onClose }) => {
  const refForm = useRef();
  const [process, loading, sendMail, submitAuthCode] = useEmailAuth();
  const [errEmail, setErrEmail] = useState();

  const vaildEmail = (email) => {
    if (email.indexOf("@") === -1) setErrEmail("유효한 이메일이 아닙니다.");
    else if (email.split("@")[1] != "dongduk.ac.kr")
      setErrEmail("학교 메일을 입력하세요");
    else setErrEmail("");
  };

  return (
    <Modal open={open} onClose={onClose} className={styles.modal}>
      <form className={styles.form} ref={refForm}>
        <h3>비밀번호 찾기</h3>
        <p>가입할 때 입력한 이메일로 인증번호를 전송합니다</p>
        <div className={styles.input}>
          <TextField
            label="이메일"
            name="email"
            variant="standard"
            fullWidth
            disabled={process === 2}
            error={errEmail && true}
            helperText={errEmail}
          />
          <Button
            variant="outlined"
            startIcon={loading ? <CircularProgress size={20} /> : <Send />}
            disabled={process === 2}
            onClick={async () => {
              const form = refForm.current;
              const email = form.email.value;
              vaildEmail(email);
              if (errEmail != "") {
                // if (!(await findUserByemail(email))) {
                console.log(sendMail);
                sendMail(email);
                //}
              }
            }}
          >
            {process != 1 ? "전송" : "재전송"}
          </Button>
        </div>
        <div className={styles.input}>
          <TextField
            label="인증번호"
            name="authcode"
            variant="standard"
            fullWidth
            disabled={process != 1}
          />
          <Button
            variant="outlined"
            startIcon={<VerifiedUser />}
            disabled={process != 1}
            onClick={() => {
              const form = refForm.current;
              const authcode = form.authcode.value;
              submitAuthCode(authcode);
            }}
          >
            인증
          </Button>
        </div>
        {process === 2 && (
          <>
            <div className={styles.input}>
              <TextField
                label="새로운 비밀번호"
                type="password"
                name="password"
                variant="standard"
                fullWidth
              />
            </div>
            <div className={styles.input}>
              <TextField
                label="비밀번호 확인"
                type="password"
                name="passwordComfirm"
                variant="standard"
                fullWidth
              />
            </div>
            <Button variant="contained">비밀번호 변경</Button>
          </>
        )}
      </form>
    </Modal>
  );
};
