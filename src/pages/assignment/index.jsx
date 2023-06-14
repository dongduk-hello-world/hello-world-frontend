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

export default () => {
  const { tests } = useLoaderData();
  const [testIdx, setTestIdx] = useState(0);
  const [submit, setSubmit] = useState(new Array(tests.length).fill({languageIdx: 0, code: ""}));
  const [testNav, setTestNav] = useState(new Array(tests.length).fill(false));

  return (
    <ContextProvider 
      testIdxData={[testIdx, setTestIdx]} 
      submitData={[submit, setSubmit]} 
      testNavData={[testNav, setTestNav]}
      >
       <div className={styles.assignment}>
        <Header />
        <Content />
      </div>
    </ContextProvider>
  );
};
