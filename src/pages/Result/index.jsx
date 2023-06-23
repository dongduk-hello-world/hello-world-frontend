
import { redirect, useLoaderData } from "react-router-dom";
import { getLoginedUser, getResult, getAssignmentInfo, getStudents, getCodeData } from "./hooks";
import { isLogin } from "../../services/axiosPromise";

import StudentResult from "./Student";
import ProfessorResult from "./Professor";

export const loader = async ({ params }) => {
    if(!(await isLogin())) return redirect("/account");
    const assignmentId = params.assignmentId;
    const user = await getLoginedUser();

    if (user.type === "학생") {
        const data = {};

        data.user = user;
        data.assignment = await getAssignmentInfo(assignmentId);
        data.result = await getResult(assignmentId, user.user_id);

        console.log(data);
        return data;
    }

    if (user.type === "교수") {
        const data = {};

        data.user = user;
        data.assignment = await getAssignmentInfo(assignmentId);
        const studentList = await getStudents(data.assignment.classId);
        data.results = [];

        if(studentList.length > 0) {
            for(let i = 0; i < studentList.length; i++) {
                const result = await getResult(assignmentId, studentList[i].user_id);
                
                if(result) {
                    result.user = studentList[i];
                    for(let i = 0; i < result.tests.length; i++) {
                        result.tests[i].codeData = await getCodeData(assignmentId, result.user.user_id, result.tests[i].testId);
                    }
                    data.results.push(result);
                }
            }
        }
        data.results = data.results.sort((a, b) => a.score - b.score);
        console.log(data);
        return data;
    }

    return redirect("/account");
}

export default () => {
    const { user } = useLoaderData();

    if (user.type === "학생") {
         return <StudentResult/>
    }

    if (user.type === "교수") {
        return <ProfessorResult/>
   }
}