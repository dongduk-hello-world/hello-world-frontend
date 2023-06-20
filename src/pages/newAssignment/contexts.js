import { createContext } from "react";

import dayjs from 'dayjs';

export const ContextProvider = ({ children, formData }) => {
    let [data, setData] = formData;

    if(Object.keys(data).length === 0) {
        const curDay = dayjs();
        data = {
            classId: 1, // (임시)
            name: "테스트 이름",
            startTime: `${curDay.$y}-${curDay.$M}-${curDay.$D} ${curDay.$H}:${curDay.$m}`,
            endTime: `${curDay.$y}-${curDay.$M}-${curDay.$D} ${curDay.$H+1}:${curDay.$m}`,
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