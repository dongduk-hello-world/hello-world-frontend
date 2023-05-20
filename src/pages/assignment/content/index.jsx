import { useState } from "react";

import styles from "./style.module.scss";

import TestNav from "./nav/testNav";
import TapNav from "./nav/tapNav";

import TestView from "./view/testView";
import SubmitView from "./view/submitView";

export default () => {
  return (
    <div className={styles.content}>
      <div>
        <TestNav></TestNav>
        <TestView />
      </div>
      <div>
        <TapNav></TapNav>
        <SubmitView />
      </div>
    </div>
  );
};
