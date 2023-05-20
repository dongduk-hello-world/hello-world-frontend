import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import CodeIcon from "@mui/icons-material/Code";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import styles from "./style.module.scss";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <Tabs value={value} onChange={handleChange}>
        <Tab label="제출" icon={<CodeIcon />} iconPosition="start" />
        <Tab label="기록" icon={<ReceiptLongIcon />} iconPosition="start" />
      </Tabs>
    </Box>
  );
}
