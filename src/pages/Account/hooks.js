import { useState, useEffect, useRef } from "react";
import axios from "axios";

const get = (uri, data) => {
  return new Promise((resolve) =>
    axios
      .get(uri, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve("");
      })
  );
};

const post = (uri, data) => {
  return new Promise((resolve) =>
    axios
      .post(uri, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve("");
      })
  );
};

export const useLogin = () => {
  const refForm = useRef();
  useEffect(() => {
    const form = refForm.current;
    form.onsubmit = async () => {
      const data = {
        email: form.email.value,
        password: form.password.value,
      };
      const result = await post("/login", data);
      if (!result) {
        alert("로그인에 실패했습니다");
        return;
      }
      window.location.href = "/";
    };
  });
  return refForm;
};

let authcode;
export const useEmailAuth = () => {
  const [state, setState] = useState(0);
  const [loading, setLoading] = useState(false);
  const sendMail = async (email) => {
    setLoading(true);
    authcode = await get(`/email/${email}/auth`);
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
  const result = await get(`/email/${email}`);
  return result != "";
};

export const useVaildateEmail = (ref) => {
  const [err, setErr] = useState("");

  useEffect(() => {
    const email = ref.current;
    if (email) {
      email.onchange = (e) => {
        setErr(vaildateEmail(e.target.value));
      };
    }
  });

  return err;
};

const vaildateEmail = (email) => {
  if (email.indexOf("@") === -1) return "유효한 이메일이 아닙니다.";
  if (email.split("@")[1] != "dongduk.ac.kr") return "학교 메일을 입력하세요";
  return "";
};
