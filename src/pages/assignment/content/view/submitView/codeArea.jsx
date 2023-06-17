import CodeMirror from "@uiw/react-codemirror";

import { githubLightInit } from "@uiw/codemirror-theme-github";

export default ({ language, code, onChange }) => {
    return (
        <CodeMirror
            height= "100%"
            value={code}
            theme={githubLightInit({
            settings: {
                fontFamily: `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace`,
                background: "rgb(250, 250, 250)",
            },
            })}
            extensions={[language()]}
            onChange={(value, viewUpdate) => onChange(value)}
        />
    );
};
