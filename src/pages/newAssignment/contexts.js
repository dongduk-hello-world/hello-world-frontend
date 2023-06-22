import { createContext } from "react";

import dayjs from 'dayjs';

const setFormat = (value) => {
    const M = value.$M+1 < 10 ? "0"+(value.$M+1).toString() : value.$M+1;
    const D = value.$D < 10 ? "0"+(value.$D).toString() : value.$D;
    const H = value.$H < 10 ? "0"+(value.$H).toString() : value.$H;
    const m = value.$m < 10 ? "0"+(value.$m).toString() : value.$m;
    const s = value.$s < 10 ? "0"+(value.$s).toString() : value.$s;

    return `${value.$y}-${M}-${D} ${H}:${m}:${s}`;
}

export const ContextProvider = ({ children, formData }) => {
    let [data, setData] = formData;

    if(Object.keys(data).length === 0) {
        const curDay = dayjs();
        console.log(curDay.toString(), curDay);
        data = {
            classId: 1, // (임시)
            name: "테스트 이름",
            start_time: setFormat(curDay),
            end_time:setFormat(curDay.add(1, 'hour')),
            test_time: "01:00",
            tests: [{
                name: `문제 1`,
                description: "# 문제 1",
                score: 0,
                testcases: [{ input: "1", output: "[1, 2, 3, 4]" }]
            }]
        }
        setData(data);
    }

    return (
        <FormDataContext.Provider value={[data, setData]}>
            {children}
        </FormDataContext.Provider>
    )
};

export const FormDataContext = createContext({}, () => {});