import { useState } from "react";
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
  const [testIdx, setTestIdx] = useState(0);

  return (
    <ContextProvider testIdxData={[testIdx, setTestIdx]}>
       <div className={styles.assignment}>
        <Header />
        <Content />
      </div>
    </ContextProvider>
  );
};
