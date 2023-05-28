import { useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";

import bodymovin from "bodymovin";

import styles from "./style.module.scss";

export default () => {
  const lottieRef = useRef();

  useEffect(() => {
    bodymovin.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets10.lottiefiles.com/packages/lf20_xafe7wbh.json",
    });
  });

  return (
    <div className={styles.account}>
      <div>
        <div ref={lottieRef} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
