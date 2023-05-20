import { useState } from "react";

import { Chip } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";

import styles from "./style.module.scss";

export default () => {
  return (
    <Chip
      className={styles.timer}
      icon={<TimerIcon color="action" />}
      label="10:10:10"
    />
  );
};
