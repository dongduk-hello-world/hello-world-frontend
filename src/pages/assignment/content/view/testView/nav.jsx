import { useContext } from "react";
import { Tabs, Tab } from "@mui/material";
import { Assignment } from "@mui/icons-material";

import { TestIdxContext } from "../../../contexts";

import styles from "./style.module.scss";

export default ({ tests }) => {
  const [idx, setIdx] = useContext(TestIdxContext);

  const handleChange = (event, newValue) => {
    setIdx(newValue);
  };

  return (
    <div className={styles.nav}>
      <Tabs
        value={idx}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tests.map((val, idx) => (
          <Tab
            key={`testNav_${idx}`}
            label={val.name}
            icon={ <Assignment /> }
            iconPosition="start"
          />
        ))}
      </Tabs>
    </div>
  );
};
