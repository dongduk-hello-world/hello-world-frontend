import React, { Component } from "react";
import styles from "./style.module.scss";

import Login from "./Login";
import Signup from "./Signup";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true,
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <div></div>
        <div>
          {this.state.login ? (
            <Login changePage={() => this.setState({ login: false })} />
          ) : (
            <Signup changePage={() => this.setState({ login: true })} />
          )}
        </div>
      </div>
    );
  }
}

export default Account;
