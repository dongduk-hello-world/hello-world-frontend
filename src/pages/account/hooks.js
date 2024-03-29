import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

import sha256 from 'crypto-js/sha256';

export const login = async ({ email, password }) => {
  const userId = await axiosPromise.post("/login", { email, password: sha256(password).toString() }, false);
  if (!userId) {
    alert("로그인에 실패했습니다");
    return false;
  } else {
    sessionStorage.setItem('userId', userId);
    console.log(sessionStorage.getItem('userId'));
  }
  return true;
};

export const signup = async ({ email, password, name }) => {
  let type = "";
  const id = email.split('@')[0];
  if(id.length === 8 && !isNaN(Number(id))) type = "학생";
  else type = "교수";


  const fail = await axiosPromise.post("/users", { email, password: sha256(password).toString(), name, type }, true);
  alert(fail);
  if (fail) {
    alert("회원가입에 실패했습니다.");
    return false;
  }
  return true;
};

export const logout = async () => {
  await axiosPromise.get(`/login/logout`);
  
}

let authcode;
export const useEmailAuth = () => {
  const [state, setState] = useState(0);
  const [loading, setLoading] = useState(false);
  const sendMail = async (email) => {
    setLoading(true);
    authcode = await axiosPromise.get(`/email/${email}/auth`);
    setLoading(false);

    setState(1);
  };
  const submitAuthCode = (code) => {
    if (state === 1) {
      console.log(authcode, code);
      if (authcode === code) {
        setState(2);
        alert("인증되었습니다");
      } else {
        alert("인증번호가 일치하지 않습니다");
      }
    }
  };

  return [state, loading, sendMail, submitAuthCode];
};

export const findUserByemail = async (email) => {
  const result = await axiosPromise.get(`/email/${email}`, false);
  console.log(result);
  return result;
};

export const changePassword = async (userId, password) => {
  console.log(sha256(password).toString());
  const fail = await axiosPromise.put(`/users/${userId}/password`, { password: sha256(password).toString() }, true);
  return !fail;
};

export const vaildateEmail = (email) => {
  if (email.indexOf("@") === -1) return "유효한 이메일이 아닙니다.";
  if (email.split("@")[1] != "dongduk.ac.kr") return "학교 메일을 입력하세요";
  return "";
};

export const vaildatePassword = (password) => {
  if (password.length < 8) return "비밀번호가 너무 짧습니다.";
  return "";
};

export const vaildateName = (name) => {
  if (name === "") return "이름을 입력해주세요.";
  return "";
};
