
import { redirect, useLoaderData } from "react-router-dom";
import { getLoginedUser, getResult, getAssignmentInfo, getStudents } from "./hooks";

import StudentResult from "./Student";
import ProfessorResult from "./Professor";

export const loader = async ({ params }) => {
//    if(!sessionStorage.getItem("userId")) return redirect("/account");
    const assignmentId = params.assignmentId;
    const user = await getLoginedUser();

    if (user.type === "학생") {
        const data = {};

        data.user = user;
        data.assignment = await getAssignmentInfo(assignmentId);
        data.result = await getResult(assignmentId, user.userId);

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
                const result = await getResult(assignmentId, studentList[i].userId);
                if(result) data.results.push(result);
            }
        } else {
             for(let i = 0; i < 10; i++) {
                data.results.push({
                    user: { userId: 10, name: "홍길동", email: "2222222@dongduk.ac.kr", type: "학생" },
                    totalScore: 100, score: 50, tests: [{ name: "문제 1", maxScore: 50, score: 25 }, { name: "문제 2", maxScore: 50, score: 25}]
                });
            }
        }
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