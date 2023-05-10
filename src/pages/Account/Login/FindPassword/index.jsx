import * as React from "react";
import styles from "./style.module.scss";

import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link onClick={handleOpen}>비밀번호 찾기</Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.Box}>
          <h3>비밀번호 찾기</h3>
          <p>가입할 때 입력한 이메일로 인증번호를 전송합니다</p>
          <TextField label="이메일" variant="standard" fullWidth />
          <Button variant="contained">인증번호 발송</Button>
          <TextField label="인증번호" variant="standard" fullWidth />
        </Box>
      </Modal>
    </div>
  );
};
