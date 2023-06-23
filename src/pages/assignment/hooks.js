import axiosPromise from "../../services/axiosPromise";

import dayjs from 'dayjs';

export const loadAssignment = async ( assignmentId ) => {
    const curDay = dayjs();
    let { assignment } = await axiosPromise.get(`/assignments/${assignmentId}`);
    let data = assignment;

    // endTime 구하기
    const testTime = data.testTime.split(":").map(Number);
    const endTime1 = curDay.add(testTime[0], "hour").add(testTime[1], "minute");
    const endTime2 = dayjs(data.endTime);
    data.testEndTime = endTime1.isBefore(dayjs(endTime2)) ? endTime1 : endTime2;

    data.lecture = await axiosPromise.get(`/classes/${data.classId}`);

    let { tests } = await axiosPromise.get(`/assignments/${assignmentId}/tests`);

    data.tests = tests;

    console.log(data);
    return data;
};

export const submit = async (testId, language, code) => {
    let data = await axiosPromise.post(`/tests/${testId}/submits`, {language, code});
    alert("채점이 완료되었습니다. \n기록 창에서 확인하세요.")
    return data;
};

export const getResult = async (testId) => {
    let data = await axiosPromise.get(`/tests/${testId}/submits`);

    console.log(data);
    return data;
};

export const getCode = async (testId, index) => {
    let data = await axiosPromise.get(`/tests/${testId}/submits/${index}`);
    return data;
}

export const close = async (assignmentId) => {
    const userId = sessionStorage.getItem('userId');
    await axiosPromise.post(`/assignments/${assignmentId}/results/${userId}`);
}