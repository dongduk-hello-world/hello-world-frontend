import * as React from "react";
import MediaQuery from 'react-responsive';

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Quiz, Code, ReceiptLong } from "@mui/icons-material";

import styles from "./style.module.scss";

export default ({ view, setView }) => {
  const handleChange = (event, newValue) => {
    setView(newValue);
  };

  return (
    <div className={styles.nav}>
      <MediaQuery minWidth={1200}>
        <Tabs value={view} onChange={handleChange}>
          <Tab label="제출" icon={<Code />} iconPosition="start" />
          <Tab label="기록" icon={<ReceiptLong />} iconPosition="start" />
        </Tabs>
      </MediaQuery>
      <MediaQuery maxWidth={1200}>
        <Tabs value={view} onChange={handleChange}>
          <Tab label="문제" icon={<Quiz />} iconPosition="start" />
          <Tab label="제출" icon={<Code />} iconPosition="start" />
          <Tab label="기록" icon={<ReceiptLong />} iconPosition="start" />
        </Tabs>
      </MediaQuery>
    </div>
  );
};
