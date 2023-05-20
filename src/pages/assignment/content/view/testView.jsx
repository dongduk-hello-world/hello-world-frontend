import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import styles from "../style.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import markdownText from "./example_md.md";

export default () => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch(markdownText)
      .then((res) => res.text())
      .then((md) => {
        setText(md);
      });
  });
  return (
    <div className={styles.view}>
      <ReactMarkdown
        className="markdown-body"
        children={text}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  );
};
