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
          <Nav view={view} setView={setView}></Nav>
          {pc_views[view]}
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
