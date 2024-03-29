import { createContext } from "react";

import dayjs from 'dayjs';

import { setFormat } from "./hooks";

export const ContextProvider = ({ children, formData, classId }) => {
    let [data, setData] = formData;

    if(Object.keys(data).length === 0) {
        const curDay = dayjs();
        console.log(curDay.toString(), curDay);
        data = {
            classId: classId,
            name: "테스트 이름",
            startTime: setFormat(curDay),
            endTime:setFormat(curDay.add(1, 'hour')),
            testTime: "01:00",
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