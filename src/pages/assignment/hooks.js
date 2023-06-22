import axiosPromise from "../../services/axiosPromise";

import dayjs from 'dayjs';

export const loadAssignment = async ( assignmentId ) => {
    const curDay = dayjs();
    let { assignment } = await axiosPromise.get(`/assignments/${assignmentId}`);
    let data = assignment;

    // endTime 구하기
    const testTime = data.test_time.split(":").map(Number);
    const endTime1 = curDay.add(testTime[0], "hour").add(testTime[1], "minute");
    const endTime2 = dayjs(data.end_time);
    data.endTime = endTime1.isAfter(dayjs(endTime2)) ? endTime1 : endTime2;

    data.lecture = await axiosPromise.get(`/classes/${data.classId}`);

    let { tests } = await axiosPromise.get(`/assignments/${assignmentId}/tests`);

    data.tests = tests;

    console.log(data);
    return data;
};

export const submit = async (testId, language, code) => {
    let data = await axiosPromise.post(`/tests/${testId}/submits`, {language, code});
    return data;
};

const createData = (id, submitTime, language, errMsg, runTime, fileSize, score) => {
    return { id, submitTime, language, errMsg, runTime, fileSize, score };
};

export const getResult = async (testId) => {
    let defaultData = {};
    defaultData.highScore = { score: "500/500", code: {
        language: "c", 
        code:
`#include <stdio.h>

int main(void) {
printf("Hello World");
}`
    }};
    defaultData.submits = [];
    const length = Math.floor(Math.random() * 20);
    for (let i = 0; i < length; i++) {
        defaultData.submits.push(createData(i, "2023-03-19 AM 11:00", "Java", null, "이정도", "이정도", 50));
    }

    let data = await axiosPromise.get(`/tests/${testId}/submits`, defaultData);

    return data;
};

export const getCode = async (testId, index) => {
    let data = await axiosPromise.get(`/tests/${testId}/submits/${index}`, 
        {
            language: "c",
            code: 
`#include <stdio.h>
    
int main(void) {
    print("Hello World");
}`,
            error: `print()가 아니라 printf()지롱~` 
        });
    
    return data;
}

export const close = async (assignmentId) => {
    const userId = sessionStorage.getItem('userId');
    await axiosPromise.post(`/assignments/${assignmentId}/results/${userId}`);
}