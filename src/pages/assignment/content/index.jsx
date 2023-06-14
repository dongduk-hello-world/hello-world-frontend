import { useState, useContext } from "react";

import styles from "./style.module.scss";

import Nav from "./nav";

import TestView from "./view/testView";
import SubmitView from "./view/submitView";
import ResultView from "./view/resultView";

import { TestIdxContext } from "../contexts";

export default () => {
  const [ testIdx ] = useContext(TestIdxContext);
  const [view, setView] = useState(0);
  const views = [<SubmitView testIdx={testIdx}/>, <ResultView testIdx={testIdx}/>];

  return (
    <div className={styles.pc_content}>
      <TestView />
      <div>
        <Nav view={view} setView={setView}></Nav>
        {views[view]}
      </div>
    </div>
  );
};

const PC_content = () => {
  const [view, setView] = useState(0);
  const views = [<SubmitView />, <ResultView />];

  return (
    <div className={styles.pc_content}>
      <TestView />
      <div>
        <Nav view={view} setView={setView}></Nav>
        {views[view]}
      </div>
    </div>
  );
}

const Moblie_content = () => {
  const [view, setView] = useState(0);
  const views = [<TestView />, <SubmitView />, <ResultView />];

  return (
    <div className={styles.moblie_content}>
      <div>
        <Nav view={view} setView={setView}></Nav>
        {views[view]}
      </div>
    </div>
  );
}
