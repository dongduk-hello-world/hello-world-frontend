import styles from "./style.module.scss";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import TextFieldWithButton from "../../../../components/input/TextFieldWithButton";

import { useVaildateEmail } from "../formHook";

export default (props) => {
  const [refEmail, errEmail] = useVaildateEmail();
  console.log(refEmail.onchange);
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
          <div>
            <div className={styles.input}>
              <TextField
                name="email"
                label="이메일"
                variant="standard"
                fullWidth
                inputRef={refEmail}
                error={errEmail && true}
                helperText={errEmail}
              />
              {/* <Button
                className={styles.button}
                variant="outlined"
                startIcon={<SendIcon />}
              >
                전송
              </Button> */}
            </div>
          </div>

          <TextFieldWithButton
            label="인증번호"
            variant="standard"
            fullWidth
            buttonValue="인증"
            buttonIcon={<VerifiedUserIcon />}
            disabled
          />
        </Box>
      </form>
    </Modal>
  );
};
