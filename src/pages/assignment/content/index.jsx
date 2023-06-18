import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import MediaQuery from 'react-responsive';

import styles from "./style.module.scss";

import Nav from "./nav";

import TestView from "./view/testView";
import SubmitView from "./view/submitView";
import ResultView from "./view/resultView";

import TestViewContent from "./view/testView/content";
import TestViewNav from "./view/testView/nav";

import { TestIdxContext } from "../contexts";

export default () => {
  const { tests } = useLoaderData();
  const [ testIdx ] = useContext(TestIdxContext);
  const [view, setView] = useState(0);
  const pc_views = [<SubmitView testIdx={testIdx}/>, <ResultView testIdx={testIdx}/>];
  const moblie_views = [<TestViewContent test={tests[testIdx]}/>, <SubmitView testIdx={testIdx}/>, <ResultView testIdx={testIdx}/>];

  return (
    <div className={styles.content}>
      <MediaQuery minWidth={1200}>
        <div className={styles.pc_view}>
          <TestView />
        </div>
        <div className={styles.pc_view}>
          <Nav view={view === 2 ? 1 : view} setView={setView}></Nav>
          {pc_views[view === 2 ? 1 : view]}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1200}>
        <div className={styles.moblie_view}>
          <Nav view={view} setView={setView}></Nav>
          <TestViewNav tests={tests}/>
          {moblie_views[view]}
        </div>
      </MediaQuery>
    </div>
  );
};