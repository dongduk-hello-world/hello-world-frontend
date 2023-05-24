import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Quiz, Code, ReceiptLong } from "@mui/icons-material";

import TestView from "../view/testView";
import SubmitView from "../view/submitView";
import ResultView from "../view/resultView";

import styles from "./style.module.scss";

export default ({ view, setView }) => {
  const handleChange = (event, newValue) => {
    setView(newValue);
  };

  return (
    <Box
      sx={{
        maxHeight: { sm: 50 },
        minWidth: { xs: 320, sm: 900 },
        bgcolor: "background.paper",
      }}
      className={styles.nav}
    >
      <Tabs value={view} onChange={handleChange}>
        <Tab label="제출" icon={<Code />} iconPosition="start" />
        <Tab label="기록" icon={<ReceiptLong />} iconPosition="start" />
      </Tabs>
    </Box>
  );
};
