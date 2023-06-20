import { useContext, useEffect } from "react";
import { TextField } from '@mui/material';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import 'dayjs/locale/en-gb';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import styles from "./style.module.scss";

import { FormDataContext } from "./contexts";

export default () => {
    const [formData, setFormData] = useContext(FormDataContext);

    const update = (attr, value) => {
        formData[attr] = value;
        setFormData({...formData});
    };

    return (
        <div className={styles.box}>
            <div className={styles.assignmentInputs}>
                <div>
                    <label>시험 명</label>
                    <TextField 
                        variant="outlined"
                        defaultValue={formData.name}
                        onChange={(e) => update("name", e.target.value)}
                        fullWidth
                    />
                </div>
                <div className={styles.dateInput}>
                    <label>응시 가능 기간</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
                        <div>
                            <span>응시 시작</span>
                            <DateTimePicker
                                defaultValue={dayjs(formData.startTime)}
                                onChange={(value) => {
                                    update("startTime", 
                                        `${value.$y}-${value.$M}-${value.$D} ${value.$H}:${value.$m}`);
                                }}
                            />
                        </div>
                        <div>
                            <span>응시 종료</span>
                            <DateTimePicker 
                                 defaultValue={dayjs(formData.endTime)}
                                 onChange={(value) => {
                                     update("endTime", 
                                         `${value.$y}-${value.$M}-${value.$D} ${value.$H}:${value.$m}`);
                                 }}/>
                        </div>
                    </LocalizationProvider>
                </div>
                <div>
                    <label>응시 시간</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                        <TimePicker 
                            views={['hours', 'minutes']} 
                            defaultValue={dayjs(`0000-00-00 ${formData.testTime}`)}
                            onChange={(value) => {
                                update("testTime", `${value.$H}:${value.$m}`);
                            }}
                        />
                    </LocalizationProvider>
                </div>
                <div>
                    <label>총 점</label>
                    <span>생성된 문제들의 점수를 합산한 결과입니다</span>
                    <TextField 
                        variant="outlined"
                        value={formData.tests.reduce((acc, cur) => acc + cur.score, 0)}
                        readonly
                    />    
                </div>
            </div>
        </div>
    );
}