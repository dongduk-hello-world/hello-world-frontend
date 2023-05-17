import { useState, useEffect, createRef } from "react";
import axios from "axios";

export function useLogin() {
  const refForm = createRef();
  const refSubmit = createRef();

  useEffect(() => {
    if (refSubmit.current) {
      refSubmit.current.onclick = async function () {
        const form = refForm.current;
        const data = {
          email: form.email.value,
          password: form.password.value,
        };

        if (vaildateEmail(data.email) || vaildatePassword(data.password))
          return;

        const response = await formSubmit("/login", data);
        alert(response);
      };
    }
  });

  return [refForm, refSubmit];
}

export function useSendAuthEmail() {
  const refForm = createRef();
  const refSubmit = createRef();

  useEffect(() => {
    if (refSubmit.current) {
      refSubmit.current.onclick = async function () {
        const form = refForm.current;
        const email = form.email.value;

        if (vaildateEmail(email)) return;

        // const response = await formSubmit("/login", data);
        // alert(response);
      };
    }
  });

  return [refForm, refSubmit];
}

export const useVaildateEmail = () => {
  const ref = createRef();
  const [err, setErr] = useState(false);

  useEffect(() => {
    const { current } = ref;
    console.log(current);

    if (ref.current) {
      ref.current.onchange = (e) => {
        setErr(vaildateEmail(e.target.value));
        console.log(e.target.value);
      };
    }
  });
  return [ref, err];
};
export const useVaildatePassword = () => {
  const ref = createRef();
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.onchange = (e) => {
        setErr(vaildatePassword(e.target.value));
      };
    }
  });
  return [ref, err];
};

const vaildateEmail = (email) => {
  if (email.indexOf("@") === -1) return "유효한 이메일이 아닙니다.";
  if (email.split("@")[1] != "dongduk.ac.kr") return "학교 메일을 입력하세요";
  return false;
};
const vaildatePassword = (password) => {
  if (password === "") return "비밀번호를 입력해주세요";
  return false;
};

const formSubmit = (uri, data) => {
  return new Promise((resolve) =>
    axios
      .post(uri, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve(error);
      })
  );
};
