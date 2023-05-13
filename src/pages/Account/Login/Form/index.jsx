import { useState } from "react";
import styles from "./style.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <TextField
        name="email"
        label="학교 메일"
        variant="outlined"
        defaultValue={email}
        fullWidth
      />
      <TextField
        name="password"
        label="비밀번호"
        variant="outlined"
        type="password"
        defaultValue={password}
        fullWidth
      />
      <Button variant="contained">로그인</Button>
    </form>
  );
};
