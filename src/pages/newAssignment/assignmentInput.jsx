import { useContext, useEffect } from "react";
import { IconButton, TextField } from '@mui/material';
import { HourglassFull } from '@mui/icons-material';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import 'dayjs/locale/en-gb';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import styles from "./style.module.scss";

import { FormDataContext } from "./contexts";
import { setFormat } from "./hooks";

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
                                minDateTime={dayjs().subtract(1, "minute")}
                                onChange={(value) => update("startTime",  setFormat(value))}
                            />
                        </div>
                        <div>
                            <span>응시 종료</span>
                            <DateTimePicker 
                                 defaultValue={dayjs(formData.endTime)}
                                 minDateTime={dayjs(formData.startTime)}
                                 onChange={(value) => update("endTime", setFormat(value))}/>
                        </div>
                    </LocalizationProvider>
                </div>
                <div>
                    <label>응시 시간 </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                        <TimePicker 
                            views={['hours', 'minutes']} 
                            defaultValue={dayjs(`0000-00-00 ${formData.testTime}`)}
                            onChange={(value) => {
                                const H = value.$H < 10 ? "0"+value.$H : value.$H;
                                const m = value.$m < 10 ? "0"+value.$m : value.$m;

                                update("testTime", `${H}:${m}`);
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
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
}