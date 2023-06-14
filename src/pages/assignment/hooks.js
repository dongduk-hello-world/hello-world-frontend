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