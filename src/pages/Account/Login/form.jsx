import { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useLogin, useVaildateEmail, useVaildatePassword } from "./formHook";

export default () => {
  const [refForm, refSubmit] = useLogin();
  const [refEmail, errEmail] = useVaildateEmail();

  return (
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
      <Button variant="contained" ref={refSubmit}>
        로그인
      </Button>
    </form>
  );
};
