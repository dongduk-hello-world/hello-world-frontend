import { useState, useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import { cpp as c } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

import LanguageSelect from "./languageSelect";
import CodeArea from "./codeArea";
import Button from "@mui/material/Button";

import styles from "../../style.module.scss";

import { submit } from "../../../hooks";
import { SubmitContext } from "../../../contexts";

export default ({ testIdx }) => {
  const { tests } = useLoaderData();
  const [ submitData, setSubmitData ] = useContext(SubmitContext);

  const language = [ c, java, python ];

  const [languageIdx, setLanguageIdx] = useState(submitData[testIdx].languageIdx);
  const [code, setCode] = useState(submitData[testIdx].code);

  useEffect(() => {
    setLanguageIdx(submitData[testIdx].languageIdx);
    setCode(submitData[testIdx].code);
  }, [testIdx]);

  return (
    <div className={styles.view}>
      <LanguageSelect 
        languageIdx={languageIdx}
        onChange={(idx) => {
          submitData[testIdx].languageIdx = idx;
          setSubmitData(submitData);
          setLanguageIdx(idx);
        }}/>
      <div style={{ height: "84%" }}>
        <CodeArea 
          language={language[submitData[testIdx].languageIdx]}
          code={submitData[testIdx].code}
          onChange={(code) => {
            submitData[testIdx].code = code;
            setSubmitData(submitData);
            setCode(code);
          }}/>
      </div>
      <span style={{ display: "inline-block", width: "90%" }}></span>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
            let languageName = language[languageIdx].name;
            if (languageName === "cpp") languageName = "c";
            alert(tests[testIdx].testId + "\n" + languageName + "\n" + code);
            submit(tests[testIdx].testId, languageName, code);
        }}
      >
        제출
      </Button>
    </div>
  );
};
