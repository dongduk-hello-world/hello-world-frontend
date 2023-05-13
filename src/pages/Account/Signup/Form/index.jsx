import { useState } from "react";
//import styles from "./style.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import TextFieldWithButton from "../../TextFieldWithButton";

export default (props) => {
  const [email, setEmail] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirm, setPasswordComfirm] = useState("");
  const [name, setName] = useState("");

  return (
    <form>
      <TextFieldWithButton
        name="email"
        label="학교 메일"
        variant="outlined"
        defaultValue={email}
        fullWidth
        buttonValue="전송"
        buttonIcon={<SendIcon />}
      />
      <TextFieldWithButton
        name="authCode"
        label="인증 번호"
        variant="outlined"
        defaultValue={authCode}
        fullWidth
        buttonValue="인증"
        buttonIcon={<VerifiedUserIcon />}
        disabled
      />
      <TextField
        name="password"
        label="비밀번호"
        variant="outlined"
        type="password"
        defaultValue={password}
        fullWidth
      />
      <TextField
        name="passwordComfirm"
        label="비밀번호 확인"
        variant="outlined"
        type="password"
        defaultValue={passwordComfirm}
        fullWidth
      />
      <TextField
        name="name"
        label="이름"
        variant="outlined"
        defaultValue={name}
        fullWidth
      />
      <Button variant="contained">회원가입</Button>
    </form>
  );
};
