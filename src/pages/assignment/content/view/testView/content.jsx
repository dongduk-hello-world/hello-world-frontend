import { useEffect, useRef, useState } from "react";

import { Box } from "@mui/material";

import styles from "../style.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default ({ test }) => {
  return (
    <div className={styles.view}>
      <ReactMarkdown
        children={test.description}
        remarkPlugins={[remarkGfm]}
        className="markdown-body"
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={oneLight}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
      {/* <ReactMarkdown className="markdown-body" children={text} /> */}
    </div>
  );
};
