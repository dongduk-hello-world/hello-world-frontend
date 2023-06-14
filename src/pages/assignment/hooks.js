import axiosPromise from "../../services/axiosPromise";

export const loadAssignment = async ( assignmentId ) => {
    let data = await axiosPromise.get(`/assignments/${assignmentId}`);
    if(!data) {
        data = {
            assignmentId: assignmentId,
            classId: 1,
            name: "중간고사",
            start_time: "",
            end_time: "",
            test_time: "",
            tests: [
                { testId: 1, name: "문제 1", description: "# 문제 1"},
                { testId: 2, name: "문제 2", description: "# 문제 2"},
                { testId: 3, name: "문제 3", description: "# 문제 3"},
                { testId: 4, name: "문제 4", description: "# 문제 4"},
            ]
        };
    }
    return data;
};

export const submit = async (testId, language, code) => {
    let data = await axiosPromise.post(`/tests/${testId}/submits`, {language, code});
    return data;
};

export const getResult = async (testId) => {
    let data = await axiosPromise.get(`/tests/${testId}/submits`);
    if(!data) {
        const createData = (id, submitTime, language, errMsg, runTime, fileSize, score) => {
            return { id, submitTime, language, errMsg, runTime, fileSize, score };
        }
        data = [];
        const length = Math.floor(Math.random() * 20);
        for (let i = 0; i < length; i++) {
            data.push(createData(i, "2023-03-19 AM 11:00", "Java", null, "이정도", "이정도", 50));
        }
    }
    return data;
};

export const getCode = async (testId, index) => {
    let data = await axiosPromise.get(`/tests/${testId}/submits/${index}`);
    if(!data) {
        data = {
            language: "java",
            code: `printf("Hello World");`
        }
    }
    return data;
}