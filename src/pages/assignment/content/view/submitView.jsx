import { useState } from "react";

import { Box } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import styles from "../style.module.scss";

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { cpp as c } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

import {
  githubLight,
  githubLightInit,
  githubDark,
  githubDarkInit,
} from "@uiw/codemirror-theme-github";

import { submit } from "../../hooks";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { TestIdxContext } from "pages/assignment/contexts";

export default () => {
  const { tests } = useLoaderData();
  const [ testIdx ] = useContext(TestIdxContext);

  const [languageIdx, setLanguageIdx] = useState(0);
  const language = [c, java, python];
  const languageName = ["c", "java", "python"];
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setLanguageIdx(event.target.value);
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
          value={languageIdx}
          onChange={handleChange}
        >
          <MenuItem value={0}>C</MenuItem>
          <MenuItem value={1}>Java</MenuItem>
          <MenuItem value={2}>Python</MenuItem>
        </Select>
      </FormControl>
      <div style={{ height: "84%" }}>
        <CodeMirror
          // value="console.log('hello world!');"
          height="620px"
          theme={githubLightInit({
            settings: {
              fontFamily: `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace`,
              background: "rgb(250, 250, 250)",
            },
          })}
          extensions={[language[languageIdx]()]}
          onChange={(value, viewUpdate) => setCode(value)}
        />
      </div>
      <span style={{ display: "inline-block", width: "90%" }}></span>
      <Button
        variant="contained"
        size="large"
        onClick={() =>
          submit(tests[testIdx].testId, languageName[languageIdx], code)
        }
      >
        제출
      </Button>
    </div>
  );
};
