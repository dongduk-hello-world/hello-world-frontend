import { useState } from "react";

import Timer from "./timer";

import styles from "./style.module.scss";
import { AppBar, Toolbar, Button } from "@mui/material";

export default () => {
  return (
    <AppBar className={styles.header}>
      <Toolbar position="fixed">
        <div>알고리즘: 중간고사</div>
        <div>
          <Timer />
          <Button color="secondary" variant="contained">
            시험 종료
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
