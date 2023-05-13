import { useState } from "react";
import styles from "../style.module.scss";

import Link from "@mui/material/Link";

import Form from "./Form";
import ResetPasswordModal from "./ResetPasswordModal";

export default (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <hr />
      <Form />
      <span>
        계정이 없으신가요? <Link onClick={props.changePage}>회원가입</Link>
      </span>
      <span>
        비밀번호를 잊으셨나요?{" "}
        <Link onClick={handleModalOpen}>비밀번호 재설정</Link>
        <ResetPasswordModal open={modalOpen} handleClose={handleModalClose} />
      </span>
    </div>
  );
};
