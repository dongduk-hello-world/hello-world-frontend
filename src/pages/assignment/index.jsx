import { useState } from "react";
import styles from "./style.module.scss";

import Header from "./header";
import Content from "./content";

export default () => {
  return (
    <div className={styles.assignment}>
      <Header />
      <Content />
    </div>
  );
};
