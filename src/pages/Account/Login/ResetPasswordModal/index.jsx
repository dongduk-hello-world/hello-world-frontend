import styles from "./style.module.scss";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import TextFieldWithButton from "../../TextFieldWithButton";

export default (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form className={styles.form}>
        <Box className={styles.Box}>
          <h3>비밀번호 찾기</h3>
          <p>가입할 때 입력한 이메일로 인증번호를 전송합니다</p>
          <TextFieldWithButton
            name="email"
            label="이메일"
            variant="standard"
            fullWidth
            buttonValue="전송"
            buttonIcon={<SendIcon />}
          />
          <TextFieldWithButton
            label="인증번호"
            variant="standard"
            fullWidth
            button={false}
            buttonValue="인증"
            buttonIcon={<VerifiedUserIcon />}
            disabled
          />
        </Box>
      </form>
    </Modal>
  );
};
