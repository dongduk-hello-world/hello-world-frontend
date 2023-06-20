import { useContext, useState, useEffect } from "react";

import { Tabs, Tab, IconButton } from "@mui/material";
import { Edit, Visibility, Delete } from "@mui/icons-material";

import CodeMirror from "@uiw/react-codemirror";
import { githubLightInit } from "@uiw/codemirror-theme-github";
import { markdown } from "@codemirror/lang-markdown";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

import styles from "./style.module.scss";

import { FormDataContext } from "./contexts";

export default ({ idx, onDelete }) => {
    const [formData, setFormData] = useContext(FormDataContext);
    const [view, setView] = useState(0);
    const [test, setTest] = useState(formData.tests[0]);

    const onChange = (value) => {
        formData.tests[idx].description = value;
        setFormData({...formData});
    }

    useEffect(() => {
        setTest(formData.tests[idx]);
    }, [idx]);

    return (
        <div className={styles.box}>
            <div className={styles.markdown}>
                <Tabs value={view} onChange={(event, newValue) => setView(newValue)}>
                    <Tab label="문항 작성" icon={<Edit />} iconPosition="start" />
                    <Tab label="미리 보기" icon={<Visibility />} iconPosition="start" />
                </Tabs>
                <div className={styles.deleteButton}>
                <IconButton   
                    onClick={() => {
                        if(window.confirm("문항을 삭제하면 복구할 수 없습니다.")) onDelete();
                    }}>
                    <Delete/>
                </IconButton> 
                </div>
                <div className={styles.markdownContent}>
                { view === 0 
                    && (
                        <CodeMirror
                            height= "100%"
                            value={test.description}
                            theme={githubLightInit({
                                settings: {
                                    fontFamily: `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace`,
                                    background: "rgb(250, 250, 250)",
                                },
                            })}
                            extensions={[markdown()]}
                            onChange={(value, viewUpdate) => onChange(value)}
                        />
                    )
                }
                { view === 1 
                    && (
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
                    )
                }
                </div>
                
            </div>
        </div>
    );
}