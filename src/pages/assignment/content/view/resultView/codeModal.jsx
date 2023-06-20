import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { githubLightInit } from "@uiw/codemirror-theme-github";

import { cpp as c } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

import { getCode } from "../../../hooks";

import styles from "./style.module.scss";

export default ({ testId, index, open, onClose, highScore }) => {
    const [languageIdx, setLanguageIdx] = useState(0);
    const language = [ c, java, python ];

    const [code, setCode] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if(open) {
            if (highScore != null) {
                if(highScore.language === "c") setLanguageIdx(0);
                if(highScore.language === "java") setLanguageIdx(1);
                if(highScore.language === "python") setLanguageIdx(2);

                setCode(highScore.code);
                setError(highScore.error);
            }
            else {
                (async () => {
                    const { language, code, error } = await getCode(testId, index);
                    
                    if(language === "c") setLanguageIdx(0);
                    if(language === "java") setLanguageIdx(1);
                    if(language === "python") setLanguageIdx(2);

                    setCode(code);
                    setError(error);
                })();
            }
        }
        
    });

    return (
        <Modal open={open} onClose={onClose}>
            <div className={styles.modal}>
                <CodeMirror
                    height={error ? "60vh" : "80vh"}
                    value={code}
                    theme={githubLightInit({
                    settings: {
                        fontFamily: `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace`,
                        background: "rgb(250, 250, 250)",
                    },
                    })}
                    basicSetup={{ highlightActiveLine: false }}
                    extensions={[language[languageIdx](), EditorView.editable.of(false), EditorState.readOnly.of(true)]}
                />
                {error && <div className={styles.error}>{error}</div>}
            </div>
        </Modal>
    );
};
