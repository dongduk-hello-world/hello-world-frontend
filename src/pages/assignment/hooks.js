import axiosPromise from "../../services/axiosPromise";

export const loadAssignment = async ( assignmentId ) => {
    let { assignment } = await axiosPromise.get(`/assignments/${assignmentId}`, 
        {
            assignment: {
                assignmentId: assignmentId,
                classId: 1,
                name: "중간고사",
                start_time: "",
                end_time: "",
                test_time: "",
            }
        });
    
    let data = assignment;

    let { tests } = await axiosPromise.get(`/assignments/${assignmentId}/tests`, 
        { tests: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });

    data.tests = [];
    for(let i = 0; i < tests.length; i++) {
        let test = await axiosPromise.get(`/tests/${tests[i]}`, { testId: tests[i], name: `문제 ${i+1}`, description: `# 문제 ${i+1}` });
        data.tests.push(test);
    }

    let classData = await axiosPromise.get(`/classes/${data.classId}`, { className: "알고리즘" });
    data.classData = classData;

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