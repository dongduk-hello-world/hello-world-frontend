import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  let userId;
  let authCode;
  const sendEmail = (email) => {
    fetch(`/email/password/${email}`)
      .then((response) => response.text())
      .then((message) => {
        userId = message[0];
        authCode = message[1];

        alert("메일을 보냈습니다! 인증 번호를 입력해주세요!");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <form
            id="emailForm"
            onSubmit={(e) => {
              e.preventDefault();

              const email = e.target.childNodes[1].value;
              sendEmail(email);
            }}
          >
            <div>이메일을 입력하세요</div>
            <input type="text"></input>
            <input type="submit" value="제출"></input>
          </form>
        </p>
        <p>
          <form
            id="AuthForm"
            onSubmit={(e) => {
              e.preventDefault();

              const code = e.target.childNodes[1].value;
              if (authCode === code) alert("인증에 성공했습니다!");
              else alert("인증에 실패했습니다!");
            }}
          >
            <div>인증번호를 입력하세요</div>
            <input type="text"></input>
            <input type="submit" value="제출"></input>
          </form>
        </p>
      </header>
    </div>
  );
}

export default App;
