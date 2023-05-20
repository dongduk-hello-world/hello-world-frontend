import { useState } from "react";

import { Box } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import styles from "../style.module.scss";

export default () => {
  const [language, setLanguage] = useState("10");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={styles.view}>
      <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
        {/* <InputLabel variant="standard" id="demo-simple-select-filled-label">
          언어
        </InputLabel> */}
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={language}
          onChange={handleChange}
        >
          <MenuItem value={10}>C</MenuItem>
          <MenuItem value={20}>Java</MenuItem>
          <MenuItem value={30}>Python</MenuItem>
        </Select>
      </FormControl>
      <div style={{ height: "84%" }}></div>
      <span style={{ display: "inline-block", width: "90%" }}></span>
      <Button variant="contained" size="large">
        제출
      </Button>
    </div>
  );
};
