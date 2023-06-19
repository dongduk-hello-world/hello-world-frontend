import { useContext, useState, useEffect, useRef } from "react";
import { TextField } from '@mui/material';

import styles from "./style.module.scss";

import { FormDataContext } from "./contexts";

export default ({ idx }) => {
    const [formData, setFormData] = useContext(FormDataContext);
    const inputNameRef = useRef();
    const inputScoreRef = useRef();

    useEffect(() => {
        if(inputNameRef.current) {
            inputNameRef.current.value = formData.tests[idx].name;
        }
        if(inputNameRef.current) {
            inputScoreRef.current.value = formData.tests[idx].score;
        }
    }, [idx]);
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
                        onChange={(e) => {
                            formData.tests[idx].score = e.target.value;
                            setFormData({...formData});
                        }}
                        inputRef={inputScoreRef}
                    />
                </div>
            </div>
        </div>
    );
}