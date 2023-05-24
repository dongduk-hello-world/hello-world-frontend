import { useState } from "react";

import styles from "./style.module.scss";

import TapNav from "./nav";

import TestView from "./view/testView";

import SubmitView from "./view/submitView";
import ResultView from "./view/resultView";

export default () => {
  const [view, setView] = useState(0);
  const views = [<SubmitView />, <ResultView />];

  return (
    <div className={styles.content}>
      <TestView />
      <div>
        <TapNav view={view} setView={setView}></TapNav>
        {views[view]}
      </div>
    </div>
  );
};
