import { useContext, useEffect } from "react";
import { TextField } from '@mui/material';

import styles from "./style.module.scss";

import { FormDataContext } from "./contexts";

export default () => {
    const [formData, setFormData] = useContext(FormDataContext);

    // const update = (attr, value) => {
    //     formData[attr] = value;
    //     setFormData(formData);
    // };

    return (
        <div className={styles.box}>
            <div className={styles.assignmentInputs}>
                <div>
                    <label>시험 명</label>
                    <TextField variant="outlined" onChange={()=>{}}/>
                </div>
                <div>
                    <label>응시 가능 기간</label>
                    <TextField variant="outlined" />
                </div>
                <div>
                    <label>응시 시간</label>
                    <TextField variant="outlined" />
                </div>
                <div>
                    <label>총 점 (생성된 문제들의 점수를 합산한 결과입니다)</label>
                    <TextField variant="outlined" />
                </div>
            </div>
        </div>
    );
}