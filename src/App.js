import React, { Component } from "react";
import Account from "./pages/Account";
// import axios from "axios";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     message: "none",
  //   };
  // }
  render() {
    return (
      <div>
        <Account />
      </div>
    );
  }
  // componentDidMount() {
  //   axios
  //     .get("/api/example")
  //     .then(({ data }) => {
  //       console.log(data);
  //       this.setState({ message: data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       this.setState({ message: error });
  //     });
  // }
}

export default App;
