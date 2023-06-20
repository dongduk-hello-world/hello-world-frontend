import { useContext, useState, useEffect, useRef } from "react";

import { TextField, IconButton } from '@mui/material';
import { Delete, AddCircleRounded } from '@mui/icons-material';

import CodeMirror from "@uiw/react-codemirror";
import { githubLightInit } from "@uiw/codemirror-theme-github";

import styles from "./style.module.scss";

import { FormDataContext } from "./contexts";

export default ({ idx }) => {
    const [formData, setFormData] = useContext(FormDataContext);
    const [testcases, setTestcases] = useState(formData.tests[idx].testcases);

    const inputNameRef = useRef();
    const inputScoreRef = useRef();

    useEffect(() => {
        if(inputNameRef.current) {
            inputNameRef.current.value = formData.tests[idx].name;
        }
        if(inputNameRef.current) {
            inputScoreRef.current.value = formData.tests[idx].score;
        }
        setTestcases(formData.tests[idx].testcases);
    }, [idx]);

    const create = () => {
        formData.tests[idx].testcases.push({ input: "1", output: "[1, 2, 3, 4]" });
        setFormData({...formData});
    }
    
    return (
        <div className={styles.box}>
            <div className={styles.assignmentInputs}>
                <div>
                    <label>문항 명</label>
                    <TextField
                        variant="outlined"
                        defaultValue={formData.tests[idx].name}
                        placeholder="문항의 이름을 입력해주세요."
                        onChange={(e) => {
                            formData.tests[idx].name = e.target.value;
                            setFormData({...formData});
                        }}
                        inputRef={inputNameRef}
                    />
                </div>
                <div>
                    <label>점수</label>
                    <span>모든 테스트케이스를 통과할 경우 학생이 획득할 점수입니다.</span>
                    <TextField
                        variant="outlined"
                        defaultValue={formData.tests[idx].score}
                        placeholder="문항의 점수를 입력해주세요."
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        onChange={(e) => {
                            if(isNaN(Number(e.target.value))) {
                                e.target.value = e.target.value.split('').filter((n) => !isNaN(Number(n))).join('');
                            }
                            
                            formData.tests[idx].score = Number(e.target.value);
                            setFormData({...formData});
                        }}
                        inputRef={inputScoreRef}
                    />
                </div>
                <div className={styles.testcaseList}>
                    {testcases.map((tc, i) => (
                        <div
                            className={styles.testcase}
                            key={`testcase_${idx}_${i}`}>
                            <IconButton
                                onClick={() => {
                                    formData.tests[idx].testcases.splice(i, 1);
                                    setFormData({...formData});
                                }}>
                                <Delete/>
                            </IconButton>
                            <div>
                                <label>입력</label>
                                <CodeMirror 
                                    value={tc.input}
                                    theme={githubLightInit({
                                        settings: {
                                            fontFamily: `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace`,
                                            background: "rgb(250, 250, 250)",
                                        },
                                    })}
                                    basicSetup={{
                                        lineNumbers: false,
                                    }}
                                    onChange={(value, viewUpdate) => {
                                        formData.tests[idx].testcases[i].input = value;
                                        setFormData({...formData});
                                    }}
                                />
                            </div>
                            <div>
                                <label>출력</label>
                                <CodeMirror 
                                    value={tc.output}
                                    theme={githubLightInit({
                                        settings: {
                                            fontFamily: `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace`,
                                            background: "rgb(250, 250, 250)",
                                        },
                                    })}
                                    basicSetup={{
                                        lineNumbers: false,
                                    }}
                                    onChange={(value, viewUpdate) => {
                                        formData.tests[idx].testcases[i].output = value;
                                        setFormData({...formData});
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                    <IconButton onClick={create}>
                        <AddCircleRounded />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}