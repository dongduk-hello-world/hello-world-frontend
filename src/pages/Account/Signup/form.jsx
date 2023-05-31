import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Send, VerifiedUser, Password } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";

import TextFieldWithButton from "../../../components/input/TextFieldWithButton";

import styles from "./style.module.scss";

import {
  signup,
  findUserByemail,
  useEmailAuth,
  vaildateEmail,
  vaildatePassword,
  vaildateName,
} from "../hooks";

export default (props) => {
  const navigate = useNavigate();
  const refForm = useRef();

  const [process, loading, sendMail, submitAuthCode] = useEmailAuth();
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errPasswordComfirm, setErrPasswordComfirm] = useState("");
  const [errName, setErrName] = useState("");

  return (
    <form ref={refForm}>
      <div className={styles.input}>
        <TextField
          label="이메일"
          name="email"
          variant="outlined"
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
            console.log(form.email);

            const email = form.email.value;
            setErrEmail(vaildateEmail(email));

            if (errEmail != "") return;

            const result = await findUserByemail(email);
            //if (result === "") {
            if (true) {
              sendMail(email);
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
          variant="outlined"
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
      <TextField
        name="password"
        label="비밀번호"
        variant="outlined"
        type="password"
        fullWidth
        error={errPassword && true}
        helperText={errPassword}
      />
      <TextField
        name="passwordComfirm"
        label="비밀번호 확인"
        variant="outlined"
        type="password"
        fullWidth
        error={errPasswordComfirm && true}
        helperText={errPasswordComfirm}
      />
      <TextField
        name="name"
        label="이름"
        variant="outlined"
        fullWidth
        error={errName && true}
        helperText={errName}
      />
      <Button
        variant="contained"
        onClick={async () => {
          const form = refForm.current;
          if (process != 2) {
            alert("메일 인증을 완료해주세요.");
            return;
          }
          const data = {
            email: form.email.value,
            password: form.password.value,
            name: form.name.value,
          };

          console.log(data);

          setErrPassword(vaildatePassword(data.password));
          if (errPassword != "") {
            console.log("비번 실패1");
            return;
          }

          console.log(data.password != form.passwordComfirm.value);

          if (data.password != form.passwordComfirm.value) {
            setErrPasswordComfirm("비밀번호가 일치하지 않습니다.");
          }
          if (errPasswordComfirm != "") {
            console.log("비번 실패2");
            return;
          }

          console.log("비번 통과2");

          setErrName(vaildateName(data.name));
          if (errName != "") return;

          console.log("이름 통과");

          const result = await signup(data);
          if (result) {
            navigate("/account");
          }
        }}
      >
        회원가입
      </Button>
    </form>
  );
};
