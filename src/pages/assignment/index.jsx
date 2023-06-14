import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Header from "./header";
import Content from "./content";

import styles from "./style.module.scss";
import { loadAssignment } from "./hooks";
import { ContextProvider } from "./contexts";

export const loader = async ({ params }) => {
  const assignmentId = params.assignmentId;
  const data = await loadAssignment(assignmentId);
  return data;
};

const submitInit = (num) => {
  const arr = [];
  for(let i = 0; i < num; i++) {
    arr[i] = {languageIdx: 0, code: ""};
  }
  return arr;
};

export default () => {
  const { tests } = useLoaderData();
  const [testIdx, setTestIdx] = useState(0);
  const [submit, setSubmit] = useState(submitInit(tests.length));

  return (
    <ContextProvider 
      testIdxData={[testIdx, setTestIdx]} 
      submitData={[submit, setSubmit]} 
      >
       <div className={styles.assignment}>
        <Header />
        <Content />
      </div>
    </ContextProvider>
  );
};
