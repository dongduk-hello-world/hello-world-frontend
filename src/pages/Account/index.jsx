import React, { Component } from "react";
import styles from "../../styles/Account.module.scss";

import Login from "./Login";

class Account extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div></div>
        <div>
          <Login />
        </div>
      </div>
    );
  }
}

export default Account;
