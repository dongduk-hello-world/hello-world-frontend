import styles from "./form.module.scss";

import { useState } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default () => {

  return (
    <div className={styles.frame}>
      <div className={styles.form}>
        <form>
          <Typography variant="h6" gutterBottom>1. 생성할 과목의 이름을 입력해주세요.</Typography>
          <TextField
            required
            id="filled-required"
            label="과목명 입력"
            defaultValue=""
            fullWidth
            variant="filled"
          />
          <Box sx={{height: 50}} />
          <Typography variant="h6" gutterBottom>2. 과목을 개설하는 사람의 이름을 입력해주세요.(본인 이름 입력)</Typography>
          <TextField
            required
            id="filled-required"
            label="이름 입력"
            defaultValue=""
            fullWidth
            variant="filled"
          />
          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              size="large"
              disabled
            >
              이전
            </Button>
            <Button
              variant="contained"
              size="large"
            >
              다음
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
