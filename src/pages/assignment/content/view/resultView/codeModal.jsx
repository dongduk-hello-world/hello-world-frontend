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

export default ({ testId, index, open, onClose }) => {
    const [code, setCode] = useState("");
    const [languageIdx, setLanguageIdx] = useState(0);
    const language = [ c, java, python ];

    useEffect(() => {
        (async () => {
            const { code, languageName } = await getCode(testId, index);
            setCode(code);
            if(languageName === "c") setLanguageIdx(0);
            if(languageName === "java") setLanguageIdx(1);
            if(languageName === "python") setLanguageIdx(2);
        })();
    });

    return (
        <Modal open={open} onClose={onClose}>
            <div style={{
                position: "absolute",
                width: "720px",
                height: "820px",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "15px"
            }}>
                <CodeMirror
                    height="820px"
                    value={code}
                    theme={githubLightInit({
                    settings: {
                        fontFamily: `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace`,
                        background: "rgb(250, 250, 250)",
                    },
                    })}
                    extensions={[language[languageIdx](), EditorView.editable.of(false), EditorState.readOnly.of(true)]}
                />
            </div>
        </Modal>
    );
};
