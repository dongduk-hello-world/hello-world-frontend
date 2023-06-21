import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

import sha256 from 'crypto-js/sha256';

export const login = async ({ email, password }) => {
  const fail = await axiosPromise.post("/login", { email, password: sha256(password) }, true);
  if (fail) {
    alert("로그인에 실패했습니다");
    return false;
  }
  return true;
};

export const signup = async ({ email, password, name }) => {
  const fail = await axiosPromise.post("/users", { email, password: sha256(password), name }, true);
  if (fail) {
    alert("회원가입에 실패했습니다.");
    return false;
  }
  return true;
};

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
  const fail = await axiosPromise.put(`/users/${userId}/password`, { password }, true);
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
